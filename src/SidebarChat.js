import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import {
  collection,
  addDoc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  useEffect(() => {
    if (id) {
      const roomDoc = collection(db, `rooms/${id}/messages`);
      const q = query(roomDoc, orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [id]);
  const createChat = async () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      await addDoc(collection(db, "rooms"), {
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
