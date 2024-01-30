import React from "react";
import './profile.css'

function ProfileComponent({ data }) {
  const { avatar_url, id, twitter_username } = data;
  return (
    <div className="main">
      <div className="img">
        <img src={avatar_url} alt="" />
        <p> {id}</p>
      </div>
      <div className="btn">
        <input type="button" value="Portfolio" />
       <input type="button" value="Twitter url" />
      </div>
    </div>
  );
}

export default ProfileComponent;
