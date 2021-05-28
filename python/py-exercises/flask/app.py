from flask import Flask


app = Flask(__name__)


@app.route('/')
def home_page():
    html = '''
        <html>
            <body>
                <h1>Hello There!</h1>
            </body>
        </html>
            '''
    return html


@app.route('/hello')
def say_hello():
    html = '''
        <html>
            <body>
                <h1>Hello There!</h1>
            </body>
        </html>
            '''
    return html




@app.route('/goodbye')
def say_goodbye():
    return 'see you later'