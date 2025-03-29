import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 3000); // Change duration as needed
  }, [onFinish]);

  return (
    <div className="loading-container">
      <img src="/images/logo.jpg" alt="App Logo" className="loading-logo" />
      <h1 className="loading-text">Chat App</h1>
    </div>
  );
};

export default Loading;