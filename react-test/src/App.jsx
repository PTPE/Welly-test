import { useState } from "react";
import ConditionalRendering from "./ConditionalRendering";
import Count from "./Count";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogIn() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <>
      <Count />

      <div className="login">
        <button onClick={handleLogIn}>Log In/Out</button>
        <ConditionalRendering isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}

export default App;
