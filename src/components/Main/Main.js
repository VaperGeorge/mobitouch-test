import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Slider,
  Discography,
  ConcertTours,
  CompositionsList,
  SliderComments
} from "../index";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Slider} />
      <Route path="/discography" component={Discography} />
      <Route path="/concert_tours" component={ConcertTours} />
      <Route path="/compositions_list" component={CompositionsList} />
      <Route path="/slider_comments" component={SliderComments} />
    </Switch>
  </main>
);

export default Main;
