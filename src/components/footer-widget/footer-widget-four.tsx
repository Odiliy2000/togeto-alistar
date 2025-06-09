import { Location, Mail, PhoneTwo } from '../svg';

const FooterWidgetFour = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Location />
          </span>
          <a
            className="border-line-white"
            target="_blank"
            href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          >
            1277 E KEMPER ROAD STE 2 SPRINGDALE, OH 45246 United States
          </a>
        </div>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Mail />
          </span>
          <a className="border-line-white" href="mailto:dispatchdep@alistarincoh.com">
            dispatchdep@alistarincoh.com
          </a>
        </div>
        <div className="it-footer-widget-tel-box">
          <span>
            <PhoneTwo />
          </span>
          <a className="border-line-white" href="tel:800-327-1124">
            800-327-1124
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetFour;
