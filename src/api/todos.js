import React, { useState, useEffect } from "react";
import axios from "axios";

const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `https://api.example.com/data/${id}`,
        updatedData
      );
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => updateData(item.id, { name: "Updated Name" })}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
};
export default Component;
