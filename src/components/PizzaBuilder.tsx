import { ChangeEvent, FC, useState } from "react";

const toppings = [
  { label: "Pepperoni", value: "pepperoni" },
  { label: "Mushrooms", value: "mushrooms" },
  { label: "Onions", value: "onions" },
  { label: "Cheese", value: "cheese" },
  { label: "Sausage", value: "sausage" },
  { label: "Bacon", value: "bacon" },
];

export const PizzaBuilder: FC = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    return toppings.reduce(
      (acc, val) => {
        acc[val.value] = false;
        return acc;
      },
      {} as { [key: string]: boolean },
    );
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };

  const selectedToppings = toppings.filter((top) => checkedItems[top.value]);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Choose what to add to your pizza</h3>

        <div className="mb-3">
          {toppings.map((top) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name={top.value}
                id={`checkbox-${top.value}`}
                checked={checkedItems[top.value]}
                onChange={handleCheckboxChange}
                disabled={top.value === "cheese"}
              />
              <label
                className="form-check-label"
                htmlFor={`checkbox-${top.value}`}
              >
                {top.label}{" "}
                {top.value === "cheese" && (
                  <span className="fst-italic">(We're out of cheese!)</span>
                )}
              </label>
            </div>
          ))}
        </div>

        {selectedToppings.length === 0 && (
          <span className="text-danger">
            We're gonna need some toppings for our pizza!
          </span>
        )}
        {selectedToppings.length > 0 && (
          <span>
            Looks like we're having{" "}
            {selectedToppings.map((top) => top.label).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};
