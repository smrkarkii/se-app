// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import PostState from "./context/post/PostState";
import PageContent from "./components/PageContent";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <PostState>
        <Router>
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={<PageContent />} />
          </Routes>
        </Router>
      </PostState>
    </>
  );
}
