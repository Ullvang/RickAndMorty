import React from "react";
import Header from "./Header";
import Card from "./Card";

function AllCharacters(props) {
  return (
    <div>
      <Header />
      {props.items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AllCharacters;
