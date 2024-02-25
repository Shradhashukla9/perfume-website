import React from 'react';

const Contact = () => {
  return ( 
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-info">
            <h1 className="contact-heading">Contact Us</h1>
            <p>Contact us for any queries:</p>
            <address>
              PERFUMARE INDIA PVT. LTD<br />
              D-81 C-Scheme, Jaipur, Rajasthan 302001<br />
              Phone: <a href="tel:+91183336485">+91 9983336481</a><br />
              Business Hours: 10am to 6pm (Monday to Friday)<br />
              E-Mail: <a href="mailto:contact@perfumare.in">contact@paris-elysees.in</a>
            </address>
            <address>
              PERFUMARE HEADQUARTER<br />
              28 NORTH WEST 7700 NEW DELHI
            </address>
          </div>
          <div className="contact-form">
            <h2 className="contact-heading">Contact Form</h2>
            <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="form">
              <input type="hidden" name="form_type" value="contact" />
              <input type="hidden" name="utf8" value="✓" />
              <div className="form-field">
                <input type="text" name="contact[name]" placeholder="Name" required />
              </div>
              <div className="form-field">
                <input type="email" name="contact[email]" placeholder="E-mail" required />
              </div>
              <div className="form-field">
                <textarea name="contact[body]" placeholder="Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="button">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
