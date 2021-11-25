import React from "react";
import Song from "./Song.js";
import "./static/SongList.css";

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <Song song={song} id={index} />
    })

    return(
        <div>
            <h1 id="title">UK Top 20 Songs</h1>
            <h3 id="sub-title">By iTunes</h3>
            <ul className="song-list">
                {songItems}
            </ul>
        </div>
    )
}

export default SongList;
