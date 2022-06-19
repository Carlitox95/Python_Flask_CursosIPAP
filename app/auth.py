from flask import redirect, url_for, session
from functools import wraps


def login_required(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if 'usuario' not in session:
            return redirect(url_for('login'))
        return func(*args, **kwargs)
    return decorated_function

