"use client"


import { useEffect, useState } from "react";

const Client = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  },[])
  return (
    <div>
      <h1>Client</h1>
      <h1>{JSON.stringify(user)}</h1>
      
    </div>
  );
};

export default Client;