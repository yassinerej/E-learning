import React, { useState,useCallback  } from 'react';
import axios from "axios";
import { createPopper } from "@popperjs/core";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotificationDropdown = (props) => {
  const id=props.id;
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleNotification = useCallback( 
    (id)=> async(e)=>{
console.log(id);
    await axios.post("http://localhost:5000/admin/notif", {id})
      .then(res => console.log(res.data) ) },[],)  
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i ><FontAwesomeIcon icon={faBell} > </FontAwesomeIcon></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button className=" p-2 ml-2 mr-2 text-black" value={id} onClick={handleNotification(id)}> notif1  </button>

      </div>
    </>
  );
};

export default NotificationDropdown;
