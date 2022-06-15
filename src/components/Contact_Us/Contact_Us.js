import Form from '../Form/From';
import './Contact_Us.css';
import linkedIn from '../../media/linkedin.svg';
import email from '../../media/email.svg'
function Contact_Us() {
  
    
    return (
        <div className="Contact_Us">
            <div className='contact_heading'>
                <h1>CONTACT US</h1>
            </div>
            <div className='responisve_container'>
                <div className='form_body'>
                    <Form/>
                </div>
                <div className='contact_Info'>
                    <div className='contact_email_container'>
                        <img src={email} alt='icon of email'></img>
                        <p>info@dltcapital.com</p>
                    </div>
                    <div className='contact_linkedin_container'>
                        <img src={linkedIn} alt='icon of linkedIn'></img>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact_Us;