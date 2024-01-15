
import './App.css';
import Mainbanner from "./components/mainbanner/mainbanner";
import Introtext from "./components/introtext/introtext";
import Login from "./components/login/login";
import {Toptracks} from "./components/toptracks/toptracks";
import OptionButtons from "./components/optionbuttons/optionbuttons";
import Songcontainer from "./components/songcontainer/songcontainer";
import {useState} from "react";
import {Playlist} from "./components/playlist/playlist";
import Saveplaylist from "./components/saveplaylist/saveplaylist";
import Simplesearch from "./components/simplesearch/simplesearch";
import Advancedsearch from "./components/advancedsearch/advancedsearch";

const code = new URLSearchParams(window.location.search).get('code')
const state = new URLSearchParams(window.location.search).get('state')

function App() {
  return (
      <div>
      <Mainbanner />
          <Introtext />
          <Login code={code} state={state}/>
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
