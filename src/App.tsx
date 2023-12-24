import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Products from "./Products";
import { Book } from "./types/book";
import Main from "./pages/main";
import Search from "./pages/search";
import Header from "./components/common/Header";
import Genre from "./pages/genre";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/:genre" element={<Genre />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
