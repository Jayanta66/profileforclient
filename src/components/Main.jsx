import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import { Navigate, useNavigate } from 'react-router-dom'



const Main = () => {
  const Navigate = useNavigate();
  return (
    <div className='main'>
        <div className="overlay"></div>




        <video src={videoBg} autoPlay loop muted />



<div className="content">
<h2>Tiptops</h2>


    <div className="button">

      <button onClick={()=>Navigate("/suvo")} >Success Coching Center</button>


</div>

<div>


<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget'>
     <a itemprop='url' href='https://www.fiverr.com/jayanta_halder' rel="nofollow" target="">
        <div class='fiverr-seller-content' id='fiverr-seller-widget-content-6d56f626-3138-475c-91b8-a58b58a1cd55' itemprop='contentURL'></div>
        <div id='fiverr-widget-seller-data'>
            <div itemprop='name' >click here ... jayanta_halder</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'> As an experienced full stack developer, I’ll build robust and scalable web applications using Java. From front-end design to back-end functionality, I’ve got you covered. Let’s turn your ideas into reality!</div>
        </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-6d56f626-3138-475c-91b8-a58b58a1cd55' src='https://widgets.fiverr.com/api/v1/seller/jayanta_halder?widget_id=6d56f626-3138-475c-91b8-a58b58a1cd55' data-config='{"category_name":"Programming \u0026 Tech"}' async='true' defer='true'></script>

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
        <a className='link' href='/suvo'><h1 id="pp">Success Coching Center ... click here ... </h1></a>

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