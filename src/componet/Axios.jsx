import React, { useEffect, useState } from "react";
import axios from "axios";

// const Axios = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => console.log(response.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>axios data</h1>
//       <ul>
//         {data.map((user) => {
//           <li key={user.id}>{user.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "roshinin",
        email: "ds@getDefaultNormalizer.com",
      })
      .then((response) => {
        console.log("data successfully", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default MyComponent;
// import httpApi from "../libs/axios";
// import React, { useState } from "react";
// import { useEffect } from "react";

// const ClientUrl = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const info = async () => {
//       let response = await httpApi.post("/users", {
//         name: "roshinin",
//         email: "ds@getDefaultNormalizer.com",
//       });
//       console.log(response.data);
//     };
//     info();
//   }, []);
//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default ClientUrl;
