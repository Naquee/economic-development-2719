import React from 'react'
import './Home.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
    <div className='parent1'>
    <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1657724271/quazabro220soztloajm.jpg"
         alt="" />
         <p><span style={{fontSize:"10px"}}>Fashion</span> TEST-DRIVING WITH GOGO GRAHAM</p>
         <p>In Conversation with Devan Díaz, the Designer Reflects on Clothing Too Personal to Be Couture</p>

    </div>
    <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1655131636/ei0yg8ya3i4wv7piqfh7.jpg"
         alt="" />
         <p><span style={{fontSize:"10px"}}>Fashion</span>  TEST-DRIVING WITH GOGO GRAHAM</p>
         <p>In Conversation with Devan Díaz, the Designer Reflects on Clothing Too Personal to Be Couture</p> 
        
    </div>
    </div>

    <div className='parent2'>
        <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657574887/aapqvs6xhmiziwsusnpy.jpg"
         alt="" />
         <p> <span style={{fontSize:"12px"}}>RECENT</span>  (FASHION)INDUSTRY PLANTS</p>
         <p>Planters from Caudex, Modern Sprout,and Capra Designs</p> 
         <div style={{fontSize:"12px"}}> <span >FASHINION</span>   <span>|</span>  <span>july 19</span></div>
        </div>

        <div>
        <img style={{width:"80%"}} src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655131638/urk0fprqhpz1n38of06f.jpg"
         alt="" />
         <p> <span style={{fontSize:"12px"}}>RECENT</span>   QUIET EXUBERANCE:WALES BONNER X ADIDAS SS22</p>

         <p>Philip-Daniel Ducasse Shoots Psychedelic Band Crumb in This Season’s Must-Have Collaboration</p> 
         <div style={{fontSize:"12px"}}> <span >FASHINION</span>   <span>|</span>  <span>july 19</span></div>
        </div>
        <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657722780/ddzwdbs0oa5haocfeexi.jpg"
         alt="" />
         <p>(FASHION)INDUSTRY PLANTS</p>
         <p>Planters from Caudex, Modern Sprout,and Capra Designs</p> 
         <div style={{fontSize:"12px"}}> <span >FASHINION</span>   <span>|</span>  <span>july 19</span></div>
        </div>
    </div>

    <div className='parent1'>
    <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150202/st2b4kpcidbuymyne5q6.jpg"
         alt="" />
<p><span style={{fontSize:"13px"}}>Fetured</span>   ADDIDAS ORIGNAL</p>

<Button
  size='md'
  height='48px'
  width='200px'
  border='1px'
  borderColor='grey.500'
>
 SHOP WOMENSWEAR
</Button>

    </div>
    <div>
        <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150220/zdwad3rpmvd1yucrbzo6.jpg"
         alt="" />
         <p><span style={{fontSize:"13px"}}>Fetured</span>   ADDIDAS ORIGNAL</p>

  <div><Button
  size='md'
  height='48px'
  width='200px'
  border='1px'
  borderColor='grey.500'
>
  SHOP MENSWEAR
</Button></div>
        
        
    </div>
    </div>

    <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_2048,q_90,f_auto,dpr_auto/v1658263512/mv9jpshdc7ztttsttsk0.gif" alt="" />
    

  




    </>
  )
}

export default Home