import { FC, useEffect } from "react";
import { WatchYoutube } from "../components/WatchYoutube";
import { SelectGender } from "../components/SelectGender";
import { PizzaBuilder } from "../components/PizzaBuilder";

export const Home: FC = () => {
  useEffect(() => {
    document.title = "Dashboard - Mini admin";
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3">
          <SelectGender />
        </div>
        <div className="col-md-6 mb-3">
          <PizzaBuilder />
        </div>
        <div className="col-md-6 mb-3">
          <WatchYoutube />
        </div>
      </div>
    </>
  );
};
