import {Button, Card, CardBody, CardHeader, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Image} from "react-bootstrap"

export default function Hardcard() {
    const context = 'playlist'
    return (
        <>
            <div>
            <Card>
                <CardHeader>
                    <Image
                        className=""
                        alt="album artwork"
                        src={require("./testlogo.png")}
                        width={150}
                    />
                </CardHeader>
                <CardBody>
                    <div className="-mt-3 pb-1">
                    <h3>trackname</h3>
                    <h6>albumname</h6>
                    <h6>artistname</h6>
                    </div>
                    <div>
                        <Popover placement="right">
                            <PopoverTrigger>
                                <Button className={"mx-1"} isIconOnly aria-label="Click for song metadata">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-info" viewBox="0 0 16 16">
                                        <path
                                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                    </svg>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div>
                                    <ul style={{paddingLeft: "10px"}}>
                                        <li>
                                            Populatiry: 90
                                        </li>
                                        <li>
                                            Danceability: 90
                                        </li>
                                        <li>
                                            Energy: 90
                                        </li>
                                        <li>
                                            Valence: 90
                                        </li>
                                        <li>
                                            Tempo: 90
                                        </li>
                                    </ul>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button className={"mx-1"}  isIconOnly aria-label="Get Recommendations">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                 fill="currentColor"
                                 className="bi bi-search-heart" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                                <path
                                    d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
                            </svg>
                        </Button>
                        {
                            context === 'playlist' ? <Button className={"mx-1"} isIconOnly  aria-label="Remove from Playlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                    </svg>
                                </Button> :
                                <Button className={"mx-1"} isIconOnly  aria-label="Save to Playlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                         fill="currentColor"
                                         className="bi bi-plus" viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                </Button>
                        }
                            <div className="p-5 ml-8">
                            <Image
                                style={{cursor: "pointer"}}
                                className="inline-block"
                                alt="Play in Spotify"
                                src={require("./smallLogo.png")}
                                width={38}
                                height={38}
                            />
                            </div>
                    </div>
                </CardBody>
            </Card>
            </div>
        </>
    )
}