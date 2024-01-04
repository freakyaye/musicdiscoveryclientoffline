import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {useEffect, useState} from "react";


export default function OptionButtons() {

    const [songList, setSongList] = useState([])

    async function myTopTracks() {
        const response = await fetch('http://localhost:4000/mytoptracks', {
            method: "GET"
        })
        const result = await response.json()
        setSongList(result)
    }

    useEffect(() => {
        console.log(songList)
    }, [songList]);

    function testRoute() {
        window.open('http://localhost:4000/testroute', '_self')
    }

    return (
        <>
            <ToggleButtonGroup type="radio" name="song search options">
                <ToggleButton id="tbg-radio-1" value={1} onChange={myTopTracks}>
                    My Top Tracks
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                    Simple Search
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                    Advanced Search
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4} onChange={testRoute}>
                    Test Route
                </ToggleButton>
            </ToggleButtonGroup>

        </>
    )
}