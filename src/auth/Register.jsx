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
    email: Yup.string().email("* Email inválido").required("* Campo obligatorio"),
    password: Yup.string().min(6, "* Debe contener 6 caracteres mínimo").required("* Campo obligatorio"),
    repeatPassword: Yup.string().min(6, "* Debe contener 6 caracteres mínimo").required("* Campo obligatorio")
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
  const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;


  return (
    <div className="auth">
        <form onSubmit={handleSubmit}>
          <h1>Registrarse</h1>
          <div>
            <label>Email</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" 
              className={errors.userName && touched.userName ? "error" : ""}
            /> 
            {errors.email && touched.email && <div className="error-color">{errors.email}</div>}
          </div>
           
          <div> 
            <label>Contraseña</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" type="password"
              className={errors.password && touched.password ? "error" : ""}
              />
            {errors.password && touched.password && <div className="error-color">{errors.password}</div>}
          </div>
          
          <div> 
            <label>Repetir contraseña</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.repeatPassword} name="repeatPassword" type="password"
              className={errors.repeatPassword && touched.repeatPassword ? "error" : ""}
              />
            {errors.repeatPassword && touched.repeatPassword && <div className="error-color">{errors.repeatPassword}</div>}
          </div>
          <button type="submit">Iniciar Sesión</button>
          <div>
            <p>
                ¿Ya tenes cuenta? <Link to="/">¡Inicia Sesión..!</Link>
            </p>
          </div>
        </form>
    </div>
  )
}

export default Register