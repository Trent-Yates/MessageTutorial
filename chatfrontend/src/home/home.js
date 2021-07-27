import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
    const [username, setusername] = useState("");
    const [roomname, setroomname] = useState("");

    //activate joinRoom function defined on the backend
    const sendData = () => {
        if (username !== "" && roomname !== "") {
            socket.emit("joinRoom", { username, roomname });
            //if empty error message pops up and returns to the same page
            } else {
                alert("Username and Roomname are a must !");
                window.location.reload();
            }
        };
    

    return (
        <div className="homepage">
            <h1>Welcome to ChatBoy5000</h1> 
            {/* Room name must be entered first and in the top order */}
            <input placeholder="Input the room name" value={roomname} onChange={(e) => setroomname(e.target.value)}></input>
            <input placeholder="Input your username" value={username} onChange={(e) => setusername(e.target.value)}></input>
            <Link to={`/chat/${roomname}/${username}`}>
                <button onClick={sendData}>Join</button>
            </Link>
        </div>
    );
};

export default Homepage;