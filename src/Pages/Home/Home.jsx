import React from 'react'
import './Home.css'
import Accordian from '../../components/accodians/accordian.jsx'
import Herovedio from '../../assets/hero-scale-vedio.mp4'
import Samsung from '../../assets/company-logo-img/sAmsung.avif'
import Credit from '../../assets/company-logo-img/credit-karma.avif'
import FOssil from '../../assets/company-logo-img/fOssil.avif'
import ADp from '../../assets/company-logo-img/aDp.avif'
import CoCacola from '../../assets/company-logo-img/coCacola.avif'
import COinbase from '../../assets/company-logo-img/cOinbase.avif'
import VMvare from '../../assets/company-logo-img/vMvare.avif'
import SLack from '../../assets/company-logo-img/sLack.avif'
import DiScover from '../../assets/company-logo-img/diScover.avif'
import CisCo from '../../assets/company-logo-img/cisCo.avif'
import Arrow from '../../components/arrowComponent/arrow'
import Img1 from '../../assets/scroll-imgs/img1.avif'
import Img2 from '../../assets/scroll-imgs/img2.avif'
import Img3 from '../../assets/scroll-imgs/img3.avif'
import Img4 from '../../assets/scroll-imgs/img4.avif'
import Img5 from '../../assets/scroll-imgs/img5.avif'
import Img6 from '../../assets/scroll-imgs/img6.avif'
import Img7 from '../../assets/scroll-imgs/img7.avif'
import Img8 from '../../assets/scroll-imgs/img8.avif'
import Img9 from '../../assets/scroll-imgs/img9.avif'
import Img10 from '../../assets/scroll-imgs/img10.avif'
import skillImg1 from '../../assets/news-imgs/news-img1.avif'
import skillImg2 from '../../assets/news-imgs/news-img2.avif'
import skillImg3 from '../../assets/news-imgs/news-img3.avif'
const Home = () => {
    return (
        <div >
            <div className='section-spacing'>
                <div className='home-hero-div'>
                    <h1 className='hero-text'>Clay is a global branding
                        and UX design agency</h1>
                </div>
                <div className='hero-vedio-div'>
                    <span className='hero-span'>
                        <video src={Herovedio} autoPlay loop muted >
                            <source src={Herovedio} type="" />
                        </video>
                    </span>
                </div>
                <div className='skill-exp-div'>
                    <div className="skill-left-div">
                        <p className='skill-sub-title'>We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.</p></div>

                    <div className="skill-right-div">
                        <Accordian />
                    </div>
                </div>

                <div className="company-logo-section">
                    <div className="company-logo-divs">
                        <ul className='mobile-view '>
                            <li className='company-img-items'><img src={Samsung} alt="" /></li>
                            <li className='company-img-items'><img src={Credit} alt="" /></li>
                            <li className='company-img-items'><img src={FOssil} alt="" /></li>
                            <li className='company-img-items'><img src={ADp} alt="" /></li>
                            <li className='company-img-items'><img src={CoCacola} alt="" /></li>
                            <li className='company-img-items'><img src={COinbase} alt="" /></li>
                            <li className='company-img-items'><img src={VMvare} alt="" /></li>
                            <li className='company-img-items'><img src={SLack} alt="" /></li>
                            <li className='company-img-items'><img src={DiScover} alt="" /></li>
                            <li className='company-img-items'><img src={CisCo} alt="" /></li>
                        </ul>
                        <ul className='website-list'>
                            <li className='company-img-items'><img src={Samsung} alt="" /></li>
                            <li className='company-img-items'><img src={Credit} alt="" /></li>
                            <li className='company-img-items'><img src={FOssil} alt="" /></li>
                            <li className='company-img-items'><img src={ADp} alt="" /></li>
                            <li className='company-img-items'><img src={CoCacola} alt="" /></li>
                            <li className='company-img-items'><img src={COinbase} alt="" /></li>
                            <li className='company-img-items'><img src={VMvare} alt="" /></li>
                            <li className='company-img-items'><img src={SLack} alt="" /></li>
                            <li className='company-img-items'><img src={DiScover} alt="" /></li>
                            <li className='company-img-items'><img src={CisCo} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <Arrow title='View all clients' />

                <div className='case-study-section'>
                    <div className='first-study-div'>
                        <div className='stack-section'>
                            <div className='img-vedio-div'>
                                <video muted playsInline loop class=" slack-vedio" crossorigin="anonymous"><source src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4" type="video/mp4" /></video>
                                <div className=' study-deatils-div'>
                                    <h1 className='study-heading'>Slack</h1>
                                    <p className='study-sub-heading'>Designing and building Slack’s interactive demo experience</p>
                                    <ul className=' slack-ul '>
                                        <li>Web Design</li>
                                        <li>Enterprise</li>
                                        <li>Development</li>
                                    </ul>
                                    <div className='smoke-btn  case-study-btn-div'>
                                        <p className=' case-study-btn animation-BA'>View our services</p>
                                        <svg className='clients-icon ' viewBox="0 0 24 56" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className=' grayscale-section stack-section'>
                            <div className='img-vedio-div' >
                                <video playsinline loop class="slack-vedio" crossorigin="anonymous"><source src="https://cdn.sanity.io/files/r115idoc/production/5da237d9fed8f98b652cebbd3753064d86fda214.mp4" type="video/mp4" /></video>
                                <div className='study-deatils-div'>
                                    <h1 className='grayscale study-heading'>Grayscale</h1>
                                    <p className='study-sub-heading'>
                                        Web redesign for the world’s largest crypto asset manager
                                    </p>
                                    <ul className=' slack-ul'>
                                        <li>Web Design</li>
                                        <li>Design System</li>
                                        <li>Illustration</li>
                                    </ul>
                                    <div className='smoke-btn  case-study-btn-div'>
                                        <p className=' case-study-btn animation-BA'>View our services</p>
                                        <svg className='clients-icon ' viewBox="0 0 24 56" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='solo-case-study'>
                    <div className='stack-section fiverr'>
                        <div className='img-vedio-div'>
                            <video playsinline loop class=" solo-model-scale slack-vedio" crossorigin="anonymous"><source src="https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4" type="video/mp4" /></video>
                        </div>
                        <h1 className='solo-heading study-heading'>Fiverr</h1>
                        <p className='solo-sub-heading'>Web app design for a virtual creative collaboration service
                        </p>
                        <ul className='slack-ul'>
                            <li>UI/UX</li>
                            <li>Startup</li>
                            <li>DesignSystem</li>
                        </ul>
                        <div className='smoke-btn  case-study-btn-div'>
                            <p className=' case-study-btn animation-BA'>View our services</p>
                            <svg className='clients-icon ' viewBox="0 0 24 56" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                        </div>

                    </div>

                </div>
                <div className='case-study-section'>
                    <div className='first-study-div'>
                        <div className='stack-section'>
                            <div className='img-vedio-div' >
                                <video playsinline="" loop="" class="slack-vedio" crossorigin="anonymous"><source src="https://cdn.sanity.io/files/r115idoc/production/d43570b4164cb7b5d1d19f19390b8213571ad64d.mp4" type="video/mp4" /></video>
                                <div className=' study-deatils-div'>
                                    <h1 className='study-heading'> Discover</h1>
                                    <p className='study-sub-heading'>Design partnership focused on mobile app innovation</p>
                                    <ul className=' slack-ul '>
                                        <li>UI/UX</li>
                                        <li>Design System</li>
                                        <li>Fintech</li>
                                    </ul>
                                    <div className='smoke-btn  case-study-btn-div'>
                                        <p className=' case-study-btn animation-BA'>View our services</p>
                                        <svg className='clients-icon ' viewBox="0 0 24 56" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className=' grayscale-section stack-section'>
                            <div className='img-vedio-div' >
                                <video playsinline="" loop="" class="slack-vedio" crossorigin="anonymous"><source src="https://cdn.sanity.io/files/r115idoc/production/c5c79675370888c777b213410e7bd2272b21a4b2.mp4" type="video/mp4" /></video>
                                <div className=' study-deatils-div'>
                                    <h1 className='grayscale study-heading'> Serena & Lily</h1>
                                    <p className='study-sub-heading'>
                                        Ecommerce redesign for a leader in luxury home decor
                                    </p>
                                    <ul className=' slack-ul'>
                                        <li>Web Design</li>
                                        <li>Design System</li>
                                        <li>Ecommerce</li>
                                    </ul>
                                    <div className='smoke-btn  case-study-btn-div'>
                                        <p className=' case-study-btn animation-BA'>View our services</p>
                                        <svg className='clients-icon ' viewBox="0 0 24 56" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <Arrow title='Explore all work' />
            </div>
        
            <div className='section-spacing smoke'>
                <div className="smoke-section">
                    <h1 className='smoke-heading'>We transform companies through design innovation</h1>
                    <p className='smoke-text'>A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.</p>
                    <div className='smoke-btn '>
                        <p className='smoke-btn-text animation-BA'>View our services</p>
                        <svg className='clients-icon1' viewBox="0 0 24 36" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                    </div>

                </div>
                <div className='scroll-img-div' >

                    <div className='img-div'>
                        <img className='odd' src={Img1} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='even' src={Img2} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='odd' src={Img3} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='even' src={Img4} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='odd' src={Img5} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='even' src={Img6} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='odd' src={Img7} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='even' src={Img8} alt="scrol-imgs" />
                    </div>
                    <div className='img-div'>
                        <img className='odd' src={Img9} alt="scrol-imgs" />
                    </div>
                    < div className='img-div' div>
                        <img className='even' src={Img10} alt="scrol-imgs" />
                    </div>

                </div>
                <div className="smoke-section">
                    <p className='smoke-text'>Our cross-disciplinary team combines strategy, branding, UX design, and technology for swift, impactful results. Working as one team with our clients, we merge human creativity with AI-driven efficiency to consistently exceed expectations.</p>
                    <div className='smoke-btn '>
                        <p className='smoke-btn-text animation-BA'>Get to know us</p>
                        <svg className='clients-icon1' viewBox="0 0 24 36" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                    </div>

                </div>


            </div>
            <div className='featured-News-section'>
                <h1 className='section-heading' >Featured News</h1>

                <div className='news-div'>
                    <div className='news-img-div'>
                        <img src={skillImg1} alt="" />
                    </div>
                    <div className='news-details-div'>
                        <p className='skill-heading'>Branding</p>
                        <h1 className='skill-sub-heading'>Brand Identity Guide: Craft Brand's Unique Image 2025</h1>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>Mar 11, 2024</li>
                            <li className='schedule-li'>9 min read</li>
                        </ul>


                    </div>


                </div>
                <hr className='news-breaker' />
                <div className='news-div'>
                    <div className='news-img-div'>
                        <img src={skillImg2} alt="" />
                    </div>
                    <div className='news-details-div'>
                        <p className='skill-heading'>Branding</p>
                        <h1 className='skill-sub-heading'> Brand Identity Guide: Craft Brand's Unique Image 2025</h1>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>Mar 11, 2024</li>
                            <li className='schedule-li'>9 min read</li>
                        </ul>


                    </div>


                </div>
                <hr className='news-breaker' />
                <div className='news-div'>
                    <div className='news-img-div'>
                        <img src={skillImg3} alt="" />
                    </div>
                    <div className='news-details-div'>
                        <p className='skill-heading'>Branding</p>
                        <h1 className='skill-sub-heading'> Brand Identity Guide: Craft Brand's Unique Image 2025</h1>
                        <ul className='schedule-ul'>
                            <li className='schedule-li'>Mar 11, 2024</li>
                            <li className='schedule-li'>9 min read</li>
                        </ul>


                    </div>


                </div>
                <div className='news-btn-div d-flex justify-content-center'>
                    <div className='news-smoke-btn  '>
                        <p className=' news-arrow animation-BA1'>Visit blog</p>
                        <svg className='clients-icon2 new' viewBox="0 0 24 36" preserveAspectRatio="none" fill="currentColor" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z"></path></svg>
                    </div>
                </div>
                <div className='fQ-section'>
                    <h1 className=''> FAQ </h1>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="fq-button accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What are your core services as a UX design and branding firm?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.</div>
                                <div class="accordion-body">At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.</div>
                                <div class="accordion-body">At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.</div>
                            </div>
                        </div>


                        <hr className='news-breaker  news-breaker-fq' />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button fq-button  collapsed text-white " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What separates Clay from other branding and web design agencies?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.</div>
                                <div class="accordion-body">, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.</div>
                                <div class="accordion-body">, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.</div>
                            </div>
                        </div>
                        <hr className='news-breaker  news-breaker-fq' />

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button fq-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How much does hiring you for a design project cost?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.</div>
                            </div>
                        </div>
                        <hr className='news-breaker  news-breaker-fq' />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button fq-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Do you work with startups?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.</div>
                            </div>
                        </div>
                        <hr className=' news-breaker-fq news-breaker' />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button fq-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Do you work with clients in different timezones?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Home