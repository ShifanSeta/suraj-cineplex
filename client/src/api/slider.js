

export default async function getSlider(signal) {
    console.log("signal", signal);
    const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
    const getSliderUrl = process.env.REACT_APP_API_SLIDER
        try {
            const resp = await fetch(baseUrl+getSliderUrl, {
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