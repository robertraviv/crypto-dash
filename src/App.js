import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Hompage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@mui/styles";

function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
    },
  });

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
