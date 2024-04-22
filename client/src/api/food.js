



export async function getFoodItems(signal) {
    console.log("signal", signal);
    const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
    const getFoodUrl = process.env.REACT_APP_API_FOOD_ITEMS
        try {
            const resp = await fetch(baseUrl+getFoodUrl, {
            signal,
            method: "GET",
            cache: "no-cache",
    
            headers: {
              "Content-Type": "application/json",
              "allow-access-control-origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
              }
            });
            return await resp.json();
            
          } catch (error) {
            console.log(error);
          }
    } 


    // export default async function getFoodItems(signal) {
    // console.log("signal", signal);
    // const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
    // const getFoodUrl = process.env.REACT_APP_API_FOOD_ITEMS
    //     try {
    //         const resp = await fetch(baseUrl+getFoodUrl, {
    //         signal,
    //         method: "GET",
    //         cache: "no-cache",
    
    //         headers: {
    //           "Content-Type": "application/json",
    //           "allow-access-control-origin": "*",
    //           "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
    //           }
    //         });
    //         return await resp.json();
            
    //       } catch (error) {
    //         console.log(error);
    //       }
    // } 

    export async function getFoodCategory(signal) {
      console.log("signal", signal);
      const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
      const getFoodCatUrl = process.env.REACT_APP_API_FOOD_CATEGORY
          try {
              const resp = await fetch(baseUrl+getFoodCatUrl, {
              signal,
              method: "GET",
              cache: "no-cache",
      
              headers: {
                "Content-Type": "application/json",
                "allow-access-control-origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
                }
              });
              return await resp.json();
              
            } catch (error) {
              console.log(error);
            }
      } 