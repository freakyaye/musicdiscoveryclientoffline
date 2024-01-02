export function Toptracks() {

    const response = () => {
        // await fetch('http://localhost:4000/mytoptracks', {
        //     method: "GET"
        // })
        // return response
        window.open('http://localhost:4000/mytoptracks', '_self')

    }

    return (
        <>
            <button onClick={response}>myTopTracks</button>
        <p></p>
        </>
    )
}