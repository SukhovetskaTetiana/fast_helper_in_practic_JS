// 1. OpenWeatherMap API

// The OpenWeatherMap API provides real-time and historical weather data for over 200 000 cities worldwide. You can use this API to add weather onformation to your website or app, such as current temperature, forecast, and weather alerts.

const apiKey = "YOUR_API_KEY";
const city = "San Francisco";

fetch(
  `https://api.openweathermap.org/data/2.5/weatherq=${city}&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const currentTemp = data.main.temp;
    const description = data.weather[0].description;

    // Display weather information on the UI
  });

// 2. Unsplash Photo API

// The Unsplash Photo API provides access to a vast library of high-quality, royalty-free images. You can use this API to add beautiful visuals to your website or app, without having to worry about copyright infringement.

const clientID = "YOUR_CLIENT_ID";
const query = "nature";

fetch(
  `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientID}`
)
  .then((response) => response.json())
  .then((data) => {
    const imageURL = data.results[0].urls.regular;

    // Display image on the UI
  });

// 3. SendGrid Email API

// The SendGrid Email API allows you to send and manage email campaigns, including transactional emails and marketing newsletters. You can use this API to send personalized emails to your users, promote your products or services, and track email engagement

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("YOUR_API_KEY");

const msg = {
  to: "eser@example.com",
  from: "noreplay@yourdomain.com",
  subject: "Welcome to our website!",
  text: "Hello there, welcome to our website!",
  html: "<h1>Welcome to our website!</h1><p>Thank you for signing up. We hope you enjoy your time here.</p>",
};

sgMail.send(msg);

// 4. Stripe Payment API

// The Stripe Payment API allows you to process payment securely and efficiently. You can use this API to accept various payment methods, such as credit cards, debit cards, and Apple Pay.

const stripe = require("stripe")("YOUR_STRIPE_KEY");
const charge = await stripe.charge.create({
  amount: 1000,
  currency: "usd",
  description: "Product purchase",
});

// Display payment confirmation on the UI

// 5. Google Platform API

// The Google Maps Platform API provides access to interactiv maps, routing informations, and locationbased services. You can use this API to add maps and location features to your website or app, such as directions, street views, and place information.

const map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
});
