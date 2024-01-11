import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addSongs} from "../songcontainer/songcontainerSlice";
import './optionbuttons.css'
import {Button, ButtonGroup, Radio, RadioGroup, cn} from "@nextui-org/react";


export default function OptionButtons() {
    const dispatch = useDispatch()
    const [songList, setSongList] = useState([])

    async function myTopTracks() {

        const response = await fetch('http://localhost:4000/mytoptracks', {
            method: "GET"
        })
        const result = await response.json()
        setSongList(result)
        dispatch(addSongs(result))
    }

    return (
        <>
            <div className="flex justify-center mb-5">
            <RadioGroup
            size='lg'
            orientation="horizontal"
            >
                <Radio size='lg' value="My Top Tracks" onChange={myTopTracks}>My Top Tracks</Radio>
            <Radio size='lg' value="Simple Search" >Simple Search</Radio>
                <Radio size='lg' value="Advanced Search" >Advanced Search</Radio>
            </RadioGroup>
            </div>
        </>
    )
}