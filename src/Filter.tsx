import React from "react";
import { useFetchCategories } from "./hooks/useCategoriesApi";

const Filter = ({
  showFilter,
  setShowFilter,
  setSort,
  setLimit,
  setCategory,
}: any) => {
  const BtnHandler = () => {
    setShowFilter(!showFilter);
  };

  const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const limitHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(event.target.value);
  };

  const categoryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "All") {
      setCategory("");
    } else {
      setCategory(event.target.value);
    }
  };

  const { data, isLoading } = useFetchCategories();

  return (
    <div>
      {!showFilter ? (
        <div className="w-[380px] bg-[#c6ceeb] min-h-screen fixed p-10 top-0 left-0 -translate-x-[90%] duration-300">
          <button
            onClick={BtnHandler}
            className="h-screen px-2 absolute right-0 transition-transform duration-300 rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12h18"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-[400px] p-10 bg-[#c6ceeb] min-h-screen fixed top-0 left-0 duration-300 flex flex-col gap-8 items-start">
          <h2 className="self-center text-4xl font-bold">Filter</h2>
          <select
            name="sort"
            id="sort"
            onChange={sortHandler}
            className="p-2 w-full text-center"
            defaultValue="asc"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <select
            name="limit"
            onChange={limitHandler}
            id="limit"
            className="p-2 w-full text-center"
            defaultValue={20}
          >
            <option value="5" className="text-center w-full">
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>

          <div className="flex flex-col items-start w-full gap-5">
            <h2 className="text-3xl self-center font-semibold">Categories</h2>
            <select
              name="category"
              id="category"
              onChange={categoryHandler}
              className="p-2 w-full text-center"
              defaultValue={"All"}
            >
              <option value="All">All</option>
              {!isLoading
                ? data.map((category) => (
                    <option value={category} key={category}>
                      {category.slice(0, 1).toUpperCase() + category.slice(1)}
                    </option>
                  ))
                : ""}
            </select>
          </div>

          <button
            onClick={BtnHandler}
            className="h-screen px-2 absolute right-0 transition-transform duration-300 -rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
