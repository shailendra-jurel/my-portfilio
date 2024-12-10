import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
    return (
        <div className='Contact'>
            <div className='contact-heading'>
                <h1>
                    {'Contact me'.split('').map((char, index) => (
                        <span key={index} className='letter'>{char}</span>
                    ))}
                </h1>
            </div>
            
            <div className='contact-container'>
                <div className='contact-form'>
                    <form className='contact-submit-form'>
                        <input type='text' placeholder='Enter your Name' className='form-text-box' />
                        <input type='email' placeholder='Enter your Email' className='form-text-box' />
                        <textarea placeholder='Enter Message' className='form-text-box textarea-box'></textarea>
                        <button type='submit'>
                            Send 
                            <i className="fas fa-rocket" id='rocket-icon'></i> 
                        </button>
                    </form>
                </div>
                <div className='contact-details'>
                    <div className='contact-det-card'>
                        <i className="fas fa-envelope" id='contact-icon'></i>
                        <span>shailendrajurel001@gmail.com</span>
                    </div>
                    <div className='contact-det-card'>
                        <i className="fas fa-phone-alt" id='contact-icon'></i>
                        <span>+91 6398846710</span>
                    </div>
                    <div className='contact-det-card'>
                        <i className="fas fa-map-marker-alt" id='contact-icon'></i>
                        <span> Bangalore</span>
                    </div>           
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.074464647739!2d77.66224421145068!3d12.838464587412558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d6ab07d151b%3A0xc0af49ccfc84871a!2sScaler%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1717675664085!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{border: 0, borderRadius: '10px'}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
