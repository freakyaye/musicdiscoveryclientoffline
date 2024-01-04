import {useEffect, useState} from "react";

export default function Login({code, state}) {
// const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        console.log(code)
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
             sendCode(code, state)
        } catch (e) {
            console.error(e)
        }
    }}, [code, state]);

    function login() {
        window.open('http://localhost:4000/login', '_self')
    }

    function logout() {
        window.open('http://localhost:4000/logout', '_self')
    }

    return (
        <>
            <button onClick={login}>Login</button>
            {/*{loggedIn ? ({<button onClick={logout}>Logout</button>}) :() }*/}
            <button onClick={logout}>Logout</button>
            <p>{code}</p>
            <p>{state}</p>
        </>
    )
}