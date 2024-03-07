import React from "react";
import "./privacypolicy.css";
import Header from "../shared/Header/Header";

const PrivacyPolicy = () => {
  return (
    <main>
      <Header title={"Privacy Policy"} />
      <section className="mx-lg-5 mx-3">
        <div className="py-5">
          <br />

          <div className="d-flex row justify-content-center align-items-start">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 terms_paragraph mxll-5">
              <h4 className="pb-3">INTRODUCTION</h4>
              <div className="">
                <p className="">
                  Your privacy is important to suraj.in. We recognize that when
                  you choose to provide us with information about yourself, you
                  trust us to act in a responsible manner. This information
                  helps us improve your movie going experience with better
                  content, services and opportunities. This policy tells you
                  about the information gathering and dissemination that we
                  conduct. As we continue to grow, this policy may change, so
                  please check back periodically for updates.
                </p>
              </div>
              <h4 className=" pb-3">SECURITY</h4>
              <div className="">
                <p className="">
                  suraj.in has implemented security measures to protect against
                  the loss, misuse and alteration of the information under our
                  control. We protect the secure areas of our Site with a
                  firewall. Although suraj.in has implemented adequate security
                  measures, the site has also contracted VeriSign to provide an
                  extra assurance of security. However, the site is adequately
                  virus-protected, the user is advised to employ virus scans for
                  extra security, as suraj.in is not liable for any virus picked
                  up at the time of transmission. CHOICE/OPT-OUT suraj.in allows
                  users the option to opt-out of receiving communications from
                  us and our partners during registration. If you decide later
                  to opt-out, you can contact us by sending an e-mail to
                  surajcineplex@gmail.com . Suraj Cineplex LOGO Suraj Cineplex
                  is a registered trademark of Suraj Magic Land Pvt. Ltd
                </p>
              </div>
              <h4 className=" pb-3">GENERAL INFORMATON</h4>
              <div className="">
                <p className="">
                Please note that suraj.in tries its best to collect data from the most authentic source. However, at any stage, suraj.in is not liable for any loss, monetary or otherwise, resulting from the usage of their data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h4>QUESTIONS</h4>
              <p className="terms_paragraph">
                You can direct any questions concerning these Policy :
              </p>
              <span className="terms_paragraph">
                Attention: Suraj Cineplex, <br />
                Gandhi Gram, Junagadh district, Gujarat 362001 <br />
                OR <br />
                Send an e-mail to:{" "}
                <a href="mailto:surajcineplex@gmail.com">
                  surajcineplex@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
