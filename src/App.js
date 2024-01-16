
import './App.css';
import Mainbanner from "./components/mainbanner/mainbanner";
import Introtext from "./components/introtext/introtext";
import Login from "./components/login/login";
import OptionButtons from "./components/optionbuttons/optionbuttons";
import Songcontainer from "./components/songcontainer/songcontainer";
import {Playlist} from "./components/playlist/playlist";
import Saveplaylist from "./components/saveplaylist/saveplaylist";
import Simplesearch from "./components/simplesearch/simplesearch";
import Advancedsearch from "./components/advancedsearch/advancedsearch";

const loggedIn = new URLSearchParams(window.location.search).get('loggedin')

function App() {
    console.log(loggedIn)
  return (
      <div>
      <Mainbanner />
          <Introtext />
          <Login loginValue={loggedIn}/>
          <OptionButtons />
          <Simplesearch />
          <Advancedsearch />
          <Songcontainer />
          <Playlist />
          <Saveplaylist />
      </div>
  );
}

export default App;
