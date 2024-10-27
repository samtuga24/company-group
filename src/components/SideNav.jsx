import React, { useContext, useState } from 'react'
import NavContext from '../context/NavContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export const SideNav = () => {
    const { menu, setMenu } = useContext(NavContext);
    const [down, setDown] = useState(false)
    const [right, setRight] = useState(true)
    const clickDown = () => {
        setDown(false)
        setRight(true)
    }

    const clickRight = () => {
        setDown(true)
        setRight(false)
    }
    return (
        <div className='side-container' id={menu ? 'slide-in' : null}>
            <div className='close-icon' onClick={() => setMenu(!menu)}><FontAwesomeIcon icon={faXmark} /></div>
            <div className='side-item-wrap'>
                <div className='side-item'>About Us</div>
                <div className='side-item'>
                    <div className='side-header'>Group</div>
                    {down && <div className='angle-down' onClick={clickDown}><FontAwesomeIcon icon={faAngleDown} /></div>}
                    {right && <div className='angle-right' onClick={clickRight}><FontAwesomeIcon icon={faAngleRight} /></div>}
                </div>
                {down &&
                    <div className='side-list'>
                        <div className='side-1' onClick={() => { window.open("https://www.jemaenergy.co/", "_blank"); }}>Jema Energy</div>
                        <div className='side-1' onClick={() => { window.open("https://www.ekamlearning.com/", "_blank"); }}>Ekam Learning</div>
                        <div className='side-1' onClick={() => { window.open("https://www.ekamcapitalltd.com/", "_blank"); }}>Ekam Capital</div>
                        <div className='side-1' onClick={() => { window.open("https://www.jemgro.com/", "_blank"); }}>Jemgro</div>
                        <div className='side-1' onClick={() => { window.open("https://www.jeminesresourcesltd.com/", "_blank"); }}>Je'mines Resources</div>
                        <div className='side-1' onClick={() => { window.open("https://www.cwasminrealtyandconstruction.com/", "_blank"); }}>Cwasmin</div>
                    </div>
                }
                <div className='side-item'>Contact</div>
            </div>
        </div>
    )
}
