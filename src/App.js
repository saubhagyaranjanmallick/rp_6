
import { Box, Card } from "@mui/material";
import * as React from "react";
import Searchbar from "./Searchbar";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="root">Movieland Industries...</h1>
       
      <Searchbar/>
        <Box sx={{ flexGrow: 1 }}>
          <Card >

          </Card>
        </Box>
      </div>
    </div>
  );
}

export default App;
