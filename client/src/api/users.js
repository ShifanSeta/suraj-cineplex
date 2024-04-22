

export async function RequestOtp (userCredentials) {
    const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
    const endpointUrl = process.env.REACT_APP_API_SET_USER_SIGN_UP
    const Data = {
        name: userCredentials.name,
        mobileno: userCredentials.mobileno,
        email: userCredentials.email,

    }
    const userData = JSON.stringify(Data)
    
console.log("userData", userData);
console.log("Data", Data);

    // function jsonToFormData(json) {
    //   const formData = new FormData();
    //   for (let key in json) {
    //     formData.append(key, json[key]);
    //   }
    //   return formData;
    // }
    // const formData = jsonToFormData(userCredentials);
    // console.log("formData", Data);

        try {
            const resp = await fetch(baseUrl+endpointUrl, {
            method: "POST",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
              "allow-access-control-origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
              },
              body: userData
            });

            return await resp.json();
            
          } catch (error) {
            console.log(error);
          }
}


export async function SignUP (userDetails) {
  const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
  const endpointUrl = process.env.REACT_APP_API_SET_USER_VERIFY_OTP

  const Data = {
      otp: userDetails.otp,
      mobileno: userDetails.mobileno
  }
  const userData = JSON.stringify(Data)

      try {
          const resp = await fetch(baseUrl+endpointUrl, {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "allow-access-control-origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
            },
            body: userData
          });
          return await resp.json();
          
        } catch (error) {
          console.log(error);
        }
}