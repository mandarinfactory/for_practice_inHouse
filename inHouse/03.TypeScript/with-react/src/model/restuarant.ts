export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type RestaurantOnlyName = Pick<Restaurant, "name">;

export type Address = {
  city: string;
  detail: string;
  zipCode?: number;
};
export type AddressWithoutZip = Omit<Address, "zipCode">;

export type Menu = {
    name: string;
    price: number;
    category: string;
};

export type MenuWithoutPrice = Omit<Menu, "price">;

export type ApiResponse<theType> = {
    data:theType[],
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>