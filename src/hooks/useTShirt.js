import { useEffect } from "react";
import { useState } from "react";

const useTShirts = () => {
  const [tShirts, setTShirts] = useState([]);

  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTShirts(data));
  }, []);
  return [tShirts, setTShirts];
};

export default useTShirts;
