import React from "react";
import Song from "./Song.js";
import "./static/SongList.css";
import AppleLogo from "../AppleLogo.svg";

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <Song song={song} id={index} />
    })

    return(
        <div>
            <nav id="menu-bar">
                <div id="logo-title">
                    <img src={AppleLogo} alt="Apple Logo" height="65px" width="65px" id="logo" />
                    <h1 id="title">Music</h1>
                </div>
                <hr />
            </nav>
            <h2 id="sub-title">UK Top 20</h2>
            <ul className="song-list">
                {songItems}
            </ul>
        </div>
    )
}

export default SongList;
