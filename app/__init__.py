#Importamos Flask
from flask import Flask


#Generamos la App
app = Flask(__name__)

#Importamos las rutas
from app import routes
