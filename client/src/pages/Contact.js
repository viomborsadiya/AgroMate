import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      {/* <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div> */}

      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/contact_us_images.jpeg"
              alt="Contact Us"
              className="contact-us-image"
            />
          </div>
          <div className="col-md-6">
            <div className="contact-details">
              <p>
                <strong>Address :</strong> 123, AgroMate Office Center,Farm
                Road, JamTown, India
              </p>
              <p>
                <strong>Email :</strong> info@agromate.com
              </p>
              <p>
                <strong>Phone :</strong> 1800-180-1551
              </p>
              <p>
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </strong>{" "}
                0422-6611383
              </p>
              <p>
                <strong>Fax:</strong> 0422-6611521
              </p>
            </div>
            {/* <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
