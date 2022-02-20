import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Feed from "../components/Feed/Feed";
import Widget from "../components/Widget/Widget";
const Home = () => {
  const user = useSelector((state) => state.userData.user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
