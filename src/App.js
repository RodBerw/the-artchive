import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Header from "./components/Header/Header";
import Outro from "./pages/Outro";
import Biography from "./pages/Biography";
import RegisterArtist from "./pages/RegisterArtist";
import NotFound from "./pages/NotFound";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Header />
      <Box h="50px"></Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/artists" Component={Artists} />
        <Route path="/biography/:biographyId" Component={Biography} />
        <Route path="/register" Component={RegisterArtist} />
        <Route path="/outro" Component={Outro} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
