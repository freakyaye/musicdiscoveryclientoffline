import {useState} from "react";

export default function Login() {
const [loggedIn, setLoggedIn] = useState(false)
    function login() {
    //     try {
    //     await fetch('http://localhost:4000/login', {
    //         method: "GET"
    //     }).then((response) => {
    //         window.open((response))
    //     })
    // } catch (error) {
    //     console.error(error)

        window.open('http://localhost:4000/login', '_self')
        // if (window !== null) {
        //     setLoggedIn(true)
        // }
    }

    function logout() {
        window.open('http://localhost:4000/logout', '_self')
    }


    return (
        <>
            <button onClick={login}>Login</button>
            {/*{loggedIn ? ({<button onClick={logout}>Logout</button>}) :() }*/}
            <button onClick={logout}>Logout</button>
        </>
    )
}