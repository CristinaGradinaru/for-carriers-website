from flask import Blueprint

bp = Blueprint('shop', __name__, url_prefix='/shop')

from app import models
from . import routes