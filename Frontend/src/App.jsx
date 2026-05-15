import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "./components/feed";
import {Createpost}  from "./components/Createpost";
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-post" element={<Createpost />} />
        <Route path="/posts" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;