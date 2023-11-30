import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Artists from "./pages/Artists";
import Biography from "./pages/Biography";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Outro from "./pages/Outro";
import RegisterArtist from "./pages/RegisterArtist";

function App() {
  return (
    <Router>
      <Header />
      <Box h="50px"></Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/artists" Component={Artists} />
        <Route path="/biography/:_id" Component={Biography} />
        <Route path="/register" Component={RegisterArtist} />
        <Route path="/outro" Component={Outro} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
