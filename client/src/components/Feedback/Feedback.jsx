import React from 'react'
import './feedback.css'
import insp from '../../utils/images/insp.avif'
import Header from '../shared/Header/Header'

const Feedback = () => {
  return (
    <main className='bg-light main-feedback'>
        <Header title={'Feedback'} />
        <section className='bg-white container p-5 my-5 rounded-2'>
            <div className="row gx-3 gy-3">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={insp} className='feedback-img' alt="feedback_img" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={insp} className='feedback-img' alt="feedback_img" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src={insp} className='feedback-img' alt="feedback_img" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Feedback