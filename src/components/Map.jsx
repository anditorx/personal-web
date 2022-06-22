import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63457.749390562225!2d106.78038149999999!3d-6.249320999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11acd247cdd%3A0xc978786e08f01147!2sKebayoran%20Lama%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1655885680918!5m2!1sen!2sid"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
