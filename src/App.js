
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import Login from "./Login";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/Checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
