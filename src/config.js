//one API_ENDPOINT variable commented out depending on if developing on local host or in production
export default {
    API_ENDPOINT: `https://play-with-me-api.herokuapp.com/api`,
    //API_ENDPOINT: "http://localhost:8000/api",
    API_KEY: process.env.REACT_APP_API_KEY,
  }