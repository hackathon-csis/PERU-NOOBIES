from flask import Flask, request, render_template
from base64 import decodestring
from flask import jsonify

user_img_path =  'userImg'
app = Flask(__name__)


def do_return(msg, val):
    dm = {"status": msg}
    resp = jsonify(dm)
    resp.status_code = val
    return resp

@app.route("/uploadimage/<username>",methods = ['POST'])
def uploadImage(username):
    print('inside uploadImage')
    image =  request.files['webcam']
    content = image.read()
    try:
        f = open("userImg/"+username+'.jpeg', 'xb')
        f.write(content)
        f.close()
        return do_return('You have been registered', 200)
    except:
        return do_return('Username Already Exit', 300)
    


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register')
def register():
    return render_template('register.html')

if __name__ == "__main__":
    app.run(debug=True)