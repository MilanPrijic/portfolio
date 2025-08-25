import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formUrlQuery } from "@/utils/urls.js";
import { SelectLabel } from "@radix-ui/react-select";

const ProjectFilter = ({ filters }) => {
  const router = useNavigate();
  const [searchParams] = useSearchParams();

  const paramsFilter = searchParams.get("filter");

  const handleUpdateParams = (value) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value: value,
    });

    router(newUrl);
  };

  return (
    <div className="relative mt-10 hidden max-md:flex">
      <Select
        onValueChange={handleUpdateParams}
        defaultValue={paramsFilter || undefined}
      >
        <SelectTrigger
          className="body-regular no-focus border-light text-secondary border px-5 py-2.5 min-h-[56px] w-full sm:min-w-[170px]"
          aria-label="Filter options"
        >
          <div className="line-clamp-1 flex-1 text-left capitalize">
            <SelectValue placeholder="Select a filter" />
          </div>
        </SelectTrigger>

        <SelectContent className="min-w-[var(--radix-select-trigger-width)] max-h-[500px] bg-primary capitalize">
          {filters.map((item) => (
            <SelectGroup>
              {item.name === "web" ||
              item.name === "mobile" ||
              item.name === "game" ? (
                <SelectLabel className="text-secondary bg-tertiary">
                  {item.name}
                </SelectLabel>
              ) : null}
              <SelectItem
                key={item.name}
                value={item.name}
                className="text-white pl-2 py-1"
              >
                {item.name}
              </SelectItem>
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectFilter;
