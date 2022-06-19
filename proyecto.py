#Importo y obtengo el acceso a la App generada con Flask
from app import app


app.config['SECRET_KEY'] = 'password-super-dificil'

#Inicio la ejecucion de la App en modo Debug
app.run(debug=True)
