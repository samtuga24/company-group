import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
export const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-wrap'>
        <div className='contact-1'>
          <div className='header-1'>Get in touch</div>
          <div className='social-wrap'>
            <div className='social-1'><FontAwesomeIcon icon={faPhone} /></div>
            <div className='social-text'>+233249628340</div>
          </div>

          <div className='social-wrap'>
            <div className='social-1'><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className='social-text'>example@abc.com</div>
          </div>

          <div className='social-wrap'>
            <div className='social-1'><FontAwesomeIcon icon={faLocationDot} /></div>
            <div className='social-text'>Accra</div>
          </div>

          <div className='social-wrap-2'>
            <div className='social-2'><FontAwesomeIcon icon={faFacebook} /></div>
            <div className='social-2'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='social-2'><FontAwesomeIcon icon={faXTwitter} /></div>
          </div>
        </div>
        <div className='contact-2'>
          <div className='form-input-wrap'>
            <div className='form-label'>Full Name</div>
            <input type="text" className='form-input' />
          </div>

          <div className='form-input-wrap-1'>
            <div className='form-label'>Email Address</div>
            <input type="text" className='form-input' />
          </div>

          

          <div className='form-input-wrap-2'>
            <div className='form-label'>Message</div>
            <textarea type="text" className='' maxLength="200" />
          </div>

          <div className='contact-btn-wrap'>
            <div className='contact-btn'>send message</div>
          </div>
        </div>
      </div>
    </div>
  )
}
