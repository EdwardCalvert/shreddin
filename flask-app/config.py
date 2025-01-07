import os
from datetime import timedelta


def get_config(env: str):
    env_mapping = {
        "dev": DevelopmentConfig,
        "prod": ProductionConfig,
        "test": TestConfig
    }

    return env_mapping[env.lower()]


class Config:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)
    JWT_ALGORITHM = "RS256"

    JWT_SECRET_KEY = ''
    JWT_PRIVATE_KEY = ''
    JWT_PUBLIC_KEY = ''

    try:
        JWT_SECRET_KEY = open('rs256.pem').read()
        JWT_PRIVATE_KEY = open('rs256.pem').read()
        JWT_PUBLIC_KEY = open('rs256.pub').read()
    except:
        pass

    ##Define SQLACHEMY config
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Set connection config, so that the backend
    # reconnects after a period of inactivity
    SQLALCHEMY_POOL_RECYCLE = 35  # value less than backend’s timeout
    SQLALCHEMY_POOL_TIMEOUT = 7  # value less than backend’s timeout
    SQLALCHEMY_PRE_PING = True
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_recycle': SQLALCHEMY_POOL_RECYCLE,
        'pool_timeout': SQLALCHEMY_POOL_TIMEOUT,
        'pool_pre_ping': SQLALCHEMY_PRE_PING
    }

    CORS_HEADERS = 'Content-Type'
    DEBUG = False

    ##Defaults
    DEFAULT_POINTS = 10
    DEFAULT_ROLE = 1
    ADMIN_ROLE = 2


class DevelopmentConfig(Config):
    """Dev configuration."""
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv('DEV_DATABASE_URL',
                                        'postgresql://postgres:inq3quD3uOEyy60UaGx0YFqgrPuRaPY9U6ggHY1gzxiO0JS4WdEkZ1U0Xbt9T2mb@212.227.125.231:5436/healthify-dev')


class ProductionConfig(Config):
    """Production-specific configuration."""
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv('PROD_DATABASE_URL', 'postgresql://admin:admin@localhost/db')


class TestConfig(Config):
    TESTING = True
    FLASK_ENV = "testing"
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"  # In-memory database for tests
    JWT_SECRET_KEY = "test_secret_key"  # Dummy secret key for testing

    SQLALCHEMY_POOL_RECYCLE = None
    SQLALCHEMY_POOL_TIMEOUT = None
    SQLALCHEMY_PRE_PING = False
    SQLALCHEMY_ENGINE_OPTIONS = {}

    try:
        JWT_SECRET_KEY = open('../rs256.pem').read()
        JWT_PRIVATE_KEY = open('../rs256.pem').read()
        JWT_PUBLIC_KEY = open('../rs256.pub').read()
    except:
        pass