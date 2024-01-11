import {Image} from "react-bootstrap/"
import './songcontainer.css'
import {useSelector} from "react-redux";
import {Divider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react"
import {Songcard} from '../card/card'

export default function Songcontainer() {

    const songs = useSelector((state => state.mytoptracks.songList))

    if (songs.length === 0) {
        return (
            <>
                <div className="songContainer">
                    <h4 style={{marginTop: "5px", marginBottom: "5px"}} className="">Your Results</h4>
                    <Divider style={{marginTop: "5px"}}/>
                </div>
            </>
        )
    } else {


        function cardIndex() {
            return crypto.randomUUID()
        }

        return (
            <>
                <div className="songContainer">
                    <h4 style={{marginTop: "5px", marginBottom: "5px"}} className="">Your Results</h4>
                <Divider style={{marginTop: "5px"}}/>
                {songs[0].map((songs, index) => {
                    return <Songcard
                        contect={'searchResult'} cardIndex={cardIndex()} trackId={songs.trackId} uri={songs.uri}
                        artwork={songs.artwork} trackName={songs.trackName} albumName={songs.albumName}
                        artistName={songs.artistName} popularity={songs.popularity} danceability={songs.danceability}
                        energy={songs.danceability} tempo={songs.tempo} valence={songs.valence} key={index}/>
                })}
            </div>
        </>
    )
    }
}