import React from "react";
import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h5>Special</h5>
      <p>
        <small>Gift: {house}</small>
        <button onClick={() => setHouse(house + 1)}>Buy a House</button>
      </p>
    </div>
  );
};

export default Special;
