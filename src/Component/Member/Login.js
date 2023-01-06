import { useState } from "react";
import axios from "axios";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

function Login(props){
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
    level: ""
  })
  const [error, setError] = useState({})

  const handleInput =(e) =>{
    const nameInput = e.target.name
    const value = e.target.value
    setInput(state => ({...state, [nameInput]:value}))
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
   
    let errorSubmit = {}
    let flag = true

    if(input.email ==''){
        errorSubmit.email ='Vui long nhap mail'
        flag = false
    }
    else{
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
        testEmail.test(input.email)
        if(!testEmail.test(input.email)){
            errorSubmit.email =('Email Invalid!!!!')
        }
        else{
            errorSubmit.email =('')
        }
    }

    if(input.password ===''){
      errorSubmit.password ='Vui long nhap pass'
      flag = false
    }

    if(input.level ===''){
      errorSubmit.level ='Vui long nhap level'
      flag = false
    }

    if(!flag){
      setError(errorSubmit)
  }else{
      setError("")
      const data={
          email: input.email,
          password: input.password,
          level: 0
      }
      console.log(data)
      axios.post("http://localhost/laravel/laravel/public/api/login", data)
      .then(res=>{
      console.log(res)
        if(res.data.errors){
          setError(res.data.errors)
        }

        else{
          navigate('/')
          const yy = true
          localStorage.setItem('data', JSON.stringify(yy))
        }  
      })
      .catch (function (error) {
        console.log(error)
      })

  }
}  
return(
      <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
          <Error error={error} />
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit} action="" enctype="multipart/form-data">
            <input type="email" name="email" placeholder="Email Address" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
            <input type="level" name="level" placeholder="Level" onChange={handleInput} />
            <span>
              <input type="checkbox" className="checkbox" /> 
              Keep me signed in
            </span>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
        </div>
      </div>
    )
}
export default Login;