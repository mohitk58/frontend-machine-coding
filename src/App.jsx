import { useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Citrus Fruits",
    children: [
      { id: 11, name: "Orange" },
      { id: 12, name: "Lemon" },
      { id: 13, name: "Grapefruit" },
    ],
  },
  {
    id: 2,
    name: "Berries",
    children: [
      {
        id: 21,
        name: "Strawberry",
      },
      {
        id: 22,
        name: "Blueberry",
      },
      {
        id: 23,
        name: "Raspberry",
      },
    ],
  },
  {
    id: 3,
    name: "Tropical Fruits",
    children: [
      {
        id: 31,
        name: "Mango",
        children: [
          { id: 311, name: "Alphonso" },
          { id: 312, name: "Kesar" },
        ],
      },
      {
        id: 32,
        name: "Pineapple",
      },
      {
        id: 33,
        name: "Banana",
      },
    ],
  },
  {
    id: 4,
    name: "Stone Fruits",
    children: [
      { id: 41, name: "Peach" },
      { id: 42, name: "Plum" },
      { id: 43, name: "Cherry" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      // if children are present, add all of them to new state

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(node);

      // if all children are checked, mark the parent as checked

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkboxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h3>Nested Checkboxes!!</h3>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}

export default App;
