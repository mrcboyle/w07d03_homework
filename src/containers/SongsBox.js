import React, { useState, useEffect } from 'react';
import SongsList from "../components/SongsList";

const SongsBox = () => {

    // The purpose of the useState is still something that confuses me. Will read the weeks nots for the nth time to see if it finally sinks in
    const [songs, setSongs] = useState([]);

    // I've popped the useEffect in below to ensure the list runs when first launched.
    useEffect(() => {
        getSongs();
    }, []);

    // Time to fetch the data from the iTunes api.
    // Line 19 is the path to the obkect we want to return from the apple api - feed.entry takes us to just above the useful data (I think).
    // The result of that (setSongs) is then passed back up to line 6
    const getSongs = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(response => response.json())
            .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <>
            <h1>iTunes Top 20</h1>
            <SongsList songs={songs} />
        </>
    )
}

export default SongsBox;