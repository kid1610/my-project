import { useState } from 'react';
import Error from './Error';
import axios from 'axios';
function Register(props){
    const [input, setInput] = useState({
        name:'',
        email:'',
        pass:'',
        phone:'',
        address:'',
        level:''

    })
    const [error, setError] = useState({})
    let [getFile, setFile] = useState("")
    const [avatar, setAvatar] = useState()
    
    const handleInput =(e) =>{
        const nameInput = e.target.name
        const value = e.target.value
    setInput(state => ({...state, [nameInput]:value}))
    }


    const xulyfile =(e) =>{
        // setFile(event.target.files)

        const file = e.target.files
      
        let reader = new FileReader()
    
        reader.onload = (e) => {
            setAvatar(e.target.result)
            setFile(file)
        };

        reader.readAsDataURL(file[0])
       
        // else if(getFile[0][size] > 1024*1024 ){
        //     //getFile[0][size] > 1024*1024 // Check if the file size is bigger than 1MB and prepare a message.
        //     setError('The allowed file size is 1M')    
        // }
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

    if(getFile ==''){
        errorSubmit.setFile ='Vui long chon file Anh'
        flag = false
    }else{
        // console.log(getFile[0]["size"])
        if(getFile[0]["size"] > 1024*1024){
            errorSubmit.setFile='Buc anh dung luong qua lon!'
        }
        else{
            errorSubmit.setFile=''
        }
      

    }

    if(input.pass ===''){
        errorSubmit.pass ='Vui long nhap pass'
        flag = false
    }

    if(input.name ===''){
        errorSubmit.name ='Vui long nhap ten'
        flag = false
        
    }

    if(input.address ===''){
        errorSubmit.setAddress ='Vui long nhap dia chi'
        flag = false
    }

    if(input.phone ===''){
        errorSubmit.setPhone ='Vui long nhap dia chi'
        flag = false
    }

    if(input.level ===''){
        errorSubmit.setLevel ='Vui long nhap 1: admin, 0: member'
        flag = false
    }
    
    if(!flag){
        setError(errorSubmit)
    }else{
        setError("")
        const data={
            name: input.name,
            email: input.email,
            password: input.pass,
            phone: input.phone,
            avatar: avatar,
            address: input.address,
            level: input.level
        }
        console.log(data)
        axios.post("http://localhost/laravel/laravel/public/api/register", data)
        .then(res=>{
        console.log(res)
            if(res.data.errors){
                setError(res.data.errors)
            }
        })
    }
}
    return(
        
        
    <div class="col-sm-4">
        <div class="signup-form">
        <Error error={error} /> 
            <h2>New User Signup!</h2>
            <form onSubmit={handleSubmit} action="" enctype="multipart/form-data">
                <input type="text" name="name" placeholder="Name" onChange={handleInput} />
                <input type="email" name="email" placeholder="Email Address" onChange={handleInput} />
                <input type="password" name="pass" placeholder="Password" onChange={handleInput} />
                <input type="text" name="phone" placeholder="Phone" onChange={handleInput} />
                <input type="file" name="avatar" placeholder="Avatar" onChange={xulyfile} />
                <input type="text" name="address" placeholder="Address" onChange={handleInput} />
                <input type="text" name="level" placeholder="Level" onChange={handleInput} />
                <button type="submit" class="btn btn-default"> Signup</button>
            </form>
        </div>   
    </div>
    )
}
export  default Register;