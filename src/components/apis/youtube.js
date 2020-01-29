import axios from "axios";

const KEY = "AIzaSyDit9EgHI7Pk6jNiUz2y-G4U2xofQY5lvo";

//Preconfigured instance of Axios that already has an URL and some params loaded into it
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
