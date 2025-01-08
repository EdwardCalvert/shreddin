from datetime import datetime, timezone
import bcrypt
from flask_app import db
from flask_app.exceptions import (
    InvalidCredentialsError,
    InvalidTokenError,
    TokenExpiredError,
)
from flask_app.exceptions import InvalidFieldError
from flask_app.models import Users, BlacklistToken
from flask_app.services import add_to_db
import uuid
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import create_refresh_token
from flask import current_app

ENCODING = "utf-8"


def create_user(email, password, first_name, last_name, role):
    # TODO 
    #VALIDATE INPUT, So it is not crazy. 

    email_used = True if Users.query.filter_by(email=email).first() else False
    if email_used:
        raise InvalidFieldError("email", "Email address is already used.")

    hashed_password = hash_password(password)
    user = Users(uuid.uuid4().hex, email, hashed_password, first_name[:20], last_name[:20], role)
    user.points = current_app.config["DEFAULT_POINTS"]
    add_to_db(user)
    return user


def login_user(email, password):
    """Generate a new auth token for the user"""
    saved_user = Users.query.filter_by(email=email).first()
    if saved_user and check_password(password, saved_user.password):
        access_token = encode_auth_token(saved_user.id)
        refresh_token = create_refresh_token(identity=saved_user.id)
        return access_token, refresh_token, saved_user
    else:
        raise InvalidCredentialsError()


def hash_password(password):
    return bcrypt.hashpw(password.encode(ENCODING), bcrypt.gensalt()).decode(ENCODING)


def check_password(password, hashed_password):
    return bcrypt.checkpw(password.encode(ENCODING), hashed_password.encode(ENCODING))


def encode_auth_token(user_id):
    access_token = create_access_token(identity=user_id)
    return access_token


def blacklist_token(token):
    bl_token = BlacklistToken(token, datetime.now(timezone.utc))
    add_to_db(bl_token)


def is_token_blacklisted(token):
    bl_token = BlacklistToken.query.filter_by(token=token).first()
    return True if bl_token else False
