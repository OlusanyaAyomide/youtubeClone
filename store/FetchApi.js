import axios from "axios";
import moment from "moment";

const BaseUrl = "https://youtube-v31.p.rapidapi.com";

export default async function FetchApi(URL) {
  const options = {
    url: BaseUrl,
    params: {
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "6c6fd5bcb8msh5430c505dbd79d0p1202e7jsnf26e7df8338d",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const response = await axios.get(`${BaseUrl}/${URL}`, options);
  return response.data;
}

export const ViewCount = (number) => {
  if (number.length > 3) {
    return Math.round(Number(number) / 1000);
  }
  return number;
};
export const timeAgo = (time) => {
  return moment(time).fromNow();
};
