import React from 'react'
import './feedback.css'
import feedback from '../../utils/images/feedback.jpg'
import lostnfound from '../../utils/images/lostnfound.jpg'
import complain from '../../utils/images/complain.jpg'
import Header from '../shared/Header/Header'

const Feedback = () => {
  return (
    <main className='bg-light main-feedback'>
        <Header title={'Feedback'} />
        <section className='bg-white container p-5 my-0 my-lg-5 rounded-2'>
            <div className="row gx-3 gy-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe434Yx17YuaLdOkgH9uoZpE3hSo26tIbAudT3almEmV0QhVg/viewform" target="_blank" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={feedback} className='feedback-img' alt="feedback_img" />
                </a>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdGQJUcAWCTc9rZ3VUHaUn5igonTwPcLs3JFXwK3A2636tE2A/viewform' target="_blank" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={complain} className='feedback-img' alt="feedback_img" />
                </a>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeUnTGbGB7JqR7NzJk94w_VOtpsgvuVi2s7RJ7ee_6X7cUryw/viewform' target="_blank" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={lostnfound} className='feedback-img' alt="feedback_img" />
                </a>
            </div>
        </section>
    </main>
  )
}

export default Feedback