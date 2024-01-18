import React from "react";
import { Address, Restaurant } from "./model/restuarant";

interface OwnProps {
  data: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ data }) => {
  return (
    <>
      <div>{data.name}</div>
      <div>{data.category}</div>
      <div>{data.address.city}</div>
    </>
  );
};

export default Store;
