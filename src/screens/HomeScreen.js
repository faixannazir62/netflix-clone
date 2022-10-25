import React, { useState, useEffect } from "react";
import Row from "../Row";
import requests from "../requests";
import Banner from "../Banner";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";

function HomeScreen({ user, setUser }) {
  const Navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      Navigate("/");
    }
  }, []);
  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
