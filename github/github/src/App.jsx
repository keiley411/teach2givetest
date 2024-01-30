import React, { useEffect, useState } from "react";
import HeaderComponent from "./Components/HeaderComponent/Header";
import ProfileComponent from "./Components/ProfileComponent";
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  function onSearch(text) {
    setUsername(text);
  }
  useEffect(() => {
    async function fetchData() {
      const token = "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";
      const api = `https://api.github.com/users/${username}`;
      const response = await fetch(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      const jsonData =await response.json()
      return jsonData
    }
    fetchData().then((jsonData) =>{
      console.log (jsonData)
      setData(jsonData)
    } )
  }, [username]);
  return (
    <div className="bolt">
      <div className="head">
      <HeaderComponent onSearch={onSearch} />
      </div>
      <div className="date">
      <ProfileComponent data={data} />
      </div>
    </div>
  );
}

export default App;
