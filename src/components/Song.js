import React from "react";
import "./static/Song.css";

const Song = ({song, id}) => {

    return(
        <li key={id} className="list-element" style={{ backgroundImage: `url(${song["im:image"][2]["label"]})` }} >
            <div className="list-element-data">
                <h2 className="song-ranking">{id + 1}</h2>
                <p><strong>Title: {song["im:name"]["label"]}</strong></p>
                <p><strong>Artist: {song["im:artist"]["label"]}</strong></p>
                <a href={song["link"][0]["attributes"]["href"]} target="_blank" rel="noreferrer" className="song-link"><strong>iTunes Link</strong></a>
                <p><strong>Song Preview:</strong> </p>
                <audio controls>
                    <source src={song["link"][1]["attributes"]["href"]} />
                </audio>
            </div>
            {/* <div className="list-element-image">
                <img src={song["im:image"][2]["label"]} className="song-image" />
            </div> */}
        </li>
    )

}

export default Song;
