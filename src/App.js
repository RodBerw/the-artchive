import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Outro from "./pages/Outro";
import NotFound from "./pages/NotFound";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Header />
      <Box h="50px"></Box>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/outro" Component={Outro} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
