
import './App.css';
import Mainbanner from "./components/mainbanner/mainbanner";
import Introtext from "./components/introtext/introtext";
import Login from "./components/login/login";
import {Toptracks} from "./components/toptracks/toptracks";


function App() {
  return (
      <div>
      <Mainbanner />
          <Introtext />
          <Login />
          <Toptracks />

      </div>
  );
}

export default App;
