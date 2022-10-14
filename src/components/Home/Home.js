import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Sidebar from '../Side/Sidebar';
import './Home.css'

const Home = () => {
    const product=useLoaderData()
    const[pro,setPro]=useState([])
    
    const handleClick=(product)=>{
        const exsts=pro.find(p=>p._id===product._id)
        if(exsts){
            alert('Order submit')
        }
        else{
            const newpro=[...pro,product]
            setPro(newpro) 
            alert('succesful')
        }
        
          
    }
    const handle=(p)=>{
        const item=pro.filter(tshirt=>tshirt._id!==p._id)
        setPro(item)
        if(p.length===1){
            return<p>Are you success</p>
        }
    }
    
    return (
        <div className='side'>
   <div className='cart-item'>
   {
product.map(product=><Cart key={product._id} handleClick={handleClick} product={product}></Cart>)
           }
   </div>
   <Sidebar handle={handle} pro={pro}></Sidebar>
        </div>
    );
};

export default Home;