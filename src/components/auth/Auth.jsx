import React from "react";
import "./auth.css";
import loginGif from "../../utils/images/login.webp";
import { ReactComponent as Login } from "../../utils/images/login.svg";
// import  { ReactComponent as Profile }  from '../../utils/images/profile.svg';

import Logo from "../../utils/images/suraj1.png";
const Auth = ({ login }) => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn py-0 btn-sm d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="px-1"> <Login /> </div>
        {login}
      </button>
      {/* Modal */}

      <div
        className="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content content-desktop">
            <div className="d-flex justify-content-end align-items-center p-3">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="d-flex flex-col text-center justify-content-center align-items-center p-3">
              <img src={loginGif} alt="login" className="gif" />
              <div>
                <h4>Verify Phone Number</h4>
                <span>Enter Your Phone Number to Proceed</span>
              </div>
            </div>
            <form className="d-flex flex-col px-5 py-3">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Phone Number</label>
              </div>
              <button className="btn my-3 btn-yl">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

export const AuthMobile = ({profile}) => {
  return (
    
        <><div className="d-flex px-4 flex-col text-start justify-content-start align-items-start p-3">
      <img src={Logo} alt="login" className="logo" />
      <div className="py-5">
        <h4 className="text-bold text-s">
          Verify <br /> Phone Number
        </h4>
        <span> To Continue, Enter Your Phone Number</span>
      </div>
    </div><form className="d-flex flex-col px-4 ">
        <div className="form-floating">
          <input
            type="password"
            className="form-control form-control-sm"
            id="floatingPassword1"
            placeholder="Password" />
          <label htmlFor="floatingPassword1">Phone Number</label>
        </div>
      </form><div className="btn_proceed d-flex justify-content-center align-items-end mx-3 my-3">
        <button className="btn my-3 btn-yl w-100">Proceed</button>
      </div></>
  );
};
