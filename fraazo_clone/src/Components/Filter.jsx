import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const [category, setCategory] = useState(initialGenreParams || []);

  const handleGenreChange = (e) => {
    const option = e.target.value;
    // if option present in category ,remove it,
    // else add it on the array
    const newCategory = [...category];

    if (category.includes(option)) {
      // remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  useEffect(() => {
    if (category) {
      const params = {};
      category && (params.type = category);

      setSearchparams({ type: category });
    }
  }, [category, setSearchparams]);
  console.log(category);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          value="Daily Veggies"
          defaultChecked={category.includes("Daily Veggies")}
          onChange={handleGenreChange}
        />
        <label> Daily Veggies</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Exotic Vegetables"
          defaultChecked={category.includes("Exotic Vegetables")}
          onChange={handleGenreChange}
        />
        <label> Exotic Vegetables</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Herbs & Leafies"
          defaultChecked={category.includes("Herbs & Leafies")}
          onChange={handleGenreChange}
        />
        <label>Herbs & Leafies</label>
      </div>
    </div>
  );
};

export default Filter;
