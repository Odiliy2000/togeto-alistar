import ContactFormThree from '../form/contact-form-three';
import { LocationTwo, MailTwo, PhoneFour } from '../svg';

const ContactArea = () => {
  return (
    <div className="it-contact-area it-contact-innar-style it-contact-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
            <div className="it-contact-inner-list">
              <span className="it-section-subtitle">Our Locations Contact</span>
              <h4 className="it-section-title pb-10">Get in touch</h4>
              <p className="mb-55">
                Alistar specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect
              </p>
              <ul>
                <li>
                  <i>
                    <PhoneFour />
                  </i>
                  <div>
                    <span>Have any question?</span>
                    <a className="border-line-black" href="tel:008757845682">
                       875 784 5682
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <MailTwo />
                  </i>
                  <div>
                    <span>Write email</span>
                    <a
                      className="border-line-black"
                      href="mailto:dispatchdep@alistarincoh.com"
                    >
                      dispatchdep@alistarincoh.com
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <LocationTwo />
                  </i>
                  <div>
                    <span>Visit anytime</span>
                    <a
                      className="border-line-black"
                      target="_blank"
                      href="https://www.google.com/maps/place/1277+E+Kemper+Rd+%232,+Springdale,+OH+45246,+USA/@39.2861898,-84.4522196,880m/data=!3m2!1e3!4b1!4m5!3m4!1s0x88404e10bb45ddd7:0x5764d66cedae668a!8m2!3d39.2861857!4d-84.4496447?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                    >
                      1277 E Kemper Rd #2, Springdale, OH 45246, USA
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-0 order-lg-1">
            <div className="it-contact-form-box z-index-1 p-relative">
              <h4 className="it-section-title pb-40">Contact For Queries?</h4>
              <ContactFormThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
