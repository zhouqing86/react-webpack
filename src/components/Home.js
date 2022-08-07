import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectHome } from "./homeSlice";
import Chart from './Chart';

const Home = () => {
  const dispath = useDispatch();
  const home = useSelector(selectHome);

  return (
    <div className="home-container">
      <h1>home</h1>
      <p>count: {home.count}</p>
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(decrement())}>-</button>
      <div style={{width: "500px"}} className="line-chart">
        <Chart />
      </div>
    </div>
  );
};

export default Home;