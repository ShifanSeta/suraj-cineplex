import React from 'react'

const Header = ({title}) => {
  return (
    <section className="" style={{backgroundColor: '#4c4c4c', color: 'white'}}>
        <div className="px-lg-5 px-2 py-3 d-flex justify-content-start align-items-center">
          <h4 className="text-bold">{title}</h4>
        </div>
    </section>
  )
}

export default Header