import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../icons/new-logo.png'
import { Link } from 'react-scroll';
import NavContext from '../context/NavContext';
export const Nav = () => {
  const { menu, setMenu } = useContext(NavContext);
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const clickShow = () => {
    setShow(!show)
  }

  const clickMenu = () =>{
    setMenu(true)
  }


  return (
    <div className='nav-container' id={scrolling ? 'nav-bg' : 'remove-bg'}>
      <div className='nav-wrap'>
        <div className='nav-logo'><img src={logo} alt="" /></div>
        <div className='nav-list'>
          <div className='list-item'>About Us</div>
          <div className='list-item' onMouseOver={clickShow} onMouseLeave={() => setShow(false)}>Group<FontAwesomeIcon icon={faAngleDown} className='btn-icon' /></div>

          <div className='list-item'><Link to='contact' spy={false} smooth={true} offset={100} duration={800}>Contact Us</Link></div>
        </div>
        {show ?
          <div className='dropdown' onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <div className='dropdown-item' onClick={() => { window.open("https://www.jemaenergy.co/", "_blank"); }}>Jema Energy</div>
            <div className='dropdown-item' onClick={() => { window.open("https://www.ekamlearning.com/", "_blank"); }}>Ekam Learning</div>
            <div className='dropdown-item' onClick={() => { window.open("https://www.ekamcapitalltd.com/", "_blank"); }}>Ekam Capital</div>
            <div className='dropdown-item' onClick={() => { window.open("https://www.jemgro.com/", "_blank"); }}>Jemgro</div>
            <div className='dropdown-item' onClick={() => { window.open("https://www.jeminesresourcesltd.com/", "_blank"); }}>Je'mines Resources</div>
            <div className='dropdown-item' onClick={() => { window.open("https://www.cwasminrealtyandconstruction.com/", "_blank"); }}>Cwasmin</div>
          </div> : null
        }
        <div className='nav-btn' onClick={clickMenu}>
          <div className='btn-1'><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>
    </div>
  )
}
