import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
export const Contact = () => {
  const [input_name, setName] = useState("");
  const [input_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const service_id="service_gpda17j"
  const template_id="template_u21pndj"
    const public_key="Obj2B5j1AKUvCwT5a"
  const isValidEmail = (inputEmail) => {
    return /\S+@\S+\.\S+/.test(inputEmail);
  }
  const sendForm={
    input_name: input_name,
    input_email: input_email,
    message: message
  }
  const submitContact = () => {

    let nameLength;
    let emailLength;
    let validEmail;
    let messageLength;

    if (input_name.trim().length == 0) {
      nameLength = false;
      alert("Please Enter Full Name")
    } else {

      nameLength = true;
    }

    if (nameLength) {
      if (input_email.trim().length == 0) {
        emailLength = false;
        alert("Please Enter Email")
      } else {
        emailLength = true;
      }
    }
    if (emailLength) {
      if (isValidEmail(input_email)) {
        validEmail = true;

      } else {
        validEmail = false;
        alert("Please Enter a valid Email")
      }
    }

    if (validEmail) {
      if (message.trim().length == 0) {
        messageLength = false;
        alert("Please Enter message")
      } else {
        messageLength = true;
      }
    }
    if (nameLength && emailLength && validEmail && messageLength) {
      emailjs.send(service_id, template_id, sendForm, public_key)
      .then((response)=>{
        setName("")
        setEmail("")
        setMessage("")
        alert("message sent successfully")
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-wrap'>
        <div className='contact-1'>
          <div className='header-1'>Get in touch</div>
          <div className='c-time'>Reach our team Mon - Fri from 08h30m to 17h00m</div>
          {/* <div className='social-wrap'>
            <div className='social-1'><FontAwesomeIcon icon={faPhone} /></div>
            <div className='social-text'>+233249628340</div>
          </div>

          <div className='social-wrap'>
            <div className='social-1'><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className='social-text'>example@abc.com</div>
          </div> */}

          <div className='social-wrap'>
            <div className='c-visit'>Visit Us</div>
            <div className='social-text'>50 Onyasia Crescent Roman Ridge, Accra</div>
            <div className='location-wrap'>
              <div className='social-1'><FontAwesomeIcon icon={faLocationDot} /></div>
              <div className='loc-text'>GA-088-8014</div>
            </div>
          </div>

          {/* <div className='social-wrap-2'>
            <div className='social-2'><FontAwesomeIcon icon={faFacebook} /></div>
            <div className='social-2'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='social-2'><FontAwesomeIcon icon={faXTwitter} /></div>
          </div> */}
        </div>
        <div className='contact-2'>
          <div className='form-input-wrap'>
            <div className='form-label'>Full Name</div>
            <input type="text" value={input_name} onChange={(e) => setName(e.target.value)} className='form-input' />
          </div>

          <div className='form-input-wrap-1'>
            <div className='form-label'>Email Address</div>
            <input type="text" value={input_email} onChange={(e) => setEmail(e.target.value)} className='form-input' />
          </div>



          <div className='form-input-wrap-2'>
            <div className='form-label'>Message</div>
            <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='' maxLength="200" />
          </div>

          <div className='contact-btn-wrap'>
            <div className='contact-btn' onClick={submitContact}>send message</div>
          </div>
        </div>
      </div>
    </div>
  )
}
