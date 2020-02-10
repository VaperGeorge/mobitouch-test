import React from "react";
import "./App.css";
import {
  Header,
  Slider,
  Discography,
  ConcertTours,
  CompositionsList,
  SliderComments
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Discography />
      <ConcertTours />
      <CompositionsList />
      <SliderComments />
    </div>
  );
}

export default App;
