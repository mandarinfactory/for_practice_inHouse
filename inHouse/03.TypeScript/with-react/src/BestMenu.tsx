import React from "react";
import { Menu, MenuWithoutPrice } from "./model/restuarant";

interface OwnProps extends MenuWithoutPrice {
  showBestMenuName(name: string): string;
}
const BestMenu: React.FC<OwnProps> = ({
  name,
  category,
  showBestMenuName,
}) => {
  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default BestMenu;
