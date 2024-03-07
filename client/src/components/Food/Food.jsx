import React from "react";
import "./food.css";
import all from "../../utils/food/all.svg";
import bevrages from "../../utils/food/bevrages.png";
import veg from "../../utils/food/veg.svg";

import combos from "../../utils/food/combos.png";
import popcorn from "../../utils/food/popcorn.avif";
import snacks from "../../utils/food/snacks.png";
import coke from "../../utils/food/coke.jpeg";
import salted from "../../utils/food/salted.jpeg";
import cheese from "../../utils/food/cheese.jpeg";
import caramel from "../../utils/food/caramel.jpeg";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Food = () => {
  const [itemCount, setItemCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [qty, setQty] = useState([]);
  const [searchField, setSearchField] = useState([]);
  const [foods, setFoods] = useState([]);



  console.log(itemCount, toggle);
  const countPlus = (qty) => {
    if (itemCount >= 5) {
      alert("Items cant be more than 5");
      return 5;
    }
    setItemCount(itemCount + 1);
  };
  const countMinus = () => {
    if (itemCount <= 1) {
      setToggle(false);
      return setItemCount(1);
    }
    setItemCount(itemCount - 1);
  };

 

  const foodItems = [
    {
      id: "123",
      photo: salted,
      label: "POPCORN SALTED REG",
      price: 150,
      qty: 1,
      category: 'popcorn'
    },
    {
      id: "132",
      photo: salted,
      label: "POPCORN SALTED MED",
      price: 200,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "142",
      photo: salted,
      label: "POPCORN SALTED LARGE",
      price: 250,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "143",
      photo: caramel,
      label: "POPCORN CARAMEL REG",
      price: 150,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "356",
      photo: caramel,
      label: "POPCORN CARAMEL MED",
      price: 200,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "567",
      photo: caramel,
      label: "POPCORN CARAMEL LARGE",
      price: 250,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "987",
      photo: cheese,
      label: "POPCORN cheese REG",
      price: 150,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "85",
      photo: cheese,
      label: "POPCORN cheese MED",
      price: 200,
      qty: 1,
      category: 'popcorn'

    },
    {
      id: "5787",
      photo: coke,
      label: "COKE LARGE",
      price: 100,
      qty: 1,
      category: 'bevrages'

    },
    {
      id: "674",
      photo: coke,
      label: "COKE REG",
      price: 50,
      qty: 1,
      category: 'bevrages'

    },
    {
      id: "355",
      photo: coke,
      label: "COKE MED",
      price: 70,
      qty: 1,
      category: 'bevrages'

    },
    {
      id: "578",
      photo: coke,
      label: "COKE LARGE",
      price: 100,
      qty: 1,
      category: 'bevrages'

    },
  ];




  const tabsSelect = (tab) => {
    const cate = foodItems.filter( items => {
      return (
        items.category.includes(tab)
        
      )
    }
  )
  if(cate === false || cate.length === 0 || cate === 1){
    setFoods(foodItems)
  }else{
    setFoods(cate)
  }
  }


  
  useEffect(( ) => {
  setFoods(foodItems)

    
  

    console.log(foods, "cate")
  }, [])

  return (
    <>
      <main className="desktop_container d-flex justify-content-center align-items-center">
        <section className="row w-100 d-flex justify-content-center align-items-start">
          <div className="col-lg-9">
            <section className="container py-4 px-3">
              <ul className="nav nav-underline">
                <li onClick={() => tabsSelect("all")} className="nav-item active d-flex flex-col justify-content-center align-items-center">
                  <img src={all} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    All
                  </a>
                </li>
                <li onClick={() => tabsSelect("popcorn")} className="nav-item d-flex flex-col justify-content-center align-items-center">
                  <img src={popcorn} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    popcorn
                  </a>
                </li>
                <li onClick={() => tabsSelect("bevrages")} className="nav-item d-flex flex-col justify-content-center align-items-center">
                  <img src={bevrages} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    Bevrages
                  </a>
                </li>
                <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                  <img src={snacks} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    Snacks
                  </a>
                </li>
                <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                  <img src={combos} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    Combos
                  </a>
                </li>
              </ul>
            </section>
            <section className="container pb-5">
              <article className="row">
                {foods && foods.length >= 0
                  ? foods.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
                        >
                          <div className="card my-2 rounded-lg">
                            <img
                              src={item.photo}
                              className="card-img-top"
                              alt="salted popcorn"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{item.label}</h5>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="">&#8377; {item.price}</p>
                                <div className="d-flex justify-content-center align-items-center">
                                  {toggle === true ? (
                                    <>
                                      {" "}
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => countMinus()}
                                      >
                                        {" "}
                                        -{" "}
                                      </button>
                                      <div> {itemCount}</div>
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => countPlus()}
                                      >
                                        {" "}
                                        +{" "}
                                      </button>{" "}
                                    </>
                                  ) : (
                                    <button
                                      className="btn btn-sm btn-secondary"
                                      onClick={() => setToggle(true)}
                                    >
                                      Add
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "no items available"}
              </article>
            </section>
          </div>
          <div className="col-lg-3 sticky-cart">
            <aside className="container py-5 aside_container">
              {/* <ul className="nav nav-underline">
                <li className="nav-item active d-flex flex-col justify-content-center align-items-center">
                    <img src={all} style={{visibility: "hidden"}} className='header_icons' alt="all" />
                    <a className="nav-link" href="#">Food items</a>
                </li>
                
                </ul> */}
              <section className=" bg-white">
                <p className="txt-bold ">Food summary</p>
                <hr />
              </section>

              <section
                className="d-flex flex-col justify-content-start text-start align-items-start mt-3 sticky-cart-inner"
              >
                <p>Food & Bevrages</p>
                
                <div className="d-flex flex-col justify-content-start align-items-start my-3">
                  <div className="px-3 d-flex justify-content-evenly w-100 align-items-center">
                    <div className="">
                      <img src={veg} alt="veg" />
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2 &times; COKE LARGE
                      </span>
                    </div>
                    <div>
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        TOTAL: &#8377; {itemCount * 100}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start px-4 py-2">
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countMinus()}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countPlus()}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-col justify-content-start align-items-start my-3">
                  <div className="px-3 d-flex justify-content-evenly w-100 align-items-center">
                    <div className="">
                      <img src={veg} alt="veg" />
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2 &times; COKE LARGE
                      </span>
                    </div>
                    <div>
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        TOTAL: &#8377; {itemCount * 100}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start px-4 py-2">
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countMinus()}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countPlus()}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-col justify-content-start align-items-start my-3">
                  <div className="px-3 d-flex justify-content-evenly w-100 align-items-center">
                    <div className="">
                      <img src={veg} alt="veg" />
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2 &times; COKE LARGE
                      </span>
                    </div>
                    <div>
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        TOTAL: &#8377; {itemCount * 100}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start px-4 py-2">
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countMinus()}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countPlus()}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-col justify-content-start align-items-start my-3">
                  <div className="px-3 d-flex justify-content-evenly w-100 align-items-center">
                    <div className="">
                      <img src={veg} alt="veg" />
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2 &times; COKE LARGE
                      </span>
                    </div>
                    <div>
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        TOTAL: &#8377; {itemCount * 100}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start px-4 py-2">
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countMinus()}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countPlus()}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-col justify-content-start align-items-start my-3">
                  <div className="px-3 d-flex justify-content-evenly w-100 align-items-center">
                    <div className="">
                      <img src={veg} alt="veg" />
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2 &times; COKE LARGE
                      </span>
                    </div>
                    <div>
                      <span
                        className="px-2 py-3"
                        style={{ fontSize: "0.75rem" }}
                      >
                        TOTAL: &#8377; {itemCount * 100}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start px-4 py-2">
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countMinus()}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
                      onClick={() => countPlus()}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="px-3 bottom_btn pb-3 bg-white">
                <hr />

                <div className="d-flex justify-content-between align-items-center py-2">
                  <span>Grand Total</span>
                  <span>&#8377; 400 </span>
                </div>
                <button
                  className="btn w-100"
                  style={{ backgroundColor: "#ffcb03" }}
                >
                  Proceed
                </button>
              </section>
            </aside>
          </div>
        </section>
      </main>
      <main className="mobile_container container-fluid">
        <nav className="container py-3 d-flex justify-content-start align-items-center ">
          <h3>Order Snacks</h3>
        </nav>
        <section className="container-fluid p-0">
          <ul className="justify-content-evenly align-items-center d-flex nav nav-underline">
            <li onClick={() => tabsSelect("all")} className="col-sm-2 col-xs-2 nav-item active d-flex flex-col justify-content-center align-items-center">
              <img src={all} className="header_icons" alt="all" />
              <Link className="nav-link" href="#">
                All
              </Link>
            </li>
            <li onClick={() => tabsSelect("popcorn")} className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
              <img src={popcorn} className="header_icons" alt="all" />
              <a className="nav-link" href="#">
                popcorn
              </a>
            </li>
            <li onClick={() => tabsSelect("bevrages")} className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
              <img src={bevrages} className="header_icons" alt="all" />
              <a className="nav-link" href="#">
                Bevrages
              </a>
            </li>
            <li className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
              <img src={snacks} className="header_icons" alt="all" />
              <a className="nav-link" href="#">
                Snacks
              </a>
            </li>
            <li className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
              <img src={combos} className="header_icons" alt="all" />
              <a className="nav-link" href="#">
                Combos
              </a>
            </li>
          </ul>
        </section>
        <section className="d-flex container w-100 px-xs-0 px-0 flex-col justify-content-center text-start  align-items-center">
            
            <article className="row mt-3 w-100 d-flex justify-content-center align-item-center">
                {
                  foods && foods.length >= 0 ? foods.map((item) => {
                    return(
                      <div className="mb-0 card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                          <div className="d-flex justify-content-center align-item-center">
                              <img src={item.photo} className="img_w" alt="" />
                          </div>
                          <p className="my-3" style={{fontSize: '0.8rem'}}>{item.label}</p>
                          <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                              <p style={{fontSize: '0.8rem'}}>&#8377; {item.price}</p>
                              {/* <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button> */}
                              <div className="d-flex justify-content-center align-items-center">
                                  {toggle === true ? (
                                    <>
                                      {" "}
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => countMinus()}
                                      >
                                        {" "}
                                        -{" "}
                                      </button>
                                      <div> {itemCount}</div>
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => countPlus()}
                                      >
                                        {" "}
                                        +{" "}
                                      </button>{" "}
                                    </>
                                  ) : (
                                    <button
                                      className="btn btn-sm "
                                      style={{backgroundColor: "#ffcb03"}}

                                      onClick={() => setToggle(true)}
                                    >
                                      Add
                                    </button>
                                  )}
                                </div>
                          </div>
                      </div>
                    )
                  })
                  
                  : 'No data to show'
                }
                
                {/* <div className="mb-0 card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="my-3" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div> */}
                
            </article>
            <section className="d-flex mb-3 pb-3 flex-col justify-content-center align-items-center bottom_section w-100">
                <div className="d-flex flex-col w-100 justify-content-center align-items-center py-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                <span className="pi pi-chevron-up" ></span>
                
                </div>
                <div className="d-flex w-100 justify-content-between align-items-center py-1">
                  <div className="d-flex justify-content-modify align-items-center w-75">
                    <span className="pr">1 F&B</span>
                    <span className="pl"> &#8377; 400.50</span>
                  </div>
                  <div className="w-25 d-flex justify-content-end">
                  <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}}>Proceed</button>

                  </div>
                </div>
                {/* <button className="btn w-100 py-2" style={{backgroundColor: "#ffcb03"}}>
                    Proceed
                </button> */}
                <div style={{bottom: "50px"}} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header shadow">
                  <div className="d-flex w-100 justify-content-between px-2 align-items-center">
                    <div>Total</div>
                    <div>&#8377; 400.50</div>
                  </div>
                  
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body small py-1">
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-col justify-content-start align-items-start my-3">
                    <div className="px-3 d-flex justify-content-between w-100 align-items-center">
                      <div className="">
                        <img src={veg} alt="veg" />
                        <span
                          className="px-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                          2 &times; COKE LARGE
                        </span>
                      </div>
                      <div>
                        <span
                          className="px-2 mx-2 py-3"
                          style={{ fontSize: "0.75rem" }}
                        >
                           &#8377; {itemCount * 100}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
        </section>
      </main>
    </>
  );
};

export default Food;



