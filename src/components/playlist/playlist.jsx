import './playlist.css'
import {Button, Divider, Modal} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {Songcard} from "../card/card";
import {useState} from "react";


export function Playlist() {

    const [playlistTitle, setPlaylistTitle] = useState("Your Playlist")
    const songs = useSelector(state => state.playlist.songList)

    if (songs.length !== 0) {

        return (
            <>
                <div className="playlistMainDiv">
                    <h4 style={{marginTop: "5px", marginBottom: "5px"}} className="self-center">{playlistTitle}</h4>
                    <Divider style={{marginTop: "5px"}}/>
                    {songs.map((songs, index) => {
                        return <Songcard
                            context={'playlist'} cardIndex={songs.index} artwork={songs.artwork}
                            trackName={songs.trackName} albumName={songs.albumName}
                            artistName={songs.artistName} popularity={songs.popularity}
                            danceability={songs.danceability}
                            energy={songs.danceability} tempo={songs.tempo} valence={songs.valence} key={index}/>
                    })}
                </div>
                </>
        )

    } else {

        return (
            <>
                <div className="playlistMainDiv">
                    <h4 style={{marginTop: "5px", marginBottom: "5px"}} className="self-center">{playlistTitle}</h4>
                <Divider style={{marginTop: "5px"}}/>
            </div>
        </>
    )
    }
}