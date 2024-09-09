from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app,origins='*')


@app.route("/api/users", methods=["GET"])
def users ():
    return jsonify({
        "users" :[
            'TEST1',
            'TEST2',
            'TEST3',
            'TEST4',
            'TEST5',
            'TEST6',
        ]
    })

if __name__ == "__main__":
    app.run(debug=True,port=8080)