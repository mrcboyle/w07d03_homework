import React from 'react';

// the individual {song} from the api are passin in here
const SongItem = ({ song }) => {

    // our return drills into the song object which is refined by using the iTunes api keys to select the required data
    return (
        <>
            <li><span>{song["im:name"]["label"]}</span> | <span>{song["im:artist"]["label"]}</span></li>
        </>
    )
}

export default SongItem;