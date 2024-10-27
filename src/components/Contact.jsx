import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
export const Contact = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputMessage, setMessage] = useState("");
  const isValidEmail = (inputEmail) => {
    return /\S+@\S+\.\S+/.test(inputEmail);
}
  const submitContact = () =>{

    let nameLength;
    let emailLength;
    let validEmail;
    let message;

    if (inputName.trim().length == 0) {
        nameLength = false;
        alert("Please Enter Full Name")
    } else {

        nameLength = true;
    }

    if(nameLength){
      if(inputEmail.trim().length == 0){
        emailLength = false;
        alert("Please Enter Email")
      } else{
        emailLength = true;
      }
    }
    if(emailLength){
      if(isValidEmail(inputEmail)){
        validEmail = true;
       
      } else{
        validEmail = false;
        alert("Please Enter a valid Email")
      }
    }

    if(validEmail){
      if(inputMessage.trim().length == 0){
        message = false;
        alert("Please Enter message")
      } else{
        message = true;
      }
    }
    if(nameLength && emailLength && validEmail && message){
      alert("all set")
    }
  }
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
            <input type="text" value={inputName} onChange={(e) => setName(e.target.value)} className='form-input' />
          </div>

          <div className='form-input-wrap-1'>
            <div className='form-label'>Email Address</div>
            <input type="text" value={inputEmail} onChange={(e) => setEmail(e.target.value)} className='form-input' />
          </div>

          

          <div className='form-input-wrap-2'>
            <div className='form-label'>Message</div>
            <textarea type="text" value={inputMessage} onChange={(e) => setMessage(e.target.value)} className='' maxLength="200" />
          </div>

          <div className='contact-btn-wrap'>
            <div className='contact-btn' onClick={submitContact}>send message</div>
          </div>
        </div>
      </div>
    </div>
  )
}
