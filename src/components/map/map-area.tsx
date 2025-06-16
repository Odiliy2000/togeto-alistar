const MapArea = () => {
  return (
    <div className="it-map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="it-map-wrap">
              <iframe
              src="https://www.google.com/maps/@40.3340642,-82.6121532,11.25z?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapArea;
