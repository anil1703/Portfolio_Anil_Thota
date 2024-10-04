import React from "react";
import "./ContactForm.css"

const ContactForm = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34a6c76e-0aa2-407f-9966-8639d695229f");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (<>
    <h1 style={{color:"#B17457"}}>Connect Me</h1>
    <form id="connect" className="contactForm" onSubmit={onSubmit}>

        <div>
            <img className="contactImage" src="https://res.cloudinary.com/dafmi9027/image/upload/v1728019764/Portfolio%20Update/software-developer-6521720_wfsn8q.jpg" alt="contact"/>
        </div>
        <div className="contacDiv">
            <label for="name">Name:</label>
            <input type="text" placeholder="Name" id="name" name="Name" required/>
            <label for="email">Email:</label>
            <input type="email" placeholder="Example@gmail.com" id="email" name="Email" required/>
            <label for="phone">Phone:</label>
            <input type="tel" placeholder="Phone Number" id="phone" name="Phone" required/>
            <label for="message">Message:</label>
            <textarea id="message" placeholder="Anything you want to convey" rows={6}  name="Message" required/>
            <button type="submit">Send</button>
            <span>{result}</span>
        </div>

    </form>
    </>)
}

export default ContactForm