// Axios is a popular JavaSctipt library used for making HTTP requests from a web browser or Node.js. Axios makes building a web app or a server-side application easy to work with APIs and other HTTP services.

// 1. ======= Setting Up Axios ======
// npm install axios

// you can include axios in your HTML or JS code

// In HTML
// <script src='http://unpkg.com/axios/dist/axios.min.js'></script>

// OR if you`re using a module bundler
// import axios from 'axios';

// 2. ======== Basic GET Request ======

const fetchData = async () => {
  try {
    const response = await axios.get("http://example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

// 3. ======== Basic POST Request ======

const postData = async () => {
  try {
    const response = await axios.post("http://example.com/data", {
      firstName: "Tetiana",
      lastName: "Kusmin",
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

postData();

// 4. ======== Handling Errors ======

const fetchDaaatasync = async () => {
  try {
    const response = await axios.get("http://example.com/data");
    console.log(response.data);
  } catch (error) {
    if (error.response.status === 404) {
      console.error("Data not found");
    } else {
      console.error(error);
    }
  }
};

fetchData();
