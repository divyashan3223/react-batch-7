//! basic use effect task

// import { useEffect } from "react";
// import { useState } from "react";

// import React, { useEffect, useState } from "react";

// const UseEfficte = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

// this is not use dependency array
//   useEffect(() => {
//     console.log("this is not use dependency array[]");
//   });

//   this is use dependency array with add value
//   useEffect(() => {
//     console.log("this is not use dependency array[]");
//   }, [counter1]);

//   initial once the use Effect run
//   useEffect(() => {
//     console.log("this is not use dependency array[]");
//   }, []);
//   return (
//     <>
//       <h1>{counter1}</h1>
//       <h1>{counter2}</h1>
//       <button
//         onClick={() => {
//           setCounter1(counter1 + 1);
//         }}
//       >
//         increment 1
//       </button>
//       <button
//         onClick={() => {
//           setCounter2(counter2 + 2);
//         }}
//       >
//         increment 2
//       </button>
//     </>
//   );
// };

// export default UseEfficte;

// ?using api method in use effect show the details in ui page(rendering)

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const UseEfficte = () => {
//   const [resource, setResource] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resource]);

//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             setResource("posts");
//           }}
//         >
//           post
//         </button>
//         <button
//           onClick={() => {
//             setResource("users");
//           }}
//         >
//           user
//         </button>
//         <button
//           onClick={() => {
//             setResource("comments");
//           }}
//         >
//           comments
//         </button>
//       </div>
//       <h1>{resource}</h1>
//       {items.map((ele) => (
//         <pre>{JSON.stringify(ele)}</pre>
//       ))}
//     </>
//   );
// };

// export default UseEfficte;

// TODO   count number change and title will change and color will change

// const UseEfficte = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("blue");
//   useEffect(() => {
//     document.title = `count:${count} ${color}`;
//   }, [count, color]);
//   let handleClick = () => {
//     setCount(count + 1);
//   };
//   let handleColorClick = () => {
//     setColor((color) => (color === "blue" ? "red" : "blue"));
//   };
//   return (
//     <div>
//       <h1 style={{ color }}>{count}</h1>
//       <button onClick={handleClick}>count increment</button>
//       <button onClick={handleColorClick}>color</button>
//     </div>
//   );
// };

// export default UseEfficte;

// !window height and width resize value using use effect

import { useEffect, useState } from "react";

const UseEfficte = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed");
    };
  }, [width]);
  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>window height:{height}</p>
      <p>window width:{width}</p>
    </>
  );
};

export default UseEfficte;

// ?real time example in weather report

// import React, { useState, useEffect } from "react";

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         // Fetch weather data from an API
//         const response = await fetch(
//           "https://api.weatherapi.com/forecast.json?key=YOUR_API_KEY&q=London&days=1"
//         );
//         const data = await response.json();
//         // Update the weather data state
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     // Fetch weather data when the component mounts
//     fetchWeatherData();

//     // Fetch weather data again every 10 minutes
//     const intervalId = setInterval(fetchWeatherData, 10 * 60 * 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div>
//       <h1>Weather App</h1>
//       {weatherData ? (
//         <div>
//           <h2>Current Weather in {weatherData.location.name}</h2>
//           <p>Temperature: {weatherData.current.temp_c}°C</p>
//           <p>Condition: {weatherData.current.condition.text}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
