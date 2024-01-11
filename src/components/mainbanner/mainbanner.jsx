import {Image} from "@nextui-org/react"
import './mainbanner.css'

export default function Mainbanner() {
    return (
        <>
        <div className="mainImage">
        <img src={require("./logo_edited_light.jpg")}
            alt="main title"
            />
        </div>
        </>
    )
}

