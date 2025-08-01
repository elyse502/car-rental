import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
    </>
  );
};

export default App;
