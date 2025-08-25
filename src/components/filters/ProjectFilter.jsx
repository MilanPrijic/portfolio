import React, { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "@/utils/tailwind.js";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/utils/urls.js";
import { stars } from "@/assets/index.js";

const ProjectFilter = ({ filters }) => {
  const router = useNavigate();
  const [searchParams] = useSearchParams();

  const paramsFilter = searchParams.get("filter");

  const [active, setActive] = useState(paramsFilter || "all");

  const handleTypeClick = (filter) => {
    let newUrl;

    if (filter === active && filter !== "all") {
      setActive("");

      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router(newUrl);
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((filter) => (
        <div
          key={filter.name}
          className={cn(
            active === filter.name
              ? "p-[1px] green-pink-gradient rounded-lg"
              : "",
          )}
        >
          {filter.name === "web" ||
          filter.name === "mobile" ||
          filter.name === "game" ? (
            <img
              src={stars}
              alt="stars"
              className="absolute -mt-2 -ml-1.5"
              width={16}
              height={16}
            />
          ) : null}
          <Button
            className={cn(
              `body-medium rounded-lg px-6 py-3 capitalize shadow-none w-full leading-none`,
              active === filter.name
                ? "bg-tertiary text-white"
                : "bg-tertiary text-secondary hover:text-white",
            )}
            onClick={() => handleTypeClick(filter.name)}
          >
            {filter.name}
          </Button>
        </div>
      ))}
    </div>
  );
};
export default ProjectFilter;
