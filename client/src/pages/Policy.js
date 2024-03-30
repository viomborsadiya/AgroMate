import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/policy.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy-new.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At AgriShop, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or use our services
          </p>
          <p>
            We use the information we collect to process orders, provide
            customer support, send promotional emails, and improve our products
            and services.
          </p>
          <p>
            We prioritize the security of your personal information. We
            implement appropriate technical and organizational measures to
            protect your data from unauthorized access, alteration, or
            disclosure.
          </p>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be effective immediately upon posting the revised policy on our
            website.
          </p>
          <p>
            If you have any questions about our Privacy Policy, please contact
            us at privacy@agromate.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
