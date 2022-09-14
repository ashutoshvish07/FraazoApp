import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Input,
} from "@chakra-ui/react";
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
    <Accordion allowMultiple w={"90%"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Vegitables
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Box>
            <Checkbox
              type="checkbox"
              colorScheme="green"
              value="Daily Veggies"
              defaultChecked={category.includes("Daily Veggies")}
              onChange={handleGenreChange}
            >
              Daily Veggies
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              type="checkbox"
              colorScheme="green"
              value="Exotic Vegetables"
              defaultChecked={category.includes("Exotic Vegetables")}
              onChange={handleGenreChange}
            >
              {" "}
              Exotic Vegetables{" "}
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              colorScheme="green"
              type="checkbox"
              value="Herbs & Leafies"
              defaultChecked={category.includes("Herbs & Leafies")}
              onChange={handleGenreChange}
            >
              {" "}
              Herbs & Leafies
            </Checkbox>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter;
