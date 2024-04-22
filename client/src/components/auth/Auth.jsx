import React, { useState, useRef } from "react";
import "./auth.css";
import loginGif from "../../utils/images/login.webp";
import { ReactComponent as Login } from "../../utils/images/login.svg";
// import  { ReactComponent as Profile }  from '../../utils/images/profile.svg';
import { Sidebar } from "primereact/sidebar";
import Logo from "../../utils/images/suraj1.png";
import Profile from "../../utils/images/profile.svg";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { RequestOtp, SignUP } from "../../api/users";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

const Auth = ({ setVisible, visible }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    mobileno: "",
    email: "",
  });
  const [otpSec, setOtpSec] = useState(false)
  const [token, setTokens] = useState();
  const toast = useRef(null);
  const navigate = useNavigate()
  console.log("tokjen", token);
  function handleGetOtp(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(credentials);
    if (!emailRegex.test(credentials.email)) return false
    RequestOtp(credentials).then((res) => {
      console.log("resusers", res);
    })
    setOtpSec(true)
  }

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Your Account has been Created!', life: 3000});
  }
  function handleUserSignUp(e) {
    e.preventDefault();
    const Data = {
      otp: token,
      mobileno: credentials.mobileno
    }
    SignUP(Data).then((res) => {
      const userData = res.data
      localStorage.setItem("SurajCredentials", JSON.stringify(userData))
      setVisible(false)
      setTimeout(() => {
        showSuccess();
      }, 1200)
      navigate("/");
      console.log("rs",res);
    })
  }

  


  return (
    <div>
                  <Toast ref={toast} />

      <div
        className="d-flex px-1 justify-content-center align-items-center btn btn-sm border-none"
        onClick={() => setVisible(true)}
      >
        <Login />
        <div className="px-1 text-white">login</div>
      </div>
      {/* Modal */}
      <Dialog
        visible={visible}
        modal
        style={{ width: "40rem" }}
        onHide={() => setVisible(false)}
      >
        <div className="d-flex flex-col text-center justify-content-center align-items-center p-2">
          <img src={loginGif} alt="login" className="gif" />
          {!otpSec ? (
            <div>
            <h4>Verify Mobile Number</h4>
            <span>Enter Deatils to Proceed</span>
          </div>
          ): (
            <div>
            <h4>OTP sent to your Mobile Number</h4>
            <span>Enter OTP to Proceed</span>
          </div>
          )
          
          }
          
        </div>
        {
          !otpSec ? (
            <form className="d-flex flex-col px-5 py-3" onSubmit={handleGetOtp}>
              <div className="d-flex flex-col mb-1">
                <label className="form-label mb-1" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="username-help"
                  required
                  value={credentials.name}
                  minLength={3}
                  onChange={(e) => {
                    setCredentials({ ...credentials, name: e.target.value });
                  }}
                />
              </div>
              <div className="d-flex flex-col mb-1">
                <label className="form-label mb-1" htmlFor="username">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  minLength={10}
                  aria-describedby="username-help"
                  required
                  integerOnly
                  value={credentials.mobileno}
                  onChange={(e) => {
                    setCredentials({ ...credentials, mobileno: e.target.value });
                  }}
                />
              </div>
              <div className="d-flex flex-col mb-1">
                <label className="form-label mb-1" htmlFor="username">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  aria-describedby="username-help"
                  value={credentials.email}
                  required
                  onChange={(e) => {
                    setCredentials({ ...credentials, email: e.target.value });
                  }}
                />
              </div>
                <Button
                  className="btn-yl mt-3"
                  type="submit"
                  label="Request Otp"
                  raised
                  disabled={!credentials.email || !credentials.mobileno || !credentials.name}                  
                />
            </form>
          ) : (
            <form onSubmit={handleUserSignUp} className="form-card d-flex flex-col justify-content-center align-items-center mt-3">
             <input className="form-control w-25" maxLength={4} style={{textAlign: "center"}} type="password" value={token} onChange={(e) => setTokens(e.target.value)}  />
              <Button
                disabled={!token}
                className="btn-yl mt-3"
                type="submit"
                label="Sign Up"
                raised
              />
              <div className="d-flex flex-col justify-content-evenly align-items-center mt-3">
              <p className="">resend OTP</p> 
              </div>

          </form>
          
          )
        }
        
      </Dialog>
    
    </div>
  );
};

export default Auth;

export const AuthMobile = ({ profile }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <>
          <div className="d-flex px-4 flex-col text-start justify-content-start align-items-start p-3">
            <img src={Logo} alt="login" className="logo" />
            <div className="py-5">
              <h4 className="text-bold text-s">
                Verify <br /> Phone Number
              </h4>
              <span> To Continue, Enter Your Phone Number</span>
            </div>
          </div>
          <form className="d-flex flex-col px-4 ">
            <div className="form-floating">
              <input
                type="number"
                className="form-control form-control-sm"
                id="floatingPassword1"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword1">Phone Number</label>
            </div>
          </form>
          <div className="btn_proceed d-flex justify-content-center align-items-end mx-3 my-3 mb-5">
            <button className="btn my-3 btn-yellow w-100">Proceed</button>
          </div>
        </>
      </Sidebar>
      <div className="border-none" onClick={() => setVisible(true)}>
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
};
