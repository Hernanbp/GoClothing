//dependencies
import React from 'react'
import {Link} from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Swal from 'sweetalert2';
//Styles
import "./auth.styles.css"
//components

const Register = () => {

  // const navigate = useNavigate()

  let initialValues = {
    email:"",
    password:"",
    repeatPassword:"",
 }

 const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obligatorio"),
    password: Yup.string().min(6, "6 caracteres mínimo").required("Campo obligatorio"),
    repeatPassword: Yup.string().min(6, "6 caracteres mínimo").required("Campo obligatorio")
 });

 const onSubmit = () => {
  Swal.fire({
    icon: "success",
    title: "submitted",
    timer: 2000
  })
  // navigate("/", {replace:true})
 }

  const formik = useFormik( {initialValues, validationSchema, onSubmit} );
  const {handleSubmit, handleChange, values, errors} = formik

  return (
    <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Registrarse</h1>
          <div>
            <label>Email</label>
            <input onChange={handleChange} value={values.email} name="email" /> 
            {errors.email && <div className="error-color">{errors.email}</div>}
          </div>
           
          <div> 
            <label>Contraseña</label>
            <input onChange={handleChange} value={values.password} name="password" type="password"/>
            {errors.password && <div className="error-color">{errors.password}</div>}
          </div>
          
          <div> 
            <label>Repetir contraseña</label>
            <input onChange={handleChange} value={values.repeatPassword} name="repeatPassword" type="password"/>
            {errors.password && <div className="error-color">{errors.password}</div>}
          </div>
          <button type="submit">Iniciar Sesión</button>
          <div>
            <Link to="/"> ¿Ya tenes cuenta? ¡Inicia Sesión..! </Link>
          </div>
        </form>
    </div>
  )
}

export default Register