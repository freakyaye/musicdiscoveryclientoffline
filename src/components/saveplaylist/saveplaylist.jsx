import {accordionItem, button, Button, Textarea} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {returnSongs} from "../playlist/playlistSlice";


export default function Saveplaylist() {
const [textArea, setTextArea] = useState('')
    const songs = useSelector(state => (state.playlist.songList))

    const pressHandler = async () => {
        const songsToAdd = songs.map(item => item.uri)
        const response = await fetch('http://localhost:4000/saveplaylist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playlistName: textArea,
                songsToAdd: songsToAdd,
            })
        })
        if (response.status === 200) {
            alert('Playlist saved successfully')
        }
    }

    function logState() {

    }

    return (
        <>
            <div className="flex justify-center mb-3">
                <Textarea
                    className="max-w-80"
                maxRows={1}
                label="Playlist name"
                placeholder="Enter a name for your playlist"
                    onChange={(e) => setTextArea(e.target.value)}
                >
                </Textarea>
                <Button className="bg-yellow-400 text-lg" isDisabled={textArea.trim() === ''} onPress={pressHandler}>Save Playlist</Button>
                <Button className="bg-yellow-400 text-lg" onPress={logState}>log state</Button>
            </div>

        </>
    )
}