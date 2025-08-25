from flask import Flask, render_template, request, redirect, url_for
import os

def create_app():
    app = Flask(__name__)

    @app.route("/privacy")
    def privacy():
        return render_template("privacy.html")

    @app.route("/terms")
    def terms():
        return render_template("terms.html")

    # Enforce the token in production (Render provides PORT)
    @app.before_request
    def ensure_token():
        token = os.getenv("MY_SECRET_TOKEN")
        if os.getenv("PORT") and not token:
            # Only block requests on Render if the token is missing
            raise RuntimeError("MY_SECRET_TOKEN is not set!")

    @app.route("/")
    def home():
        return render_template("index.html")

    @app.route("/submit_query", methods=["POST"])
    def submit_query():
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        # Log to server logs (visible in Render logs)
        print(f"Query from {name} ({email}): {message}")
        return redirect(url_for("home"))

    return app

# Gunicorn looks for this name: thoughts:app
app = create_app()

# Local dev only (ignored by gunicorn on Render)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
