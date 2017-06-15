import React from "react";

const Listing = () => {
  return (
    <section className="oh">
      <div className="container">
        <div className="row">
          <div className="col-md-6 cta-signup-card">
            <div>
              <h3>List Your Property </h3>
              <p>
                Two sentences that support the Headline and tell why it is good to list in xceltrip
              </p>
              <button className="btn-middle cta-signup">Sign Up</button>
            </div>
          </div>
          <div className="col-md-6 cta-agent-card">
            <div>
              <h3>Become An Agent </h3>
              <p>
                Get the benefits of being agent of Xeltrip and Keep geting your percentage lifetime
              </p>
              <div className="align-right">
                <button className="btn-middle cta-agent">Let's Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
