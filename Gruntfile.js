module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '',
          src: ['sass/*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },

    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'concat_css', 'cssmin']
      },
      scripts: {
        files: 'js/*.js',
        tasks: ['uglify']
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      plugins: {
        src: [
          'js/vendor/modernizr-2.8.3.min.js',
          'js/vendor/jquery-1.12.0.min.js',
          'js/vendor/bootstrap.js', 
          'js/vendor/bootstrap-alert.js',
          'js/vendor/bootstrap-button.js',
          'js/vendor/bootstrap-carousel.js',
          'js/vendor/bootstrap-collapse.js',
          'js/vendor/bootstrap-dropdown.js',
          'js/vendor/bootstrap-modal.js',
          'js/vendor/bootstrap-popover.js',
          'js/vendor/bootstrap-scrollspy.js',
          'js/vendor/bootstrap-tab.js',
          'js/vendor/bootstrap-transition.js',
          'js/vendor/bootstrap-typehead.js',
        ],
        dest: 'dest/plugins.js'
      },
      main: {
        src: ['js/*.js'],
        dest: 'dest/main.js'
      },
      bundle: {
        src: ['dest/plugins.js', 'dest/main.js'],
        dest: 'dest/bundle.js'
      }
    },

    concat_css: {
      options: {},
      all: {
        src: [          
          'css/bootstrap.min.css',
          'css/bootstrap-responsive.min.css',
          'css/normalize.css',
          'css/defaults.css',
          'css/main.css',
          'css/sass/main.css'
          ],
        dest:'dest/styles.css'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dest/bundle.js',
        dest: 'dest/<%= pkg.name %>.min.js'
      }
    },
    
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dest/styles.min.css': ['dest/styles.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);


};