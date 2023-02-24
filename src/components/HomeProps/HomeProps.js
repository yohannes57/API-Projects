import React from "react";

function HomeProps({ name, username, email, city, zipcode }) {
  return (
    <>
      <div className="home_container">
        <div className="home_container_left">
          <h3>name: {name}</h3>
          <h3>username: {username}</h3>
          <h3>Email: {email}</h3>
          <h3>Adress: {city}</h3>
          <h3>Zipcode: {zipcode}</h3>
        </div>
        <div className="home_container_likes">
          {/* <a href="/likes">Likes</a> */}
          <textarea type="text" placeholder="write comments"></textarea>
          <button>post</button>
        </div>
      </div>
    </>
  );
}

export default HomeProps;
