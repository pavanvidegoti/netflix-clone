let cl = console.log;


const baseUrl = `https://api.themoviedb.org/3`;
const api_key = `c7d4a957e16b34225a667ae2a1dc3988`;
const img_url = `https://image.tmdb.org/t/p`;
const trending_url = `${baseUrl}/trending/all/week?api_key=${api_key}`;




const makeApiCall = async(apiUrl,methodName,msgBody) => {
    msgBody = msgBody ? JSON.stringify(msgBody) : null;
   let res = await fetch(apiUrl,{
        method:methodName,
        body:msgBody
    })
    return res.json()
}