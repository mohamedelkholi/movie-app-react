import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./components/Details";
import { Header } from "./components/Header";
import { TrendingList } from "./components/TrendingList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TrendingList />} />
          <Route path="/details/:mediaType/:itemId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
