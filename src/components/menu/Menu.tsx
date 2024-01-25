import React from "react";
import Item from "./Item";

const items: string[] = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];
const itemsWithArrows: string[] = ["Woman's Fashion", "Men's Fashion"];

const Menu = () => {
  return (
    <aside className="min-w-[278px] pt-8 border-r">
      <nav>
        <ul>
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                index={index}
                item={item}
                hasArrow={itemsWithArrows.includes(item)}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
