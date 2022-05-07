import "./message.css";
import { useEffect, useState } from "react";
import { format } from "timeago.js";

export default function Message({ user, message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log(user);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        {/* <img
          className="messageImg"
          src={
            user?.profilePicture ? PF + user.profilePicture : PF + "no_pp.jpg"
          }
          alt=""
        /> */}
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
