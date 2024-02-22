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
import { useState } from "react";
import { Link } from 'react-router-dom';

const Food = () => {
  const [itemCount, setItemCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [qty, setQty] = useState([]);

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
    },
    {
      id: "132",
      photo: salted,
      label: "POPCORN SALTED MED",
      price: 200,
      qty: 1,
    },
    {
      id: "142",
      photo: salted,
      label: "POPCORN SALTED LARGE",
      price: 250,
      qty: 1,
    },
    {
      id: "143",
      photo: caramel,
      label: "POPCORN CARAMEL REG",
      price: 150,
      qty: 1,
    },
    {
      id: "356",
      photo: caramel,
      label: "POPCORN CARAMEL MED",
      price: 200,
      qty: 1,
    },
    {
      id: "567",
      photo: caramel,
      label: "POPCORN CARAMEL LARGE",
      price: 250,
      qty: 1,
    },
    {
      id: "987",
      photo: cheese,
      label: "POPCORN cheese REG",
      price: 150,
      qty: 1,
    },
    {
      id: "85",
      photo: cheese,
      label: "POPCORN cheese MED",
      price: 200,
      qty: 1,
    },
    {
      id: "456",
      photo: cheese,
      label: "POPCORN cheese LARGE",
      price: 250,
      qty: 1,
    },
    {
      id: "674",
      photo: coke,
      label: "COKE REG",
      price: 50,
      qty: 1,
    },
    {
      id: "355",
      photo: coke,
      label: "COKE MED",
      price: 70,
      qty: 1,
    },
    {
      id: "578",
      photo: coke,
      label: "COKE LARGE",
      price: 100,
      qty: 1,
    },
  ];

  return (
    <>
      <main className="desktop_container d-flex justify-content-center align-items-center">
        <section className="row d-flex justify-content-center align-items-start">
          <div className="col-lg-9">
            <section className="container py-5 px-3">
              <ul className="nav nav-underline">
                <li className="nav-item active d-flex flex-col justify-content-center align-items-center">
                  <img src={all} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    All
                  </a>
                </li>
                <li className="nav-item d-flex flex-col justify-content-center align-items-center">
                  <img src={popcorn} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    popcorn
                  </a>
                </li>
                <li className="nav-item d-flex flex-col justify-content-center align-items-center">
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
            <section className="container py-5">
              <article className="row">
                {foodItems && foodItems.length >= 0
                  ? foodItems.map((item) => {
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
          <div className="col-lg-3">
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
                style={{ position: "relative" }}
                className="d-flex flex-col justify-content-start text-start align-items-start my-5"
              >
                <p>Food & Bevrages</p>
                <div className="d-flex justify-content-start text-start align-items-center">
                  <img src={salted} className="food_img" alt="qty" />
                  <div className="d-flex flex-col justify-content-evenly align-items-center">
                    <h5>salted popcorn</h5>
                    <h5>qty: 1</h5>
                  </div>
                  <h5>total: &#8377; 100</h5>
                </div>
                <div className="d-flex justify-content-start text-start align-items-center ">
                  <img src={salted} className="food_img" alt="qty" />
                  <div className="d-flex flex-col justify-content-start text-start align-items-center px-3">
                    <h5>salted popcorn</h5>
                    <h5>qty: 1</h5>
                  </div>
                  <h5 className="px-3">total: &#8377; 100</h5>
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
              <section className="px-3 bottom_btn py-5 bg-white">
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
            <li className="col-sm-2 col-xs-2 nav-item active d-flex flex-col justify-content-center align-items-center">
              <img src={all} className="header_icons" alt="all" />
              <Link className="nav-link" href="#">
                All
              </Link>
            </li>
            <li className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
              <img src={popcorn} className="header_icons" alt="all" />
              <a className="nav-link" href="#">
                popcorn
              </a>
            </li>
            <li className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center">
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
        <section className="d-flex container w-100 px-2 flex-col justify-content-center text-start  align-items-center">
            <h5 className="py-3 text-start">ALL</h5>
            <article className="row w-100 d-flex justify-content-center align-item-center">
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                <div className="card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="py-2" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
                
            </article>
            <section className="d-flex my-3 py-3 flex-col justify-content-center align-items-center bottom_section w-100">
                <div className="d-flex w-100 justify-content-between align-items-center py-2">
                    <div>1 F&B</div>
                    <div>&#8377; 400.50</div>
                </div>
                <button className="btn w-100 py-2" style={{backgroundColor: "#ffcb03"}}>
                    Proceed
                </button>
            </section>
        </section>
      </main>
    </>
  );
};

export default Food;
