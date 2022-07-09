import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  /*  <GlobalProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
         
      
        </Routes>
      </Router>
    </GlobalProvider> */

  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/search" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
