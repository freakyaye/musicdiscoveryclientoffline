import {Button, Input} from '@nextui-org/react'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
export default function Simplesearch() {

    const option = useSelector(state => state.optionbuttons.chosenOption)
    const [visible, setVisible] = useState(false)
    const [textArea, setTextArea] = useState('')

    useEffect(() => {
        if (option === 'simpleSearch') {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [option]);
    function search() {

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
                <Input type="" label="Enter song title" className="max-w-80"/>
                <Button className="bg-yellow-400 text-lg" isDisabled={textArea.trim() === ''} onPress={search}>Search</Button>
            </div>
        </>
    )
}}