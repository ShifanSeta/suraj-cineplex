import React from "react";
import Header from "../shared/Header/Header";
import './terms.css'
const Terms = () => {
  return (
    <main>
      <Header title={"Terms & Conditions"} />
      <section className="mx-lg-5 mx-3">
        <div className="py-5">
          <h4>Acceptance of Terms</h4>
          <br />
          <div className="d-flex row justify-content-center align-items-start">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 terms_paragraph mxll-5">
              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  Welcome to Suraj Cineplex <b>www.surajcineplex.in</b>
                </p>
              </div>
              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  The Suraj Cineplex Website is owned and operated by Suraj
                  Cineplex ( herein for brevity referred to as{" "}
                  <b>"Suraj Cineplex"</b> ).
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  By using or registering for surajcineplex.in, users and the
                  entities or persons they represent ( "User" or "Users" ) agree
                  to be legally bound and abide by the terms, conditions and
                  notices set forth or referenced herein and any other condition
                  displayed on any of the pages of the Suraj Cineplex Website
                  (collectively, the "Terms" ").
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  Suraj Cineplex reserves the right to change, alter, modify, and
                  amend these Terms, from time to time, at its sole discretion
                  without serving any notice to you ("Modifications").
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  The amended terms and conditions shall override the Terms to
                  extent any such amended term is inconsistent or repugnant to
                  these Terms and all Users shall be bound by such amended Terms.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  You can review the most current version of the Terms at any time
                  at Terms and Conditions.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  Your continued use of the Suraj Cineplex Website following the
                  posting of any Modifications constitutes acceptance of the same.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  If you do not agree to all Terms and conditions mentioned
                  herein, as amended from time to time, you are requested not to
                  access or avail of the Services provided or use the Suraj
                  Cineplex Website.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  The use of the term Representatives shall include Suraj
                  Cineplex's employees, sponsors, directors,
                  officers,representatives,advertising, promotion and fulfillment
                  agencies, consultants and advisors.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  You are advised that currently transacting on the Suraj Cineplex
                  website to confirm a ticket will cost the user a nominal service
                  fee per ticket.
                </p>
              </div>

              <div className="d-flex">
                <span className="px-2">→</span>
                <p className="terms_paragraph">
                  This fee is in addition to the price of the ticket as available
                  at the Suraj Cineplex ticket counter.
                </p>
              </div>

              
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <p className="terms_paragraph">
              You can direct any questions concerning these Terms :
              </p>
              <span className="terms_paragraph">
              Attention: Suraj Cineplex, <br />
              Gandhi Gram, Junagadh district, Gujarat 362001 <br />
              OR <br />
              Send an e-mail to: <a href="mailto:surajcineplex@gmail.com">surajcineplex@gmail.com</a> 
              </span>
            </div>
          </div>
          <h4 className="pt-5 pb-3">
            Refund Policy
          </h4>
          <div className="">
            <p className="refund_paragraph">While a no-refund policy may be the default stance, cinemas may still make exceptions in certain circumstances, such as: Technical issues with the website or ticketing system that prevent the customer from using their purchased tickets. Cancellation or rescheduling of the event by the cinema. Extraordinary circumstances, such as a medical emergency or other unforeseen situations. It's essential for customers to review the terms and conditions, including the refund policy, before purchasing tickets from a cinema website to understand their rights and options in case they are unable to attend the screening.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
