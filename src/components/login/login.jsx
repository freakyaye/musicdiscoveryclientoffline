import {useEffect, useState} from "react";
import './login.css'
import {Button} from "@nextui-org/react";

export default function Login({code, state}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const data = new URLSearchParams()
        data.append('code', code)
        data.append('state', state)
        if (code !== null) {
            try {
             function sendCode(code, state) {
                 fetch('http://localhost:4000/login', {
                     method: "POST",
                     body: data,
                 })
             }
             setIsLoggedIn(true)
             sendCode(code, state)
        } catch (e) {
            console.error(e)
        }
    }}, [code, state]);

    function login() {
        window.open('http://localhost:4000/login', '_self')
    }

    async function logout() {
        const response = await fetch('http://localhost/logout/')
        if (response.status === 200) {
            setIsLoggedIn(false)
        }
    }

    return (
        <>
            <div className="mainDiv">
                <img
                    className="mb-5 flex self-center"
                    src={require("./spotify logo.png")}
                    width="100"
                />

                {isLoggedIn ?
                    <Button className="bg-yellow-400 mb-1 w-min self-center" onClick={logout}>Logout</Button>
                 :
                    <Button className="bg-yellow-400 mb-1 w-min self-center" onClick={login}>Login</Button>}
            </div>
        </>
    )
}