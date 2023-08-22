import "./App.css";
import { ChakraProvider } from "@chakra-ui/react"
import Home from "./pages/Home";
import Header from "./components/Header/Header";


function App() {
  return (
    <ChakraProvider>
        <Header />
        <Home />
    </ChakraProvider>
  );
}

export default App;
