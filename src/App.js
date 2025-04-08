import React, { useState } from "react";
import Loading from "./Loading";
import ChatApp from "./ChatApp";
import Login from "./Login";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn,setLoggedIn]=useState(false)
  const [username, setUsername] = useState("");

  return (
    <div>
      {loading ? ( <Loading onFinish={() => setLoading(false)} />
      ) : !loggedIn ? (
        <Login onLogin={({username})=>{
          setUsername(username)
          setLoggedIn(true)
        }}/>
      ) : (
      <ChatApp username={username}/>
    )}
    </div>
  );
}

export default App;
