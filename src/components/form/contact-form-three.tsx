'use client';

const ContactFormThree = () => {
  return (
    <form
      action="https://formspree.io/f/mzzgezld"
      method="POST"
      target="_blank"
      noValidate
    >
      <div className="it-contact-input-wrap">
        <div className="row gx-20">
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="text" name="name" placeholder="Name:" required />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="email" name="email" placeholder="Email:" required />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="text" name="phone" placeholder="Phone:" />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="text" name="website" placeholder="Website:" />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="it-contact-textarea-box">
              <textarea name="message" placeholder="Message:" required></textarea>
            </div>
          </div>
        </div>
        <div className="it-contact-btn">
          <button type="submit" className="it-btn-orange">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactFormThree;
