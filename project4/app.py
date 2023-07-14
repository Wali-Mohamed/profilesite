import numpy as np
import seaborn as sns
from flask import Flask, request, jsonify, render_template
#from readSongs import *
import readSongs
import sqlite3

conn=sqlite3.connect(r"1.SQLite\songs\c9SQLMusic.db" , check_same_thread=False)
cursor = conn.cursor()



# Create flask app
flask_app=Flask(__name__)
#flask_app = Flask(__name__)

@flask_app.route("/")
def Home():
    return render_template("menu.html")
    #return render_template("styles.css")

@flask_app.route("/read", methods = ["POST"])
def read():
    songs=readSongs.read()
    
    # return render_template("index.html", prediction_text = "The flower species is {}".format(prediction))
    return render_template("list.html", read_songs = songs )

@flask_app.route("/add")
def add():
   return render_template("add.html")
@flask_app.route("/list", methods = ["POST", 'GET'])
def append():
    songList=[]
    title=request.form['title']
    songList.append(title)
    artist=request.form['artist']
    songList.append(artist)
    genre=request.form['genre']
    songList.append(genre)
    songlist=songList
    cursor.execute("INSERT INTO songs VALUES(NULL, ?,?,?)", songList)
    conn.commit() # use commit method to write the changes to the database permanently
    songs=readSongs.read()
    
    # return render_template("index.html", prediction_text = "The flower species is {}".format(prediction))
    return render_template("list.html", songlist=f"{title} added to Songs Table", read_songs = songs)
    
if __name__ == "__main__":
    flask_app.run(debug=True)
