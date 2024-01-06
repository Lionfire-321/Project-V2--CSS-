from flask import Flask, request, jsonify, send_from_directory
from datetime import datetime
import os, json

app = Flask(__name__, static_url_path='', static_folder='web')

eviews_path = os.path.join(os.getcwd(), 'reviews.json')

@app.route('/store', methods=['POST'])
def storeReview():
    if request.method != "POST":
        return "ERROR"

    resp = {
        "Name": request.form.get("Name", ""),
        "Surname": request.form.get("Surname", ""),
        "DateTime": request.form.get("DateTime", ""),
        "Message": request.form.get("Message", "")
    }

    with open(reviews_path, 'a') as file:
        json.dump(resp, file)
        file.write('\n')  # Add a newline for each entry

    return jsonify(resp)

@app.route('/getsuggestions', methods=['GET'])
def get_suggestions():
    suggestions = []
    with open(reviews_path, 'r') as file:
        for line in file:
            suggestion = json.loads(line)
            suggestions.append(suggestion)
    
    return jsonify({'suggestions': suggestions})

@app.route('/')
def index():
    return app.send_static_file('index.html')
