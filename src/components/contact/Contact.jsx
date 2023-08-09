import React, { useState } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'




const Contact = () => {
  const [formState, setFormState]= useState({});

  const changeHandler =(event) => {
    setFormState({...formState, [event.target.name]: event.target.value});
  }

const submitHandler=(event)=>{
  event.preventDefault();
  const config={
    SecureToken:'53db5a68-64dc-4d1a-bee1-1e2bbf0349d8',
    To : 'audreythando@gmail.com',
    From : formState.email,
    Subject : "This is from my contact form",
    Body : `${formState.name} connected to you over email`
  }
  if(window.Email){
    window.Email.send(config).then(()=> alert('email sent successfully'))
  }
}

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>audreythando@gmail.com</h5>
            <a href="mailto:audreythando@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/audrey_alfred" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+27833968026</h5>
            <a href="https://api.whatsapp.com/send?phone=+27833968026" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={submitHandler} >
          <input type="text" name='name' placeholder='Your Full Name' value={formState.name || ""} onChange={changeHandler}required />
          <input type="email" name='email' placeholder='Your Email' value={formState.email || ""} onChange={changeHandler} required />
          <textarea name="message" rows="7" placeholder='Your Message' value={formState.message || ""} onChange={changeHandler}required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact