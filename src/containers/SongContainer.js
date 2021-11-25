import React, { useEffect, useState } from "react";
import SongList from "../components/SongList.js"

const SongContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(response => response.json())
            .then(data => data.feed.entry)
            .then(songsData => setSongs(songsData))
    }

    return(
        <div>
            <SongList songs={songs} />
        </div>
    )
}

export default SongContainer;
