import React, { useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext } from "react";

/* 
context api
1. call createContext with a default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places
4. Wrap you child content using RingContext.Provider
5. Provide a value
6. to consume the context from child component
7. useContext hook and you will you need to pass the contextName
8. Make sure you take notes... 
*/

export const RingContext = createContext("Ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h3>Grand Pa</h3>
        <button onClick={handleBuyAHouse}>Buy A House</button>
        <p>House: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
