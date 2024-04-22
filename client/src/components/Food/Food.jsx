import React from "react";
import "./food.css";
import all from "../../utils/food/all.svg";
import bevrages from "../../utils/food/bevrages.png";
import veg from "../../utils/food/veg.svg";

import combos from "../../utils/food/combos.png";
import popcorn from "../../utils/food/popcorn.avif";
import snacks from "../../utils/food/snacks.png";
import salted from "../../utils/food/salted.jpeg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFoodItems, getFoodCategory } from "../../api/food";
import { ProgressSpinner } from 'primereact/progressspinner';

const Food = () => {
  const [itemCount, setItemCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [qty, setQty] = useState(1);
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  console.log(itemCount, toggle);
  const countPlus = (item) => {
    console.log('item', item)
    if(localStorage.getItem("cart")){
      let cartDetails = JSON.parse(localStorage.getItem("cart"));
      const isExist = cartDetails.find((cartItem) => cartItem.id == item.id)
      console.log("isExist", isExist)
      isExist.quantity = isExist.quantity + 1;
      if (isExist.quantity >= 5) {
        alert("Items cant be more than 5");
        return;
      }
      const alreadyAddedItems = JSON.parse(localStorage.getItem("cart"));
      alreadyAddedItems.forEach((cart) => { 
        if(cart.id == item.id){
          cart.quantity = cart.quantity + 1;
        }
      });
      localStorage.setItem("cart", JSON.stringify(alreadyAddedItems));
    }
    setItemCount(itemCount + 1);
    return item;
  };
  const countMinus = (item) => {
    if(localStorage.getItem("cart")){
      let cartDetails = JSON.parse(localStorage.getItem("cart"));
      const isExist = cartDetails.find((cartItem) => cartItem.id == item.id)
      console.log("isExist", isExist)
      return isExist && isExist.id ? true : false;
    }
    if (itemCount <= 1) {
      setToggle(false);
      return setItemCount(1);
    }
    setItemCount(itemCount - 1);
  };

  const generateID =  Math.floor(Math.random() * 100)

  const handleAddToCart = (itemId, itemName, itemQuantity) => {
    console.log("get",itemId, itemName, itemQuantity );
      // setCartItems([...cartItems, ]);
      const itemToAdd = {
        _localId :Math.floor(Math.random() * 100),
        id: itemId,
        name: itemName,
        quantity: itemQuantity,
      };
      setCartItems([...cartItems, itemToAdd ])
      console.log(cartItems, "id");
      if(localStorage.getItem("cart")){
        const alreadyAddedItems = JSON.parse(localStorage.getItem("cart"));
        localStorage.setItem("cart", JSON.stringify([...alreadyAddedItems, itemToAdd]));
      }else{
        localStorage.setItem("cart", JSON.stringify([itemToAdd]));
      }
    console.table(JSON.parse(localStorage.getItem("cart")));
  }
 

  const tabsSelect = (tabId) => {
    const cate = foods.filter((items) => {
      console.log("tebid", tabId);

      return items.categoryid.includes(tabId);
    });
    console.log("cate fuul", cate);
    if (cate === false || cate.length === 0 || cate === 1) {
      setListItems(foods);
    } else {
      setListItems(cate);
    }
    console.log("food", foods);
    console.log("cate", cate);
  };
  function checkIfAddedTOCart(item) {
    console.log('Item', item);
    if(localStorage.getItem("cart")){
      let cartDetails = JSON.parse(localStorage.getItem("cart"));
      const isExist = cartDetails.find((cartItem) => cartItem.id == item.id)
      console.log("isExist", isExist)
      return isExist && isExist.id ? true : false;
    }
    return false;
  }
  function getItemQuantity(item){
    console.log('item for qty',item)
    if(localStorage.getItem("cart")){
      let cartDetails = JSON.parse(localStorage.getItem("cart"));
      const isExist = cartDetails.find((cartItem) => cartItem.id == item.id)
      console.log("isExist", isExist)
      return isExist && isExist.id ? isExist.quantity : 0;

    }
    return 0;
  }
  useEffect(() => {

    getFoodItems().then((res) => {
      const data = res.data.sort((a, b) => b.name - a.name);
      setFoods(data);
      setListItems(data);
    });
    getFoodCategory().then((res) => {
      setCategory(res.data);
    });

    console.log(foods, "cate");
  }, []);

  return (
    <>
      <main className="desktop_container d-flex justify-content-center align-items-center">
        <section className="row w-100 d-flex justify-content-center align-items-start">
          <div className="col-lg-9">
            <section className="container py-4 px-3">
              <ul className="nav nav-underline">
                <li
                  onClick={() => tabsSelect("all")}
                  className="nav-item active d-flex flex-col justify-content-center align-items-center"
                >
                  <img src={all} className="header_icons" alt="all" />
                  <a className="nav-link" href="#">
                    All
                  </a>
                </li>
                {category && category.length >= 0
                  ? category.map((item) => {
                      return (
                        <li
                        onClick={() => tabsSelect(item.id)}
                        className="nav-item d-flex flex-col justify-content-center align-items-center"
                        >
                          <img src={item.image} className="header_icons" alt={item.slug} />
                          <a className="nav-link" href="#">
                          {item.name}
                          </a>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </section>
            <section className="container pb-5">
              <article className="row">
                {listItems && listItems.length >= 0
                  ? listItems.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
                        >
                          <div className="card my-2 rounded-lg">
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt="salted popcorn"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="">&#8377; {item.price}</p>
                                <div className="d-flex justify-content-center align-items-center">
                                  {toggle === true ? (
                                    <>
                                      {" "}
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => {countMinus(item)}}
                                      >
                                        {" "}
                                        -{" "}
                                      </button>
                                      <div> {getItemQuantity(item)}</div>
                                      <button
                                        className="btn btn-sm"
                                        onClick={() => {countPlus(item)}}
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

              <section className="d-flex flex-col justify-content-start text-start align-items-start mt-3 sticky-cart-inner">
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
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
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
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
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
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
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
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
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
                    >
                      {" "}
                      -{" "}
                    </button>
                    <div className="px-2  py-0"> {itemCount}</div>
                    <button
                      className="btn btn-sm py-0"
                      style={{ backgroundColor: "#ffcb03" }}
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
      <main className="mobile_container container-fluid " >
        <nav className="container py-3 d-flex justify-content-start align-items-center ">
          <h3>Order Snacks</h3>
        </nav>
        <section className="container-fluid p-0">
          <ul className="justify-content-evenly align-items-center d-flex nav nav-underline">
            <li
              onClick={() => tabsSelect("all")}
              className="col-sm-2 col-xs-2 nav-item active d-flex flex-col justify-content-center align-items-center"
            >
              <img src={all} className="header_icons" alt="all" />
              <Link className="nav-link" href="#">
                All
              </Link>
            </li>
            {category && category.length >= 0
              ? category.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => tabsSelect(item.id)}
                      className="col-sm-2 col-xs-2 nav-item d-flex flex-col justify-content-center align-items-center"
                    >
                      <img
                        src={item.image}
                        className="header_icons"
                        alt={item.slug}
                      />
                      <a className="nav-link font-header-items" href="#">
                        {item.name}
                      </a>
                    </li>
                  );
                })
              : ""}
            {/* <li onClick={() => tabsSelect("all")} className="col-sm-2 col-xs-2 nav-item active d-flex flex-col justify-content-center align-items-center">
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
            </li> */}
          </ul>
        </section>
        <section className="d-flex container px-xs-0 px-0 flex-col justify-content-center text-start  align-items-center">
          <article className="row mt-3 mx-auto g-2 d-flex justify-content-start align-items-center" style={{height: "100%"}}>
            {listItems && listItems.length >= 0 ? (
              listItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="mb-0 d-flex col-sm-6 col-xs-6 "
                    style={{ width: "50%" }}
                  >
                    <div
                      className="card  d-flex justify-content-center align-item-center text-start"
                      style={{ borderRadius: "16px", width: "100%" }}
                    >
                      <div className="d-flex justify-content-center align-item-center">
                        <img
                          src={item.image}
                          className="img_w"
                          alt="food_icon"
                        />
                      </div>
                      <p className="my-3 px-2 text-truncate" style={{ fontSize: "0.8rem" }}>
                        {item.name}
                      </p>
                      <div
                        className="d-flex px-2 justify-content-between align-item-center"
                        style={{ alignItems: "baseline" }}
                      >
                        <p style={{ fontSize: "0.8rem" }}>
                          &#8377; {item.price}
                        </p>
                        {/* <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button> */}
                        <div className="d-flex justify-content-center align-items-center">
                          {checkIfAddedTOCart(item) == true ? (
                            <>
                              {" "}
                              <button
                                className="btn btn-sm"
                                onClick={() => countMinus(item)}
                              >
                                {" "}
                                -{" "}
                              </button>
                              <div> {getItemQuantity(item)}</div>
                              <button
                                className="btn btn-sm"
                                onClick={() => countPlus(item)}
                              >
                                {" "}
                                +{" "}
                              </button>{" "}
                            </>
                          ) : (
                            <button
                              className="btn btn-sm btn-danger"
                              
                              onClick={() => handleAddToCart(item.id, item.name, 1)}
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                );
              })
            ) : 
              <div className="mb-0 card card_width col-sm-6 col-xs-6 my-2  d-flex justify-content-center align-item-center text-start" style={{borderRadius: '16px',  margin: '3px'}}>
                    <div className="d-flex justify-content-center align-item-center">
                        <img src={salted} className="img_w" alt="" />
                    </div>
                    <p className="my-3" style={{fontSize: '0.8rem'}}>Salted Popcorn</p>
                    <div className="d-flex justify-content-between align-item-center" style={{alignItems: 'baseline'}}>
                        <p style={{fontSize: '0.8rem'}}>&#8377; 300</p>
                        <button className="btn btn-sm" style={{backgroundColor: "#ffcb03"}} >Add</button>
                    </div>
                </div>
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
          <section className="d-flex mb-3 pb-3 flex-col justify-content-center align-items-center bottom_section w-100" >
            <div
              className="d-flex flex-col w-100 justify-content-center align-items-center py-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <span className="pi pi-chevron-up"></span>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center py-1">
              <div className="d-flex justify-content-modify align-items-center w-75">
                <span className="pr">1 F&B</span>
                <span className="pl"> &#8377; 400.50</span>
              </div>
              <div className="w-25 d-flex justify-content-end">
                <button
                  className="btn btn-sm"
                  style={{ backgroundColor: "#ffcb03" }}
                >
                  Proceed
                </button>
              </div>
            </div>
            {/* <button className="btn w-100 py-2" style={{backgroundColor: "#ffcb03"}}>
                    Proceed
                </button> */}
            <div
              style={{ bottom: "50px" }}
              className="offcanvas offcanvas-bottom"
              tabIndex={-1}
              id="offcanvasBottom"
              aria-labelledby="offcanvasBottomLabel"
            >
              <div className="offcanvas-header shadow">
                <div className="d-flex w-100 justify-content-between px-2 align-items-center">
                  <div>Total</div>
                  <div>&#8377; 400.50</div>
                </div>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
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
