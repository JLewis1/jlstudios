import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    
    private var webView: WKWebView!
    private var progressView: UIProgressView!
    private var refreshButton: UIBarButtonItem!
    private var backButton: UIBarButtonItem!
    private var forwardButton: UIBarButtonItem!
    
    // Test server URL - change this to your Angular app URL when ready
    private let angularAppURL = "http://localhost:8080/test-webview.html"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        setupWebView()
        setupNavigationBar()
        loadAngularApp()
    }
    
    private func setupUI() {
        view.backgroundColor = UIColor.systemBackground
        title = "Angular WebView App"
    }
    
    private func setupWebView() {
        // Configure WKWebView with optimized settings
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.allowsInlineMediaPlayback = true
        webConfiguration.mediaTypesRequiringUserActionForPlayback = []
        
        // Allow access to local storage and other web features
        let preferences = WKPreferences()
        preferences.javaScriptEnabled = true
        webConfiguration.preferences = preferences
        
        // Create WebView
        webView = WKWebView(frame: view.bounds, configuration: webConfiguration)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        
        // Add progress view
        progressView = UIProgressView(progressViewStyle: .default)
        progressView.translatesAutoresizingMaskIntoConstraints = false
        progressView.progressTintColor = UIColor.systemBlue
        
        view.addSubview(webView)
        view.addSubview(progressView)
        
        // Set up constraints
        NSLayoutConstraint.activate([
            progressView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            progressView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            progressView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            progressView.heightAnchor.constraint(equalToConstant: 2)
        ])
        
        // Observe loading progress
        webView.addObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress), options: .new, context: nil)
        webView.addObserver(self, forKeyPath: #keyPath(WKWebView.canGoBack), options: .new, context: nil)
        webView.addObserver(self, forKeyPath: #keyPath(WKWebView.canGoForward), options: .new, context: nil)
    }
    
    private func setupNavigationBar() {
        // Create navigation buttons
        backButton = UIBarButtonItem(
            image: UIImage(systemName: "chevron.left"),
            style: .plain,
            target: self,
            action: #selector(goBack)
        )
        
        forwardButton = UIBarButtonItem(
            image: UIImage(systemName: "chevron.right"),
            style: .plain,
            target: self,
            action: #selector(goForward)
        )
        
        refreshButton = UIBarButtonItem(
            image: UIImage(systemName: "arrow.clockwise"),
            style: .plain,
            target: self,
            action: #selector(refresh)
        )
        
        let spacer = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        
        navigationItem.leftBarButtonItems = [backButton, forwardButton]
        navigationItem.rightBarButtonItem = refreshButton
        
        updateNavigationButtons()
    }
    
    private func loadAngularApp() {
        guard let url = URL(string: angularAppURL) else {
            showErrorAlert(message: "Invalid Angular app URL: \(angularAppURL)")
            return
        }
        
        let request = URLRequest(url: url)
        webView.load(request)
        
        print("Loading Angular app from: \(angularAppURL)")
    }
    
    private func updateNavigationButtons() {
        backButton.isEnabled = webView.canGoBack
        forwardButton.isEnabled = webView.canGoForward
    }
    
    @objc private func goBack() {
        webView.goBack()
    }
    
    @objc private func goForward() {
        webView.goForward()
    }
    
    @objc private func refresh() {
        webView.reload()
    }
    
    private func showErrorAlert(message: String) {
        let alert = UIAlertController(title: "Error", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        alert.addAction(UIAlertAction(title: "Retry", style: .default) { _ in
            self.loadAngularApp()
        })
        present(alert, animated: true)
    }
    
    // MARK: - KVO
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "estimatedProgress" {
            progressView.progress = Float(webView.estimatedProgress)
            progressView.isHidden = webView.estimatedProgress == 1.0
        } else if keyPath == "canGoBack" || keyPath == "canGoForward" {
            updateNavigationButtons()
        }
    }
    
    deinit {
        webView.removeObserver(self, forKeyPath: #keyPath(WKWebView.estimatedProgress))
        webView.removeObserver(self, forKeyPath: #keyPath(WKWebView.canGoBack))
        webView.removeObserver(self, forKeyPath: #keyPath(WKWebView.canGoForward))
    }
}

// MARK: - WKNavigationDelegate
extension ViewController {
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        print("Started loading: \(webView.url?.absoluteString ?? "Unknown URL")")
        progressView.isHidden = false
    }
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("Finished loading: \(webView.url?.absoluteString ?? "Unknown URL")")
        progressView.isHidden = true
        title = webView.title ?? "Angular WebView App"
    }
    
    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("Navigation failed with error: \(error.localizedDescription)")
        progressView.isHidden = true
        showErrorAlert(message: "Failed to load the Angular app. Please check your connection and try again.\n\nError: \(error.localizedDescription)")
    }
    
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        print("Provisional navigation failed with error: \(error.localizedDescription)")
        progressView.isHidden = true
        showErrorAlert(message: "Cannot connect to the Angular app server. Make sure it's running on \(angularAppURL)\n\nError: \(error.localizedDescription)")
    }
}

// MARK: - WKUIDelegate
extension ViewController {
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alert = UIAlertController(title: "Angular App", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in
            completionHandler()
        })
        present(alert, animated: true)
    }
    
    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        let alert = UIAlertController(title: "Angular App", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in
            completionHandler(true)
        })
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel) { _ in
            completionHandler(false)
        })
        present(alert, animated: true)
    }
}