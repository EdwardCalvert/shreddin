from flask_app import db

class User(db.Model):
    __tablename__= "users"
    id = db.Column(db.String(32), primary_key=True)
    phone = db.Column(db.String(13))
    first_name = db.Column(db.String(254))
    last_name = db.Column(db.String(254))
    role = db.Column(db.Integer)