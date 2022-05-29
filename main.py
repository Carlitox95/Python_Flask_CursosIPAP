from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') 
def index():
    usuario = "Veron, Carlos"
    return render_template('secciones/home.html', titulo="Inicio", usuario=usuario)

@app.route('/seccion1')  
def seccion1():
    usuarios = ["Juan", "Pedro", "Ana", "Maria"]
    return render_template('secciones/seccion1.html', titulo="Listado de Usuarios", all_users=usuarios)

@app.route('/seccion2')  
def seccion2():
    return render_template('secciones/seccion2.html', titulo="Video")

app.run(debug=True)
