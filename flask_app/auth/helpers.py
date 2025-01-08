from functools import wraps

from flask import request, current_app, g

from flask_app.exceptions import InvalidTokenError, TokenExpiredError, InsufficentAccessError
from flask_app.auth.service import is_token_blacklisted
from flask_app.services import update_last_activity
from flask_app.models import Users
from flask_jwt_extended import verify_jwt_in_request

import json

def get_token_from_header():
    token = None
    if "Authorization" in request.headers:
        auth_header = request.headers["Authorization"]
        try:
            token = auth_header.split(" ")[1]
        except IndexError:
            token = None
    return token


def auth_required(f):
    """Decorator to require auth token on marked endpoint"""

    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = get_token_from_header()
        if not token:
            raise InvalidTokenError()
        _, jwt_data = verify_jwt_in_request()
        #Check that token is not blacklisted
        if is_token_blacklisted(token):
            raise TokenExpiredError()

        ## If the user is not in the database, then something fishy is going on, so throw an error
        user_id = jwt_data["sub"]
        current_user = Users.query.filter_by(id=user_id).first()
        if not current_user:
            raise InvalidTokenError()

        update_last_activity(user_id)
        g.jwt_data = jwt_data

        return f(*args, **kwargs)

    return decorated_function

def admin_required(f):
    """Decorator to require auth token on marked endpoint"""

    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = get_token_from_header()
        if not token:
            raise InvalidTokenError()

        _, jwt_data = verify_jwt_in_request()
        #Check that token is not blacklisted
        if is_token_blacklisted(token):
            raise TokenExpiredError()

        ## If the user is not in the database, then something fishy is going on, so throw an error
        user_id = jwt_data["sub"]
        current_user = Users.query.filter_by(id=user_id).first()
        if not current_user:
            raise InvalidTokenError()
        if current_user.role != current_app.config["ADMIN_ROLE"]:
            raise InsufficentAccessError()

        update_last_activity(user_id)
        g.jwt_data = jwt_data

        return f(*args, **kwargs)

    return decorated_function