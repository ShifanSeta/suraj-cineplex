import React from 'react'
import './food.css'
import all from '../../utils/food/all.svg'
import bevrages from '../../utils/food/bevrages.png'
import combos from '../../utils/food/combos.png'
import popcorn from '../../utils/food/popcorn.avif'
import snacks from '../../utils/food/snacks.png'
import coke from '../../utils/food/coke.jpeg'
import salted from '../../utils/food/salted.jpeg'
import cheese from '../../utils/food/cheese.jpeg'
import caramel from '../../utils/food/caramel.jpeg'
import { useState } from 'react'


const Food = () => {
    const [itemCount, setItemCount] = useState(1);
    const [toggle, setToggle] = useState(false);
    console.log(itemCount, toggle);
    const countPlus = () => {
        if(itemCount >= 5){
            alert("Items cant be more than 5")
            return setItemCount(5)
        }
        setItemCount(itemCount+1)  
    }
    const countMinus = () => {
        if(itemCount <= 1){
            setToggle(false)
            return setItemCount(1)
        }
        setItemCount(itemCount-1)  
    }

  return (
    <main>
        <section className='container py-5'>
            <ul className="nav nav-underline">
            <li className="nav-item active d-flex flex-col justify-content-center align-items-center">
                <img src={all} className='header_icons' alt="all" />
                <a className="nav-link" href="#">All</a>
            </li>
            <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                <img src={popcorn} className='header_icons' alt="all" />
                <a className="nav-link" href="#">popcorn</a>
            </li>
            <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                <img src={bevrages} className='header_icons' alt="all" />
                <a className="nav-link" href="#">Bevrages</a>
            </li>
            <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                <img src={snacks} className='header_icons' alt="all" />
                <a className="nav-link" href="#">Snacks</a>
            </li>
            <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                <img src={combos} className='header_icons' alt="all" />
                <a className="nav-link" href="#">Combos</a>
            </li>
            </ul>

        </section>
        <section className='container py-5'>
            <article className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                <div className="card rounded-lg" >
                <img src={salted} className="card-img-top" alt="salted popcorn"/>
                <div className="card-body">

                    <h5 className="card-title">Salted Popcorn</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className="">&#8377; 100</p>
                        <div className='d-flex justify-content-center align-items-center'>
                             
                            {toggle === true ?  <> <button className='btn btn-sm' onClick={()=> countMinus()}> - </button>
                            <div className='px-2'>{itemCount}</div>
                            <button className='btn btn-sm' onClick={()=> countPlus()}> + </button> </> 
                            
                            : <button className='btn btn-sm btn-secondary' onClick={() => setToggle(true)}>
                            Add
                            </button> 
                            }
                        </div>
                    </div>
                    
                </div>
                </div>
                </div>
            </article>
        </section>
    </main>
  )
}

export default Food