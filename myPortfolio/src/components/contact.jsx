import './contact.css'
import { Element } from 'react-scroll'
import { useState } from 'react';

export default function Contact(){

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    console.log("submitted")
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ec411a8f-93c3-4ad2-aa20-d6097809b11d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    };


    return <Element name='contact'>
    <div id='contact' className="contact-card">
        <form onSubmit={onSubmit} className='contact-form'>
            <label htmlFor="name">Name</label>
            <input type="text" className='inputs'required placeholder='name' name='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" className='inputs' required placeholder='email' name='Email'/>
            <label htmlFor="Message">Message</label>
            <textarea name="message" className='inputs'required placeholder='message' id="message"></textarea>
            <button className='button-font' type="Submit">Submit</button>
            <p>{result}</p>
        </form>
    </div>
    </Element>
}