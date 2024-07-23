import "./App.css";
import {  HashRouter, Route, Routes } from "react-router-dom";
import { AccountContextProvider } from "./context/AccountContext";
import Start from "./screens/Start";
import Play from "./screens/Play";
import TicTacToe from "./screens/TicTacToe";
import { SocketContextProvider } from "./context/SocketContext";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <AccountContextProvider>
          <SocketContextProvider>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/play" element={<Play />} />
              <Route path="/ttt" element={<TicTacToe />} />
            </Routes>
          </SocketContextProvider>
        </AccountContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;
