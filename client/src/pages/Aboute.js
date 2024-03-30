import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/about.css";

const About = () => {
  return (
    <Layout title={"About us - Agri-shop"}>
      {/* <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div> */}

      <div className="about-us-container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/agri.jpg"
              alt="About Agriculture Shop"
              className="about-us-image"
            />
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h2>Welcome to Agriculture Shop</h2>
              <p>
                AgroMate is your one-stop destination for all your farming
                needs. We are committed to providing high-quality products and
                services to farmers, gardeners, and agricultural enthusiasts.
              </p>
              <p>
                Our journey began with a vision to revolutionize the way farming
                is done. We believe in sustainable agricultural practices and
                strive to empower farmers with the tools and knowledge they need
                to succeed.
              </p>
              <p>
                At AgroMate, you'll find a comprehensive range of products
                including seeds, fertilizers, pesticides, farming equipment, and
                much more. Our products are carefully curated to ensure optimum
                performance and results.
              </p>
              <p>
                Customer satisfaction is our top priority. Our team of experts
                is always available to provide guidance, support, and assistance
                to help you achieve your farming goals.
              </p>
              <p>
                Thank you for choosing AgroMate as your agricultural partner. We
                look forward to serving you and being a part of your farming
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
