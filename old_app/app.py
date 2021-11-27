from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


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


if __name__ == '__main__':
    app.run(port=4000)
