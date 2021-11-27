from flask import Flask, render_template
from flask_compress import Compress
import re


app = Flask(__name__)

# Configure Flask Compress
# Types of files to compress
app.config['COMPRESS_MIMETYPES'] = ['text/html', 'text/css', 'text/javascript', 'application/javascript',
                                    'application/json', 'application/vnd.ms-fontobject', 'image/svg+xml',
                                    'font/ttf', 'font/woff', 'font/woff2', 'application/x-javascript',
                                    'text/xml', 'application/xml', 'application/xml+rss', 'image/x-icon',
                                    'application/x-font-ttf', 'font/opentype', 'font/x-woff', 'image/svg+xml', 'font/sfnt', 'application/octet-stream']
app.config['COMPRESS_BR_LEVEL'] = 6

Compress(app)  # Instantiate Flask Compress into app


@app.route('/')
def index():
    return render_template('index.min.html')


@app.route('/about')
def about_us():
    return render_template('about.html')


@app.route('/contact')
def contact_us():
    return render_template('contact.html')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


@app.route('/services')
def services():
    return render_template('services.html')


@app.after_request
def after_request(response):
    content_type = str(response.headers['Content-Type']).split(';')[0]
    check_content_type = re.search(r"(\/css|\/javascript|font\/|image\/|application\/)", content_type)
    if check_content_type is not None:
        response.headers['Cache-Control'] = "public, max-age=31536000;"
    return response

if __name__ == '__main__':
    app.run(port=4000)
