import React, { useState } from "react";

const stories = [
  {
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    url: "https://react.dev/",
    image: "https://picsum.photos/201",
    num_comments: 100,
  },
  {
    title: "Foxpro",
    description: "Foxpro is a programming language.",
    url: "https://react.dev/",
    image: "https://picsum.photos/210",
    num_comments: 120,
  },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const updatedNumbers = numbers.map((number) => {
  return <li>{number}</li>;
});

// List component to render the list of stories
function List({ list }) {
  const [count, setCount] = useState(26);
  return (
    <ul>
      {list.map((item) => (
        <li key={item.title}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} />
          <p>{item.num_comments}</p>
          <p>{count}</p>
        </li>
      ))}
    </ul>
  );
}

function CenterMessage() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Sample Story</h1>
      <h2>{updatedNumbers}</h2>
      <label htmlFor="search">Search :</label>
      <input type="text" id="search" onChange={handleChange} />
      <hr />
      {/* Rendering List component with stories passed as props */}
      <List list={stories} />
    </div>
  );
}

export default CenterMessage;
