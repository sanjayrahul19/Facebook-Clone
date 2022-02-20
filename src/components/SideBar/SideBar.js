import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import SideBarRow from "../sideBarRow/SideBarRow";
const SideBar = () => {
  const user = useSelector((state) => state.userData.user);
  return (
    <div className="sidebar">
      <SideBarRow title={user.displayName} src={user.photoURL} />
      <SideBarRow title="COVID-19 Infromation Center" Icon={LocalHospital} />
      <SideBarRow title="Pages" Icon={EmojiFlags} />
      <SideBarRow title="Friends" Icon={People} />
      <SideBarRow title="Messenger" Icon={Chat} />
      <SideBarRow title="Marketplace" Icon={Storefront} />
      <SideBarRow title="Videos" Icon={VideoLibrary} />
      <SideBarRow title="More Items" Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default SideBar;
