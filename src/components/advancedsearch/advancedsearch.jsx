import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {addSongs} from "../songcontainer/songcontainerSlice";


export default function Advancedsearch() {
    const option = useSelector(state => state.optionbuttons.chosenOption)
    const [visible, setVisible] = useState(false)
    const [popularity, setPopularity] = useState(null)
    const [energy, setEnergy] = useState(null)
    const [valence, setValence] = useState(null)
    const [danceability, setDanceavility] = useState(null)
    const [tempo, setTempo] = useState(null)
    const [genreChoice, setGenre] = useState('acoustic')
    const genre = ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music"]
    const dispatch = useDispatch()

    useEffect(() => {
        if (option === 'advancedSearch') {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [option]);

    function buildSearchObject() {
        const urlParams = new URLSearchParams()
        urlParams.append('genreChoice', genreChoice)
        if (popularity !== null && popularity !== undefined && popularity !== '') {
            urlParams.append('popularity', popularity)
        }
        if (energy !== null && energy !== undefined && energy !== '') {
            urlParams.append('energy', energy)
        }
        if (tempo !== null && tempo !== undefined && tempo !== '') {
            urlParams.append('tempo', tempo)
        }
        if (valence !== null && valence !== undefined && valence !== '') {
            urlParams.append('valence', valence)
        }
        if (danceability !== null && danceability !== undefined && danceability !== '') {
            urlParams.append('danceability', danceability)
        }
        return urlParams
    }

    async function search() {
        if (valueCheck()) {
            const urlParams = buildSearchObject()
            // console.log(urlParams.toString())
            const response = await fetch('http://localhost:4000/advancedsearch?' + urlParams)
            const data = await response.json()
            dispatch(addSongs(data))
        }
    }


    function valueCheck() {
        if (popularity === '') {
            setPopularity( null)
        }
        if (energy === '') {
            setEnergy( null)
        }
        if (tempo === '') {
            setTempo( null)
        }
        if (valence === '') {
            setValence( null)
        }
        if (danceability === '') {
            setDanceavility( null)
        }
        // if (popularity >= 0 && popularity <= 100 && popularity !== null &&
        //     energy >= 0 && energy <= 100 && energy !== null &&
        //     tempo >= 0 && tempo <= 250 && tempo !== null &&
        //     valence >= 0 && valence <= 100 && valence !== null &&
        //     danceability >= 0 && danceability <= 100 && danceability !== null
        // )

        if (popularity !== null && popularity <= 0 && popularity >= 100) {
            alert('Check your value for populairty, it should be between 0 and 100')
            return false
        } else if (energy !== null && energy <= 0 && energy >= 100) {
            alert('Check your value for energy, it should be between 0 and 100')
            return false
        }
        else if (tempo !== null && tempo <= 0 && tempo >= 100) {
            alert('Check your value for tempo, it should be between 0 and 100')
            return false
        }
        else if (danceability !== null && danceability <= 0 && danceability >= 100) {
            alert('Check your value for danceability, it should be between 0 and 100')
            return false
        }
        else if (valence !== null && valence <= 0 && valence >= 100) {
            alert('Check your value for valence, it should be between 0 and 100')
            return false
        }

            // console.log(popularity)
            // console.log(energy)
            // console.log(tempo)
            // console.log(valence)
            // console.log(danceability)
            // console.log(genreChoice)
            return true
        }


    if (visible === false) {
        return (
            <>
            </>
        )
    } else {

        return (
            <>
                <div className="flex flex-col mb-3">
                    {<select onChange={e => setGenre(e.currentTarget.value)} className="max-w-80 mb-1 self-center rounded border border-slate-300" name="Genre" id="Genre">
                        {genre.map(e => {
                            return <option key={e} value={`${e}`}>{e}</option>
                        })}
                    </select>}
                    <Input type="number" placeholder="0-100" label="Popularity" className="max-w-80 mb-1 self-center" onChange={((e) => setPopularity(e.target.value))}/>
                    <Input type="number" placeholder="0-100" label="Energy" className="max-w-80 mb-1 self-center" onChange={e => {setEnergy(e.target.value)}}/>
                    <Input type="number" placeholder="0-100" label="Danceability" className="max-w-80 mb-1 self-center" onChange={e => setDanceavility(e.target.value)}/>
                    <Input type="number" placeholder="0-250" label="Tempo" className="max-w-80 mb-1 self-center" onChange={e => setTempo(e.target.value)}/>
                    <Input type="number" placeholder="0-100" label="Valence" className="max-w-80 mb-1 self-center" onChange={e => setValence(e.target.value)}/>
                    <Button className="bg-yellow-400 text-lg w-min self-center"
                            onPress={search}>Search</Button>
                </div>
            </>
        )
    }
}