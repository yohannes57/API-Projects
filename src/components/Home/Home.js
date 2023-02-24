import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setItems(response.data);
    };
    fetchData();
  }, []);
  console.log(items);
  return (
    <div className="home">
      {items?.map((item) => (
        <div className="home_container">
          <div className="home_container_left">
            <h3>name: {item.name}</h3>
            <h3>username: {item.username}</h3>
            <h3>Email: {item.email}</h3>
            <h3>Adress: {item.address.city}</h3>
            <h3>Zipcode: {item.address.zipcode}</h3>
          </div>
          <div className="home_container_likes">
            {/* <a href="/likes">Likes</a> */}
            <textarea type="text" placeholder="write comments"></textarea>
            <button>post</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
