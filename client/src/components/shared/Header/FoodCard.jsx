import React from 'react'
import { Link } from 'react-router-dom'
import Food from '../../../utils/food/popcorn.avif'
import '../../Tabs/tabs.css'

const FoodCard = () => {
  return (
    <main className='py-3'>
        <section className="container hide-sm-card ">
              <div className="position-relative bg-img-container p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <img src={Food} className="pb-5 text-shadow" alt="food" />
                {/* <button
                  type="button"
                  className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
                  aria-label="Close"
                />
                <svg className="bi mt-5 mb-3" width={48} height={48}>
                  <use xlinkHref="#check2-circle" />
                </svg> */}
                <h1 className="text-body-emphasis text-shadow hide-sm-card">"Munch, Watch, Indulge, Enjoy!" </h1>
                <p className="col-lg-6 mx-auto mb-4 text-shadow ">
                  This faded back jumbotron is useful for placeholder content.
                  It's also a great way to add a bit of context to a page or
                  section when no content is available and to encourage visitors
                  to take a specific action.
                </p>
                <Link to='/food' className="btn  px-5 mb-5 btn-danger" type="button">
                  Order Now
                </Link>
              </div>
        </section>
        <section className='container hide-lg-card mt-5'>
        <div className="position-relative bg-img-container-sm p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <img src={Food} className="pb-3 text-shadow" alt="food" />
                {/* <button
                  type="button"
                  className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
                  aria-label="Close"
                />
                <svg className="bi mt-5 mb-3" width={48} height={48}>
                  <use xlinkHref="#check2-circle" />
                </svg> */}
                <h1 className="text-body-emphasis text-shadow">"Munch, Watch, Indulge, Enjoy!" </h1>
                <Link to='/food' className="btn px-5 mt-3 btn-danger" type="button">
                  Order Now
                </Link>
              </div>
        </section>
    </main>
  )
}

export default FoodCard