import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB, faBars } from '@fortawesome/free-solid-svg-icons'
export const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='nav-wrap'>
            <div className='nav-logo'></div>
            <div className='nav-list'>
                <div className='list-item'>About Us</div>
                <div className='list-item'>Group</div>
                <div className='list-item'>Contact Us</div>
            </div>
            <div className='nav-btn'>
                <div className='btn-1'><FontAwesomeIcon icon={faBars}/></div>
            </div>
        </div>
    </div>
  )
}
