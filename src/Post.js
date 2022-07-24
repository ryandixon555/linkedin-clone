import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { ChatOutlined, ShareOutlined } from "@material-ui/icons";
import SendIcon from "@mui/icons-material/Send";

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" />

        <InputOption Icon={ChatOutlined} title="Comment" />

        <InputOption Icon={ShareOutlined} title="Share" />

        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}
