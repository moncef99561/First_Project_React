import React from 'react';
import { Route , Routes } from 'react-router-dom';
import NavBar from './Navbar/navbar';
import Home from './Navbar/Components/Home/Home'
import ProductCha from './Navbar/Components/Product/ProductCha';
import ProductCui from './Navbar/Components/Product/ProductCui';
import ProductDes from './Navbar/Components/Product/ProductDes';
import Contact from './Navbar/Components/Contact/Contact';
import Registration from './Navbar/Components/Register/Register';
import Login from './Navbar/Components/login/Login';
import Footer from './Footer/Footer';





function App(){


    return(
<div className='App'>
                <NavBar/>
            
<Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/ProductCui'  element={<ProductCui/>}/>
    <Route path='/ProductCha'  element={<ProductCha/>}/>
    <Route path='/ProductDes'  element={<ProductDes/>}/>
    <Route path='/Contact'  element={<Contact/>}/>
    <Route path='/Registration'  element={<Registration/>}/>
    <Route path='/Login'  element={<Login/>}/> 
    <Route path='/Home'  element={<Home/>}/> 
</Routes>
<Footer/>
</div>
        
    )
}
export default App;