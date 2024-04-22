

export async function getPopUpAPI(signal) {
    const baseUrl = process.env.REACT_APP_API_BASE_DB_URL;
    const endpoint = process.env.REACT_APP_API_GET_POPUP
    try {
        const resp = await fetch(baseUrl+endpoint, {
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