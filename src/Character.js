import React from "react";

function Character(props) {
  return (
    <div>
      {props.items
        .filter(
          item1 => item1.id === parseInt(window.location.search.substr(1), 10)
        )
        .map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.status}</p>
            <p>{item.species}</p>
            <p>{item.gender}</p>
            <p>{item.origin.name}</p>
          </div>
        ))}
      {/* <h2>{props.items[0].name}</h2> */}
    </div>
  );
}

export default Character;
