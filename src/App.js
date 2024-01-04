
import './App.css';
import Mainbanner from "./components/mainbanner/mainbanner";
import Introtext from "./components/introtext/introtext";
import Login from "./components/login/login";
import {Toptracks} from "./components/toptracks/toptracks";
import OptionButtons from "./components/optionbuttons/optionbuttons";
import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get('code')
const state = new URLSearchParams(window.location.search).get('state')

function App() {
  return (
      <div>
      <Mainbanner />
          <Introtext />
          <Login code={code} state={state}/>
          <OptionButtons />
      </div>
  );
}

export default App;
