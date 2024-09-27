"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filterQuery="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        filterQuery="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3
      </Button>
      <Button
        filterQuery="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7
      </Button>
      <Button
        filterQuery="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12
      </Button>
    </div>
  );
}

function Button({ filterQuery, activeFilter, handleFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filterQuery)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filterQuery ? "bg-primary-700 text-primary-50" : ""
      } `}
    >
      {children}
    </button>
  );
}

export default Filter;
