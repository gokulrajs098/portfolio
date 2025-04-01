import http.server
import socketserver

class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.extensions_map.update({
            '': 'application/octet-stream',
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.svg': 'image/svg+xml',
        })

PORT = 8000
Handler = PortfolioHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving portfolio at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()