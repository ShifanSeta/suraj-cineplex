import React from 'react'
import insignia from '../../utils/images/insp.avif'
import dxp from '../../utils/images/4dxp.avif'
import './experiences.css'



const Experiences = () => {
  return (
    <main className='container desktop_view'>
        <section className='d-flex justify-content-between align-items-center py-3'>
        <h4 className='text-black'>Experiences</h4>

        <nav aria-label="Page navigation example text-black">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span className='span_text' aria-hidden="true">«</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span className='span_text' aria-hidden="true">»</span>
                </a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span className='span_text' aria-hidden="true">See all</span>
                </a>
                </li>
            </ul>
        </nav>

        </section>
        <section className='row'>
            <img className='col-3' src={dxp} alt="4dx" />
            <img className='col-3' src={insignia} alt="insignia" />
        </section>
    </main>
  )
}

export default Experiences