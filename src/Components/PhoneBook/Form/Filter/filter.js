import React from "react";
import { useFilter } from "../../../hooks/useFilter";
const ClientsFilter = () => {
  const { filter, setFilter } = useFilter();
  return (
    <label className="text-center block text-xs font-semibold text-gray-600 uppercase my-2">
      Find your contact by name
      <div className="flex items-center bg-gray-200 rounded-md my-2">
        <div className="pl-2">
          <svg
            className="fill-current text-gray-500 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="heroicon-ui"
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          className="w-full text-base rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
          placeholder="Search your contacts"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </label>
  );
};

export default ClientsFilter;
