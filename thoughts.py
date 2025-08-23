from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/submit_query", methods=["POST"])
def submit_query():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")
    # You can log, email, or save this in a DB
    print(f"Query from {name} ({email}): {message}")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)

import os

token = os.getenv("MY_SECRET_TOKEN")
if not token:
    raise ValueError("MY_SECRET_TOKEN is not set!")
