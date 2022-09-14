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
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Filter2 = () => {
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
              Fruits
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box>
            <Checkbox
              type="checkbox"
               colorScheme="green"
              value="fresh"
              defaultChecked={category.includes("fresh")}
              onChange={handleGenreChange}
            >
              Fresh
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              colorScheme="green"
              type="checkbox"
              value="Exotic Fruits"
              defaultChecked={category.includes("Exotic Fruits")}
              onChange={handleGenreChange}
            >
              Exotic Fruits
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              colorScheme="green"
              type="checkbox"
              value="Fruit Combos"
              defaultChecked={category.includes("Fruit Combos")}
              onChange={handleGenreChange}
            >
             Fruit Combos
            </Checkbox>
           
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filter2;
