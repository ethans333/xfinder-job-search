import time
from faker import Faker
from api import create_app
from api.models import User, JobPosting
from api import db

fake = Faker()
app = create_app()

def seed_database():
    with app.app_context():
        for _ in range(50):
            job_posting = JobPosting(
                title=fake.job(),
                company=fake.company(),
                city=fake.city(),
                state=fake.state(),
                description=fake.text(),
                timestamp=int(time.time()),
            )
            db.session.add(job_posting)
        db.session.commit()
