import os
from flask import Flask
from flask_cors import CORS
from .models import db
from .routes.user import user_bp
from .routes.job_posting import job_posting_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

    db.init_app(app)

    app.register_blueprint(user_bp)
    app.register_blueprint(job_posting_bp)

    return app
