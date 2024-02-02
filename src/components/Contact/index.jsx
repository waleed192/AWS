import axios from 'axios';
import './style.css'

const Contact = () => {

    function handleSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            axios.post("https://viu7lniwx9.execute-api.us-east-2.amazonaws.com/v1/contact", formJson)
                .then((res) => window.alert(res.data))
                .catch((err) => console.log(err))
        }

    return <div className='div-clip-path contact-container'>
                <p>Contact Me!</p>

        <div className='contact-box'>
        <form onSubmit={handleSubmit}>
                <input className="text-input" type="email" placeholder="Your Email" name="email" required/>
                <input className="text-input" type="text" placeholder="Your Name" name="name" required />
                <input className="text-input" type="text" placeholder="Subject" name="subject" required />
                <textarea className="textarea-input" rows="4" placeholder="Message" name="message" required/>
                <button className="glow-on-hover" style={{width: '100%'}} type="submit">Send</button>
            </form>
        </div>
    </div>
}

export default Contact