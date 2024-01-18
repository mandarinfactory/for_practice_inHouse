import { useState } from "react";

import "./App.css";
import Store from "./Store";

import { Address, Restaurant } from "./model/restuarant";

let data: Restaurant = { 
  name: "restuarant",
  category: "western",
  address: {
    city: "bucheon",
    detail: "bucheon",
    zipCode: 56487512,
  },
  menu: [
    {
      name: "chicken",
      price: 18000,
      category: "western",
    },
    {
      name: "pizza",
      price: 12000,
      category: "western",
    },
    {
      name: "hamburger",
      price: 8000,
      category: "western",
    },
  ],
};

const App: React.FC = () => {
  const [myRestuarant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestuarant, address:address});
  }
  return (
    <>
      <Store data={myRestuarant} changeAddress={changeAddress}/>
    </>
  );
};

export default App;
 