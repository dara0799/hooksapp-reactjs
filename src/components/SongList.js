import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';
const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Carry That Weight', id: 1 },
        { title: 'Sweet Child O Mine', id: 2 },
        { title: 'Bring Me to Life', id: 3 }
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title, id: v4() }]);
    }
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs])
    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age])
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
        </div>
    );
}

export default SongList;