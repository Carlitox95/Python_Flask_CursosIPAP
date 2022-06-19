from logging import PlaceHolder
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField,DateField, SubmitField
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    usuario = StringField('Usuario', validators=[DataRequired('Este campo es requerido')])
    password = PasswordField('Contraseña', validators=[DataRequired('Este campo es requerido')])
    remember_me = BooleanField('Recordar')
    enviar = SubmitField('Iniciar Sesion')

class IngresarPersonalForm(FlaskForm):
    nombre = StringField('Nombre', validators=[],render_kw={"placeholder": "Nombre del empleado"})
    apellido = StringField('Apellido', validators=[],render_kw={"placeholder": "Apellido del empleado"})
    dni = StringField('DNI', validators=[DataRequired('Este campo es requerido')],render_kw={"placeholder": "DNI del empleado"})
    fecha = DateField('Fecha de Ingreso', validators=[DataRequired('Este campo es requerido')],render_kw={"placeholder": "dd/mm/aaaa"})
    telefono = StringField('Telefono', validators=[],render_kw={"placeholder": "Telefono del empleado"})
    enviar = SubmitField('Enviar')
    cancelar = SubmitField('Cancelar', render_kw={'class': 'btn btn-secondary', 'formnovalidate': 'True'})

