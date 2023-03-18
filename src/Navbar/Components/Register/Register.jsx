import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'


export default function Registration() {
    let history = useNavigate();
    const [data,setData]=useState({
        username:"",
        telephone:"",
        email:"",
        password:"",
        fonction:"",
        ville:"",
        vousetes:""
    })

    const handlChange =(e) =>{
        setData({...data,[e.target.name]: e.target.value});
        // console.log(data)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        const sendData = {
            username:data.username,
            telephone:data.telephone,
            email:data.email,
            password:data.password,
            fonction:data.fonction,
            ville:data.ville,
            vousetes:data.vousetes
        }
        console.log(sendData)

        axios.post('http://localhost/PHP/Projet_cader/Insert.php',sendData)
        .then((result)=>{
            if (result.data.Status  == 'Invalid'){
                alert('Invalid User');}
            else{
                history('/Home')
            }
        })
    }

 
    
  return (
<div className='main-box'>

    <form onSubmit={submitForm}>

        <div className='row mb-5'>
            <div className='col-md-12'>
                <h1>Register</h1>
            </div>
        </div>

            <div className='row'>
                <div className='col-md-6'>Username</div>
                <div className='col-md-6'>
                    <input type="text" name="username" className='form-control'
                    onChange={handlChange} value={data.username}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Téléphone</div>
                <div className='col-md-6'>
                    <input type="tel" name="telephone" className='form-control'
                    onChange={handlChange} value={data.telephone}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>E-mail</div>
                <div className='col-md-6'>
                    <input type="email" name="email" className='form-control'
                    onChange={handlChange} value={data.email}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Password</div>
                <div className='col-md-6'>
                    <input type="password" name="password" className='form-control'
                    onChange={handlChange} value={data.password}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Fonction</div>
                <div className='col-md-6'>
                    <input type="text" name="fonction" className='form-control'
                    onChange={handlChange} value={data.fonction}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Ville</div>
                <div className='col-md-6'>
                    <input type="text" name="ville" className='form-control'
                    onChange={handlChange} value={data.ville}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Vous-Étes ?</div>
                <div className='col-md-6'>
                    <input type="text" name="vousetes" className='form-control'
                    onChange={handlChange} value={data.vousetes}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <input type="submit" name="submit" value='Register' className='btn btn-success'/>
                </div>
            </div>
     
    </form>    
</div>
  )
}