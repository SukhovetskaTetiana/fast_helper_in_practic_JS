// 1. How to use an .env file
// in the root of you React project, create a file named .env, You can also have specific environment files like .env.production, ect., to manage different configurations for diferent environments.

// 2. Add variables .env file
// With VITE
VITE_API_KEY = your_api_key
VITE_API_URL = https://api.example.com

// With Create React App (CRA)
REACT_APP_API_KEY = your_api_key
REACT_APP_API_URL = https://api.example.com

// 3. Access the variables
// In React components or other parts of code, you can access these variables like this:

// With Vite 
const apiKey = import.meta.env.REACT_APP_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// With Create React App (CRA)
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

//4. Use variables in configuration files

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.REACT_APP_API_KEY;

const fetchData = async () => {
  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log(await response.json());
  } else {
    console.log(`Error! ${response.status}`);
  }
}

export default fetchData;