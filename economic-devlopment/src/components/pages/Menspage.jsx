
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import './Menspage.css';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const Menspage = () => {
  const [mens,setMens]=useState([])
  useEffect(()=>{
    const fetchPage = async () =>{
      let res=await fetch("http://localhost:8080/menspage")
      let data=await res.json();
      console.log(data)
      setMens(data)

    }
    fetchPage();

  },[])
  return (
    <>
    <div className='topcontainer'>
    <div className='leftbar'>

    <div style={{marginLeft:"-2rem"}}><Checkbox  backgrounColor='black' defaultChecked>Check</Checkbox></div>
    <div style={{float:'left',marginTop:"1rem"}}>
    <h2 style={{color:'red'}}>Topwear</h2>
    <p>T-shirt</p>
    <p>Casual-Shirt</p>
    <p>Sweater</p>
    <p>Jacket</p>
    <p>Blazer</p>
    <p>Suit</p>
    <p>Rain jacket</p>
    </div>

    <div style={{float:'left',marginTop:"1rem"}}>
    <h2 style={{color:'red'}}>Bottomwear</h2>
    <p>Jeans</p>
    <p>Casual Trouar</p>
    <p>Formal Trouar</p>
    <p>Shorts</p>
    <p>Track Pants </p>
    
    </div>
    <div style={{float:'left',marginTop:"1rem"}}>
    <h2 style={{color:'red'}}>Footwear</h2>
    <p>Casual Shoes</p>
    <p>Sport shoes</p>
    <p>Formal shoes</p>
    <p>Sneaker</p>
    
    
    </div>



    </div>


  
    <div className='middlepage'>
    {
      mens.map((page)=>(
        <div className='container'>
        <div>
          <img src={page.image} alt="" />
        </div>
       <div>
       <p>{page.title}</p>
        <p>{page.para}</p>
        <p>{page.prod}</p>
        <p style={{backgrounColor:"teal"}}>{page.price}</p>
        <button style={{backgrounColor:'red'}}>Add to cart</button>
       </div>
        </div>
      ))
    }

    </div>
    
    <div className='rightbar'>
    <h4>Sort</h4>
    <p>Latest Arrival</p>
    <p>Tranding</p>
    <p>Price Low To High</p>
    <p>Price high To Low</p>
    <br />
    <h4 style={{fontWeight:"bold"}}>Color</h4>
   <select name="All color" id="">
   <option value="">All Color</option>
    <option value="">black</option>
    <option value="">Brown</option>
    <option value="">Blue</option>
    <option value="">Brown</option>
    <option value="">Burgandy</option>
    <option value="">Grey</option>
    <option value="">Green </option>
    <option value="">Navy</option>
    <option value="">Orange</option>
    <option value="">Pink</option>
    <option value="">Purpal</option>
    <option value="">Tan</option>
    <option value="">White</option>
    <option value="">Yellow</option>


   </select>
      

     
    </div>
    </div>
    <Footer/>


    
    </>
  )
}

export default Menspage