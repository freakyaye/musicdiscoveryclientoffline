import {Button, Input} from '@nextui-org/react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addSongs} from "../songcontainer/songcontainerSlice";
export default function Simplesearch() {

    const option = useSelector(state => state.optionbuttons.chosenOption)
    const [visible, setVisible] = useState(false)
    const [textArea, setTextArea] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (option === 'simpleSearch') {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [option]);
    async function search() {
        if (!validateSong()) {
            const shortString = firstFifty()
            const urlParams = new URLSearchParams({song: shortString})
          const response = await fetch(`/songsearch?` + urlParams)
            if (response.status === 200) {
            const data = await response.json()
            dispatch(addSongs(data))
        } else {
                if (response.status === 204) {
                    alert('No tracks found')
                } else if (response.status === 403) {
                    alert('Please log in')
                }
        }
        }
    }

    function firstFifty() {
        const shortString = textArea.slice(0, 50)
        return shortString
    }

    function validateSong() {
        if (textArea === null || textArea === undefined || textArea === '') {
            alert('Add a song title')
            return false
        }
    }

    if (visible === false) {
        return (
            <>
            </>
        )
    } else {

    return (
        <>
            <div className="flex justify-center mb-3">
                <Input onChange={e => setTextArea(e.target.value)} type="" label="Enter song title" className="max-w-80"/>
                <Button className="bg-yellow-400 text-lg" isDisabled={textArea.trim() === ''} onPress={search}>Search</Button>
            </div>
        </>
    )
}}