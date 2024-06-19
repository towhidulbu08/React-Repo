import React, { useContext } from "react";
import { ThemeContext } from "../../Context/index.js";
import MovieList from "../Cine/MovieList.jsx";
import Footer from "../Footer.jsx";
import Headers from "../Headers.jsx";
import SideBar from "../SideBar.jsx";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full px-8 w-full ${darkMode ? "dark" : ""}`}>
      <Headers></Headers>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar></SideBar>
          <MovieList></MovieList>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Page;
