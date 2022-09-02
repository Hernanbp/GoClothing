import React from 'react'
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import "./auth.styles.css"
import axios from 'axios';


export const Login = () => {

  const navigate = useNavigate()

  let initialValues = {
    userName:"",
    password:""
 }

 const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Campo obligatorio"),
    password: Yup.string().min(6, "6 caracteres mínimo").required("Campo obligatorio")
 });

 const onSubmit = () => {
  axios.post("https://goscrum-api.alkemy.org/auth/login", {
      // userName: "federico",
      // password: "123456789"
      userName: values.userName,
      password: values.password
  })
  .then(data => {
    // console.log(data)
    const token = data.data.result.token;
    console.log(token)
    localStorage.setItem("token", token)
    Swal.fire({
      icon: "success",
      title: "Logged in!",
      timer: 2500
    })
    navigate("/", {replace:true})
  })
  .catch(err => {
    console.error(err)
    Swal.fire({
      icon: "error",
      title: "Wrong username or password",
      timer: 2000
    })
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
              <h1> Log In</h1>
              <div>
                <label>Username</label>
                <input onChange={handleChange} value={values.userName} name="userName" />
              </div>
                {errors.userName && <div className="error-color">{errors.userName}</div>}
              <div> 
                <label>Password</label>
                <input onChange={handleChange} value={values.password} name="password" type="password"/>
              </div>
                {errors.password && <div className="error-color">{errors.password}</div>}
              <button type="submit">Login</button>
              <div>
                <Link to="/register"> Don't have an account? Create one! </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
