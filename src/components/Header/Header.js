import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
const Header = () => {
  const [headerOption, setHeaderOption] = useState("home");
  const user = useSelector((state) => state.userData.user);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt=""
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="search facebook" />
        </div>
      </div>
      <div className="header__center">
        <div
          className={`header__option ${
            headerOption === "home" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("home")}
        >
          <Home fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "flag" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("flag")}
        >
          <Flag fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "subs" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("subs")}
        >
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "store" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("store")}
        >
          <StorefrontOutlined fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "user" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("user")}
        >
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
