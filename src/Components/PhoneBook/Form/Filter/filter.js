import React from "react";
import { FilterWrapper } from "./filterStyled";
const ClientsFilter = ({ filter, setFilter }) => {
  return (
    <FilterWrapper>
      Find your contact by name
      <input type="text" value={filter} onChange={setFilter} />
    </FilterWrapper>
  );
};

export default ClientsFilter;
