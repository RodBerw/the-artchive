import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists"
import Header from "./components/Header/Header";
import Outro from "./pages/Outro";
import NotFound from "./pages/NotFound";
import { Box } from "@chakra-ui/react";
import ArtistsDB from "./components/Artists/artistsDB.json";

function App() {
  return (
    <Router>
      <Header />
      <Box h="50px"></Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/artists" Component={Artists}/>
        <Route path="/outro" Component={Outro} />
        <Route path="/artistsDB" Component={ArtistsDB} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
