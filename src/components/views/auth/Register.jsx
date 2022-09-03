import React from 'react'
import { Link, useNavigate} from "react-router-dom"
// useNavigatef rom "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup';
// import Swal from 'sweetalert2';
import "./auth.styles.css"
// import axios from "axios"

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
  console.log("fue ")
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

// const onSubmit = () => {
//   axios.post("https://goscrum-api.alkemy.org/auth/register", {
//     // user: {
//     //   userName: values.userName,
//     //   password: values.password,
//     //   email: values.email,
//     //   teamID: values.teamId,
//     //   role: values.role,
//     //   continent: values.continent,
//     //   region: values.region
//     // }
//     user: {
//       userName: "1prueba2",
//       password: "1prueba2",
//       email: "1prueba2@gmail.com",
//       teamID: "9cdbd108-f924-4383-947d-8f0c651d0dad",
//       role: "Team Leader",
//       continent: "America",
//       region: "Otro"
//     }
//   })
//   .then(data=> {
//     console.log(data)
//     Swal.fire({
//       icon: "success",
//       title: "Registered!",
//       timer: 2500
//     })
//     navigate("/login", {replace:true})
//   })
//   .catch(err => {
//     console.log(err)
//     Swal.fire({
//       icon: "error",
//       title: "There´s already an account with those credentials",
//       timer: 2500
//     })
//   })

//   Swal.fire({
//     icon: "success",
//     title: "submitted",
//     timer: 2000
//   })
//  }