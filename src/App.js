import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
