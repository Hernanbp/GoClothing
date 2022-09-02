import React from 'react'
import { Link} from "react-router-dom"
// useNavigatef rom "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import "./auth.styles.css"


export const Register = () => {

  // const navigate = useNavigate()

  let initialValues = {
    email:"",
    password:""
 }

 const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email válido").required("Campo obligatorio"),
    password: Yup.string().min(6, "6 caracteres mínimo").required("Campo obligatorio")
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
    <>
      <section className='auth-page'>
        <div className='auth-img'><img src="../assets/image-category-2.png" alt="" /></div>

        <div className='auth-container'>
          <div className="auth">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div>
                <label>Email</label>
                <input onChange={handleChange} value={values.email} name="email" />
              </div>
                {errors.email && <div className="error-color">{errors.email}</div>}
              <div> 
                <label>Password</label>
                <input onChange={handleChange} value={values.password} name="password" type="password"/>
              </div>
                {errors.password && <div className="error-color">{errors.password}</div>}
              <button type="submit">Login</button>
              <div>
                <Link to="/login">Already have an account? Sign in!</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}