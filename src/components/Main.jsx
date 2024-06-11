import React from 'react'
import videoBg from '../assets/videoBg.mp4'



const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>




        <video src={videoBg} autoPlay loop muted />



<div className="content">


        <div className="button">

<a className='link' href='/suvo'>Success Coching Center</a>




</div>
            
            <p><h1>Welcome</h1>To this site. We would like to turn your ideas into real .</p>
            <p>
        </p>

        <p>
          If you want to develop any website then You may Contact through Mobile or whatsApp : 8910425824 & javatecci@gmail.com .
        </p>
        <a id="linkk" className='clickMe' href='https://javatecci.github.io/client/'
        >
        <h1 id="ppg">here</h1>
        </a>
        <a className='link' href='/suvo'><h1 id="pp">Success Coching Center</h1></a>

        <div id="mypic">


        </div>


        <div id="mypic2">
        <a href='https://pages.razorpay.com/pl_OKZIM9qQBVQfVY/view'><h1 id="py">Pay now</h1></a>
        </div>

    

        </div>
    </div>
  )
}

export default Main