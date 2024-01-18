import background from './musicdiscoveryv2.jpg'
import './mainbanner.css'

export default function Mainbanner() {
    return (
        <>
        <div className="mainImage flex-auto" style={{backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <p className="pb-5 text-7xl text-amber-600 bg-myOffWhite/30 font-bold italic self-end text-center">Music Discovery</p>
        </div>
        </>
    )
}

