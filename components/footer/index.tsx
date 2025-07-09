import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 px-28 text-white text-lg bg-black border-t border-[#0e0e0e]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-5xl mb-4">Address</h4>
          <p>
            Mudenda Capital Partners Pty Ltd
            <br />
            Any City, ST 12345
            <br />
            (123) 456-7890
            <br />
            email: info@mudendacapital.com
          </p>
        </div>
        <div>
          <h4 className="text-5xl mb-4">Office Hours</h4>
          <p>
            Monday to Friday
            <br />
            9:00 am to 6:00 pm
            <br />
            <br />
            Weekends by appointment
          </p>
        </div>
        <div>
          <h4 className="text-5xl mb-4">Follow Us</h4>
          <p>@MudendaCapitalPartners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
