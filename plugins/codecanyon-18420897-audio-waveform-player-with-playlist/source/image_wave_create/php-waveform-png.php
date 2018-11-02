<?php

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  /*https://github.com/afreiday/php-waveform-png*/
  
  ini_set("max_execution_time", "30000");
  
  // how much detail we want. Larger number means less detail
  // (basically, how many bytes/frames to skip processing)
  // the lower the number means longer processing time
  define("DETAIL", 5);

  $width = 900;
  $height = 128;
  $foreground = "#A8DBA8";
  $progress = "#ff33ff";
  $background = "";
  $draw_flat = false;
  $stereo = false;
  
  /**
   * GENERAL FUNCTIONS
   */
  function findValues($byte1, $byte2){
    $byte1 = hexdec(bin2hex($byte1));                        
    $byte2 = hexdec(bin2hex($byte2));                        
    return ($byte1 + ($byte2*256));
  }
  
  /**
   * Great function slightly modified as posted by Minux at
   * http://forums.clantemplates.com/showthread.php?t=133805
   */
  function html2rgb($input) {
    $input=($input[0]=="#")?substr($input, 1,6):substr($input, 0,6);
    return array(
     hexdec(substr($input, 0, 2)),
     hexdec(substr($input, 2, 2)),
     hexdec(substr($input, 4, 2))
    );
  }  

	$fileArr = array();
	$handle = opendir('mp3');
	while (false !== ($file = readdir($handle))){ 
		if ($file != "." && $file != ".."){
  		if (substr(strtoupper($file),strlen($file)-4,4)==".MP3"){
			  $fileArr[] = 'mp3/'.$file;	
  		} 
  	}
	}
  closedir($handle);


  $len = count($fileArr);
  for($outer=0;$outer<$len;$outer++){

      // temporary file name
      $tmpname = substr(md5(time()), 0, 10);
     
      // copy from temp upload directory to current
      $co = copy($fileArr[$outer], "{$tmpname}_o.mp3");


      $path_parts = pathinfo($fileArr[$outer]);
      $wave_name = $path_parts['filename'];
      $wave_name2 = $wave_name . '_progress';
     
  	  // array of wavs that need to be processed
      $wavs_to_process = array();
      
      /**
       * convert mp3 to wav using lame decoder
       * First, resample the original mp3 using as mono (-m m), 16 bit (-b 16), and 8 KHz (--resample 8)
       * Secondly, convert that resampled mp3 into a wav
       * We don't necessarily need high quality audio to produce a waveform, doing this process reduces the WAV
       * to it's simplest form and makes processing significantly faster
       */
      if ($stereo) {
  		// scale right channel down (a scale of 0 does not work)
        exec("lame {$tmpname}_o.mp3 --scale-r 0.1 -m m -S -f -b 16 --resample 8 {$tmpname}.mp3 && lame -S --decode {$tmpname}.mp3 {$tmpname}_l.wav");
  		// same as above, left channel
        exec("lame {$tmpname}_o.mp3 --scale-l 0.1 -m m -S -f -b 16 --resample 8 {$tmpname}.mp3 && lame -S --decode {$tmpname}.mp3 {$tmpname}_r.wav");
        $wavs_to_process[] = "{$tmpname}_l.wav";
        $wavs_to_process[] = "{$tmpname}_r.wav";
      } else {
        exec("lame {$tmpname}_o.mp3 -m m -S -f -b 16 --resample 8 {$tmpname}.mp3 && lame -S --decode {$tmpname}.mp3 {$tmpname}.wav");
        $wavs_to_process[] = "{$tmpname}.wav";
      }
      
      // delete temporary files
/*
echo('<pre>');
var_dump($path_parts);
echo('</pre>');
exit;*/


      unlink("{$tmpname}_o.mp3");
      unlink("{$tmpname}.mp3");

      $img = false;
      $img2 = false;

      // generate foreground color
      list($r, $g, $b) = html2rgb($foreground);
      list($r2, $g2, $b2) = html2rgb($progress);

      // process each wav individually
      for($wav = 1; $wav <= sizeof($wavs_to_process); $wav++) {
   
        $filename = $wavs_to_process[$wav - 1];

      
        /**
         * Below as posted by "zvoneM" on
         * http://forums.devshed.com/php-development-5/reading-16-bit-wav-file-318740.html
         * as findValues() defined above
         * Translated from Croation to English - July 11, 2011
         */
        $handle = fopen($filename, "r");

        // wav file header retrieval
        $heading[] = fread($handle, 4);
        $heading[] = bin2hex(fread($handle, 4));
        $heading[] = fread($handle, 4);
        $heading[] = fread($handle, 4);
        $heading[] = bin2hex(fread($handle, 4));
        $heading[] = bin2hex(fread($handle, 2));
        $heading[] = bin2hex(fread($handle, 2));
        $heading[] = bin2hex(fread($handle, 4));
        $heading[] = bin2hex(fread($handle, 4));
        $heading[] = bin2hex(fread($handle, 2));
        $heading[] = bin2hex(fread($handle, 2));
        $heading[] = fread($handle, 4);
        $heading[] = bin2hex(fread($handle, 4));
        
        // wav bitrate 
        $peek = hexdec(substr($heading[10], 0, 2));
        $byte = $peek / 8;
        
        // checking whether a mono or stereo wav
        $channel = hexdec(substr($heading[6], 0, 2));
        
        $ratio = ($channel == 2 ? 40 : 80);
        
        // start putting together the initial canvas
        // $data_size = (size_of_file - header_bytes_read) / skipped_bytes + 1
        $data_size = floor((filesize($filename) - 44) / ($ratio + $byte) + 1);
        $data_point = 0;
        
        // now that we have the data_size for a single channel (they both will be the same)
        // we can initialize our image canvas
        if (!$img) {
          // create original image width based on amount of detail
  				// each waveform to be processed with be $height high, but will be condensed
  				// and resized later (if specified)
          $img = imagecreatetruecolor($data_size / DETAIL, $height * sizeof($wavs_to_process));
          $img2 = imagecreatetruecolor($data_size / DETAIL, $height * sizeof($wavs_to_process));
          
          // fill background of image
          if ($background == "") {
            // transparent background specified
            imagesavealpha($img, true);
            $transparentColor = imagecolorallocatealpha($img, 0, 0, 0, 127);
            imagefill($img, 0, 0, $transparentColor);

            imagesavealpha($img2, true);
            $transparentColor = imagecolorallocatealpha($img2, 0, 0, 0, 127);
            imagefill($img2, 0, 0, $transparentColor);

          } else {
            list($br, $bg, $bb) = html2rgb($background);
            imagefilledrectangle($img, 0, 0, (int) ($data_size / DETAIL), $height * sizeof($wavs_to_process), imagecolorallocate($img, $br, $bg, $bb));
            imagefilledrectangle($img2, 0, 0, (int) ($data_size / DETAIL), $height * sizeof($wavs_to_process), imagecolorallocate($img2, $br, $bg, $bb));
          }
        }

        while(!feof($handle) && $data_point < $data_size){
          if ($data_point++ % DETAIL == 0) {
            $bytes = array();
            
            // get number of bytes depending on bitrate
            for ($i = 0; $i < $byte; $i++)
              $bytes[$i] = fgetc($handle);
            
            switch($byte){
              // get value for 8-bit wav
              case 1:
                $data = findValues($bytes[0], $bytes[1]);
                break;
              // get value for 16-bit wav
              case 2:
                if(ord($bytes[1]) & 128)
                  $temp = 0;
                else
                  $temp = 128;
                $temp = chr((ord($bytes[1]) & 127) + $temp);
                $data = floor(findValues($bytes[0], $temp) / 256);
                break;
            }
            
            // skip bytes for memory optimization
            fseek($handle, $ratio, SEEK_CUR);
            
            // draw this data point
            // relative value based on height of image being generated
            // data values can range between 0 and 255
            $v = (int) ($data / 255 * $height);
            
            // don't print flat values on the canvas if not necessary
            if (!($v / $height == 0.5 && !$draw_flat))
              // draw the line on the image using the $v value and centering it vertically on the canvas
              imageline(
                $img,
                // x1
                (int) ($data_point / DETAIL),
                // y1: height of the image minus $v as a percentage of the height for the wave amplitude
                $height * $wav - $v,
                // x2
                (int) ($data_point / DETAIL),
                // y2: same as y1, but from the bottom of the image
                $height * $wav - ($height - $v),
                imagecolorallocate($img, $r, $g, $b)
              ); 
              imageline(
                $img2,
                // x1
                (int) ($data_point / DETAIL),
                // y1: height of the image minus $v as a percentage of the height for the wave amplitude
                $height * $wav - $v,
                // x2
                (int) ($data_point / DETAIL),
                // y2: same as y1, but from the bottom of the image
                $height * $wav - ($height - $v),
                imagecolorallocate($img2, $r2, $g2, $b2)
              );             
            
          } else {
            // skip this one due to lack of detail
            fseek($handle, $ratio + $byte, SEEK_CUR);
          }
        }
        
        // close and cleanup
        fclose($handle);

        // delete the processed wav file
        unlink($filename);
        
      }
      
      // resample the image to the proportions defined in the form
      $rimg = imagecreatetruecolor($width, $height);
      $rimg2 = imagecreatetruecolor($width, $height);
      // save alpha from original image
      imagesavealpha($rimg, true);
      imagesavealpha($rimg2, true);
      imagealphablending($rimg, false);
      imagealphablending($rimg2, false);
      // copy to resized
      imagecopyresampled($rimg, $img, 0, 0, 0, 0, $width, $height, imagesx($img), imagesy($img));
      imagecopyresampled($rimg2, $img2, 0, 0, 0, 0, $width, $height, imagesx($img2), imagesy($img2));

      $wave_location = 'wave/' . $wave_name . ".png";
      $wave_location2 = 'wave/' . $wave_name2 . ".png";
      imagepng($rimg, $wave_location);
      imagepng($rimg2, $wave_location2);
      imagedestroy($rimg);
      imagedestroy($rimg2);

      if($outer == $len - 1)echo('Finished making wave files!');
      
  }
    
?>
