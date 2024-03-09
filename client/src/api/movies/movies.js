

export default async function getMovies() {
    try {
        const resp = await fetch("https://surajcineplex.in/webservice/getNowShowingMovie", {
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