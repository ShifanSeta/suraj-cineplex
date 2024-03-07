import React from 'react'
import './termsuse.css'
import Header from "../shared/Header/Header";


const TermsUse = () => {
  return (
    <main>
      <Header title={"Terms of Use"} />
      <section className="mx-lg-5 mx-3">
        <div className="py-5">
          <br />

          <div className="d-flex row justify-content-center align-items-start">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 terms_paragraph mxll-5">
              <h4 className="pb-3">PURCHASING TICKETS ONLINE VIA BOOKMYSHOW</h4>
              <div className="">
                <p className="">
                The booking is valid only for the viewing of the film at a specified of SurajCineplex. The booking shall become valueless and non refundable if not used on the date specified on its face. Cinema tickets are sold by SurajCineplex and can be purchased by the user via the Bookmyshow online booking system using credit/debit cards. A nominal convenience fee shall be charged from each user over and above the prescribed value of the ticket. This convenience fee shall be in lieu of the convenience given to the user by Suraj Cineplex and shall not form a part of the value of the ticket. Tickets & food once ordered cannot be exchanged, cancelled or refunded. Children aged 3 years and above will require a separate ticket. The 3D glasses will be available at the cinema for 3D films and must be returned before you exit the premises. 3D Glasses are chargeable (refundable/non-refundable) as per individual cinema policies. Items like laptop, cameras, knifes, lighter, match box, cigarettes, firearms and all types of inflammable objects are strictly prohibited. Items like carrybags eatables, helmets, handbags are not allowed inside the theaters are strictly prohibited. Kindly deposit at the baggage counter of cinema.
                </p>
              </div>
              <h4 className=" pb-3 mt-5 ">GENERAL CONDITIONS</h4>
              <div className="">
                <p className="">
                SurajCineplex will do everything possible to ensure the show and operating times of the cinema are true to the advertisements. However due to circumstances beyond SurajCineplex's control there may be times that a film has to be cancelled or shown at a different time. In this instance the user may be given a refund of the ticket only. The mode of refund shall be at the sole discretion of SurajCineplex. If any show is cancelled or cancellation is done from the management of SurajCineplex then the formalities for the same will be taken in to consideration. The user agrees not to bring in any action against SurajCineplex in such instance. The user who has booked for a movie certified as 'A', must provide SurajCineplex with the relevant proof of entitlement when the tickets are being collected or upon entry to the cinema.
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
  )
}

export default TermsUse