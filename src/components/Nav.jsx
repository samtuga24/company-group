import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../icons/new-logo.png'
import { Link } from 'react-scroll';
export const Nav = () => {
  const [show, setShow] = useState(false);
  const clickShow = () =>{
    setShow(!show)
  }
  return (
    <div className='nav-container'>
      <div className='nav-wrap'>
        <div className='nav-logo'><img src={logo} alt="" /></div>
        <div className='nav-list'>
          <div className='list-item'>About Us</div>
          <div className='list-item' onMouseOver={clickShow} onMouseLeave={()=>setShow(false)}>Group<FontAwesomeIcon icon={faAngleDown} className='btn-icon' /></div>
          
          <div className='list-item'><Link to='contact' spy={false} smooth={true} offset={100} duration={800}>Contact Us</Link></div>
        </div>
        {show ?
          <div className='dropdown' onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <div className='dropdown-item'>Jema Energy</div>
            <div className='dropdown-item'>Ekam Learning</div>
            <div className='dropdown-item'>Ekam Capital</div>
            <div className='dropdown-item'>Jemgro</div>
            <div className='dropdown-item'>Je'mines Resources</div>
            <div className='dropdown-item'>Cwasmin</div>
          </div>: null
        }
        <div className='nav-btn'>
          <div className='btn-1'><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>
    </div>
  )
}
