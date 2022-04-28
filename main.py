from distutils.debug import DEBUG
from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from config import API_KEY as key
import requests

# Setup Flask
app = Flask(__name__)

# Bypass CORS at the front end
cors = CORS(app)
BASE_URL = "https://the-one-api.dev/v2"

@app.route("/list-books")
def list_books():
    r = requests.get(url=f'{BASE_URL}/book')
    data = r.json()
    return data

@app.route("/list-movies")
def list_movies():
    r = requests.get(url=f'{BASE_URL}/movie', headers={'Authorization': f'Bearer {key}'})
    data = r.json()
    return data

@app.route("/list-characters")
def list_characters():
    limit = 10
    r = requests.get(url=f'{BASE_URL}/character?limit={limit}', headers={'Authorization': f'Bearer {key}'})
    data = r.json()
    return data

@app.route("/get-book")
def get_book():
    book_id = request.args.get("book-id")
    r = requests.get(url=f'{BASE_URL}/book/{book_id}')
    data = r.json()
    return data

@app.route("/get-book-chapters")
def get_book_chapters():
    book_id = request.args.get("book-id")
    r = requests.get(url=f'{BASE_URL}/book/{book_id}/chapter')
    data = r.json()
    return data

@app.route("/get-character")
def get_character():
    character_id = request.args.get("character-id")
    r = requests.get(url=f'{BASE_URL}/character/{character_id}', headers={'Authorization': f'Bearer {key}'})
    data = r.json()
    return data

@app.route("/list-chapters")
def list_chapters():
    r = requests.get(url=f'{BASE_URL}/chapter', headers={'Authorization': f'Bearer {key}'})
    data = r.json()
    return data

@app.route("/get-chapter")
def get_chapter():
    chapter_id = request.args.get("chapter-id")
    r = requests.get(url=f'{BASE_URL}/chapter/{chapter_id}', headers={'Authorization': f'Bearer {key}'})
    data = r.json()
    return data

# Run the app
if __name__ == "__main__":
    app.run(debug=True)