import React, { useState } from "react";
import Loading from "./Loading";
import ChatApp from "./ChatApp"; // Your chat interface
import Login from "./Login";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn,setLoggedIn]=useState(false)

  return (
    <div>
      {loading ? ( <Loading onFinish={() => setLoading(false)} />
      ) : !loggedIn ? (
        <Login onLogin={()=>setLoggedIn(true)}/>
      ) : (
      <ChatApp />
    )}
    </div>
  );
}

export default App;