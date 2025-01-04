import React from 'react'
import './accordian.css'
import Branding from '../../assets/accoidians/brandingAccordian.avif'
import Digital from '../../assets/accoidians/digitalAccordian.avif'
import Website from '../../assets/accoidians/websiteAccordian.avif'
import Development from '../../assets/accoidians/developmantaccordian.avif'
import Content from '../../assets/accoidians/contentaccordian.avif'
import Genrativeai from '../../assets/accoidians/genrativeAiAccordian.avif'
const accordian = () => {
    return (
        <>
            <div class="accordion accordion-flush " id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Branding
                    </button>
                    <div className='accordion-img-div'>
                        <img className='blending-img' src={Branding}/>
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints.
                    </div>
                    <div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Branding} alt=""/>
                    </div>
                </div>
            </div>






            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Digital Product
                    </button>
                    <div className='accordion-img-div'>
                        <img className=' digital-img' src={Digital} alt="" />
                    </div>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                    </div>
                    <div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Digital} alt=""/>
                    </div>
                    

                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        website
                    </button>
                    <div className='accordion-img-div website-top-left'>
                        <img className='website-img' src={Website} alt="" />
                    </div>

                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div><div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Website} alt=""/>
                    </div>
                </div>
            </div>

            {/*  */}
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Development
                    </button>
                    <div className='accordion-img-div website-top-left'>
                        <img className='development-img' src={Development} alt="" />
                    </div>

                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div><div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Development} alt=""/>
                    </div>
                </div>
            </div>

            {/*  */}
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Content
                    </button>
                    <div className='accordion-img-div website-top-left'>
                        <img className='development-img' src={Content} alt="" />
                    </div>

                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div><div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Content} alt=""/>
                    </div>
                </div>
            </div>
            {/*  */}

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Genrative AI
                    </button>
                    <div className='accordion-img-div website-top-left'>
                        <img className='development-img' src={Genrativeai} alt="" />
                    </div>

                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div><div className='accordion-img-inner-div'>
                        <img className=' inner-img ' src={Genrativeai} alt=""/>
                    </div>
                </div>
            </div>










        </div></>
    )
}

export default accordian