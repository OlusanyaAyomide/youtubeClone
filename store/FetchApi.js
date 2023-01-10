import axios from "axios";

const BaseUrl = 'https://youtube-v31.p.rapidapi.com'

export default async function FetchApi(URL){
    const options = {
        url: BaseUrl,
        params: {
            maxResults:"50"
        },
        headers: {
          'X-RapidAPI-Key': 'f14f66dcf3msh77e651411894bd9p1bbd03jsn5e107a09d497',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      const response = await axios.get(`${BaseUrl}/${URL}`,options)
      return response.data
} 
    //   axios.request(options).then(function (response) {
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
    // const response = await axios.request(options)
    // console.log(response.data

