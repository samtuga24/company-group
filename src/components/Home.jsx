import React, { useEffect } from 'react'
import cwasmin from '../images/cwasmin.jpg'
import finance from '../images/finance.png'
import jemgro from '../images/newjem.jpg'
import { gsap } from 'gsap'
export const Home = () => {
    const tl = gsap.timeline()
    useEffect(() => {
        tl.fromTo('.home-intro, .sub-intro',{x: '-100vw'},{ x: '0vw', ease: "power4.inOut",stagger:0.2,duration: 2.2 })
    
    }, [])
    return (
        <div className='home-container'>
            <div className='home-wrap'>
                <div className='home'><img src={jemgro} alt="" /></div>
                <div className='home'><img src={finance} alt="" /></div>
                <div className='home'><img src={cwasmin} alt="" /></div>
            </div>

            <div className='home-intro-wrap'>
                <div className='home-intro'>A diversified group of</div>
                <div className='sub-intro'>companies at your service</div>
            </div>

            <div className='mobile-intro-wrap'>
                <div className='home-intro'>A diversified group of companies at your service</div>
            </div>
                
        </div>
    )
}
