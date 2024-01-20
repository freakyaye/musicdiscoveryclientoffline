import {useEffect, useState} from "react";
import './login.css'
import {Button} from "@nextui-org/react";

export default function Login({loginValue}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (loginValue === 'yes') {
            setIsLoggedIn(true)
    }}, [loginValue]);

    function login() {
        window.open('/login', '_self')
    }

    async function logout() {
        const response = await fetch('/logout/')
        if (response.status === 200) {
            setIsLoggedIn(false)
            window.open('/', '_self')
        }
    }

    return (
        <>
            <div className="mainDiv">
                <img
                    className="mb-5 flex self-center"
                    src={require("./spotify logo.png")}
                    width="100"
                    alt="Spotify logo"
                />

                {isLoggedIn ?
                    <Button className="bg-yellow-400 mb-1 w-min self-center" onClick={logout}>Logout</Button>
                 :
                    <Button className="bg-yellow-400 mb-1 w-min self-center" onClick={login}>Login</Button>}
            </div>
        </>
    )
}