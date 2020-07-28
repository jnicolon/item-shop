import React from "react";

export default function filteredItems(pageType, arrayOfItems, buyItem) {
  const filteredItems = arrayOfItems.filter(
    (key) => `/${key.fields.type}` === pageType
  );

  const renderItems = filteredItems.map((item) => {
    return (
      <div className="single-item" key={item.fields.id}>
        <img src={item.fields.image.fields.file.url} alt={item.fields.id} />
        <p>{item.fields.itemName}</p>
        <p>{item.fields.price} gold</p>
        <button onClick={() => buyItem(item.fields.price)}>Buy</button>
      </div>
    );
  });

  return renderItems;
}
