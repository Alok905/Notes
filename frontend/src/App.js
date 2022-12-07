import { Box } from "@mui/system";
import "./App.css";
import HamburgerDrawer from "./components/Drawer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Box>
        <NavBar />
        <HamburgerDrawer />
      </Box>
    </div>
  );
}

export default App;
