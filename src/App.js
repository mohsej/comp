import ProfilePhoto from "./Components/profile/ProfilePhoto.js";
import FullName from "./Components/profile/FullName.js";
import Address from "./Components/profile/Address.js";
import Nav from "./Components/profile/Navbar.js";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
