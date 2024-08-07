import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderAction } from "../reducers/order-reducer";
type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderAction>;
};
export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-md"
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
