// ANCHOR -- Imports --
import "@babel/polyfill";
import { getWeather, renderWeatherData } from "./weatherApi";
import { login, logout } from "./login";
import { signup } from "./signup";
import { updateSettings } from "./updateSettings";
import { carouselController } from "./carousel";

// Element Selectors
const weatherWidget = document.querySelector(".hero-weather");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector(".signup-form");
const logoutBtn = document.querySelector(".logout-btn");
const profileInfoForm = document.getElementById("profileInfo");
const carousel = document.querySelector(".hero-carousel");

if (carousel) {
  console.log("we out");
  carouselController();
} else {
  console.log("we not out");
}

// ANCHOR -- Weather Widget --
if (weatherWidget) {
  // Set Weather Variables
  const apiRoot = "https://api.openweathermap.org/data/2.5/weather";
  const city = "Contoocook";
  const units = "imperial";
  const apiKey = "";

  // Load default weather info on window load
  window.addEventListener("load", async (e) => {
    // 1) retreive weatherData from getWeather function
    const weatherData = await getWeather(apiRoot, city, units, apiKey);
    // 2) render Weather Data
    renderWeatherData(weatherData, units);
  });

  // Weather Form Submit
  const weatherForm = document.querySelector(".weather-form");
  weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("weather form submitted");
    // 1) Get user input info
    const unitInput =
      document.querySelector(".unit-input").value === "F"
        ? "imperial"
        : "metric";
    // 2) retreive weatherData from getWeather function
    const cityInput = document.querySelector(".city-input").value;
    const weatherData = await getWeather(apiRoot, cityInput, unitInput, apiKey);
    // 2) render Weather Data
    renderWeatherData(weatherData, unitInput);
  });
}

// ANCHOR -- Login Form --
if (loginForm) {
  console.log("form exists");
  loginForm.addEventListener("submit", (e) => {
    console.log("form submitting");
    e.preventDefault();
    const email = document.querySelector("#emailInput").value;
    const password = document.querySelector("#passwordInput").value;
    login(email, password);
  });
}

// ANCHOR -- Signup Form --
if (signupForm) {
  console.log("signup form exists");
  signupForm.addEventListener("submit", (e) => {
    console.log("signup form submitting");
    e.preventDefault();
    const name = document.querySelector("#nameInput").value;
    const email = document.querySelector("#emailInput").value;
    const password = document.querySelector("#passwordInput").value;
    const passwordConfirm = document.querySelector("#passwordConfirmInput")
      .value;
    const role = document.querySelector("#roleSelect").value;
    signup(name, email, password, passwordConfirm, role);
  });
}

// ANCHOR -- Logout Button --
if (logoutBtn) {
  console.log("logout btn clicked");
  logoutBtn.addEventListener("click", logout);
}

// ANCHOR -- Profile Info Form
if (profileInfoForm) {
  profileInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("nameInput").value);
    form.append("email", document.getElementById("emailInput").value);
    form.append("address", document.getElementById("addressInput").value);
    form.append("role", document.getElementById("roleInput").value);
    form.append("photo", document.getElementById("photoInput").files[0]);
    console.log("🚀 submitting profile info 🚀");
    updateSettings(form, "data");
  });
}
