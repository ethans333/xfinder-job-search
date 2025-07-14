import os
from flask import Flask
from flask_cors import CORS

from api.models import db
from api.routes.user import user_bp
from api.routes.job_posting import job_posting_bp

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

db.init_app(app)

app.register_blueprint(user_bp)
app.register_blueprint(job_posting_bp)

def run_seed_if_needed():
    if os.environ.get("RUN_SEED") == "true":
        with app.app_context():
            from api.seed import seed_database
            seed_database()
