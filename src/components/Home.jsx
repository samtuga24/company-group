import React, { useEffect } from 'react'
import cwasmin from '../images/cwasmin.jpg'
import finance from '../images/finance.png'
import jemgro from '../images/jemgro.png'
import { gsap } from 'gsap'
export const Home = () => {
    const tl = gsap.timeline()
    useEffect(() => {
      tl.fromTo('.home-intro',{x: '-100vw'},{ x: '0vw', ease: "power4.inOut",duration: 2.2 })
    
    }, [])
    return (
        <div className='home-container'>
            <div className='home-wrap'>
                <div className='home'><img src={cwasmin} alt="" /></div>
                <div className='home'><img src={finance} alt="" /></div>
                <div className='home'><img src={jemgro} alt="" /></div>
            </div>

            <div className='home-intro'>
                A diversified group of <br/>companies at your service</div>
        </div>
    )
}
