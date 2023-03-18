import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
//import bg1 from './images/bg1.jpg'


export default function Login() {
  return (
    <div className='main-box'>

    <form>

        <div className='row mb-5'>
            <div className='col-md-12'>
                <h1>Login</h1>
            </div>
        </div>

            <div className='row'>
                <div className='col-md-6'>Email</div>
                <div className='col-md-6'>
                    <input type="email" name="email" className='form-control'/>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>Password</div>
                <div className='col-md-6'>
                    <input type="tel" name="telephone" className='form-control'/>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <input type="submit" name="submit" value='Register' className='btn btn-success'/>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-md-12'>
                    Not A Member Yet ? <Link to='/Registration'>Create</Link>
                </div>
            </div>
    </form>    
</div>  )
}
