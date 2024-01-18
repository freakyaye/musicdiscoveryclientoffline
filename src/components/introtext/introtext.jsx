import './introtext.css'

export default function Introtext() {
    return (
        <>
            <div className="mainParagraph">
                <p className="text-center text-lg"><span className="italic">Music Discovery</span> for Spotify lets you grab song recommendations based on your recent top plays.</p>
                <p className="text-center text-lg">You can also search for songs by name, or by song feature i.e. genre, tempo, popularity, danceability etc.</p>
                <p className="text-center text-lg">And of course, you can add your new finds to a playlist and save it for later</p>
                <div className=" flex flex-col pt-3 space-y-2 pl-10">
                    <div className="flex flex-row items-center">
                    <svg aria-label="Info icon" aria-labelledby="info-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                         className="bi bi-info" viewBox="0 0 16 16">
                        <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                        <spam id="info-icon">Click to see a song's features</spam>
                    </div>
                    <div className="flex flex-row items-center">
                    <svg aria-label="Search icon" aria-labelledby="search-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         fill="currentColor"
                         className="bi bi-search-heart" viewBox="0 0 16 16">
                        <path
                            d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                        <path
                            d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                    </svg>
                        <span className="pl-1" id="search-icon">Click to generate song recommendations for this song</span>
                    </div>
                        <div className="flex flex-row items-center">
                    <svg aria-label="Plus icon" aria-labelledby="plus-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         fill="currentColor"
                         className="bi bi-plus" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                            <span id="plus-icon">Click to save this song to your playlist</span>
                        </div>
                </div>
            </div>
        </>
    )
}