from flask_app import db

class Session(db.Model):
    __tablename__ = 'sessions'
    user_id = db.Column(db.String, db.ForeignKey("users.id"))