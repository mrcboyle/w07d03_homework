import React from 'react';
import SongItem from "./SongItem";

// We pass in {songs} which is now the api data
const SongsList = ({ songs }) => {

    // we iterate (map) through the songs and return single isntances including passing in the array index
    const songsItems = songs.map((song, index) => {
        return <SongItem key={index} song={song} />
    })

    // we return the songItems from the function above into an ordered list below. That will return a 1-20 for our chart (cheating?)
    return (
        <ol>
            {songsItems}
        </ol>
    )
}

export default SongsList;