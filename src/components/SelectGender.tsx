import { FC, useState } from "react";

const genderOptions = ["Male", "Female", "Others", "Helicopter"];

export const SelectGender: FC = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h3>Please select your gender</h3>

        <div className="mb-3">
          {genderOptions.map((label) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id={`gender-${label}`}
                checked={gender === label}
                onChange={() => setGender(label)}
                disabled={label === "Helicopter"}
              />
              <label className="form-check-label" htmlFor={`gender-${label}`}>
                {label}
              </label>
            </div>
          ))}
        </div>

        {gender === "Male" && (
          <span className="text-primary">You identified as Male</span>
        )}
        {gender === "Female" && (
          <span className="text-danger">You identified as Female</span>
        )}
        {gender === "Others" && <span>You identified as Others</span>}
        {gender === "" && (
          <span className="fst-italic">Please choose an option</span>
        )}
      </div>
    </div>
  );
};
