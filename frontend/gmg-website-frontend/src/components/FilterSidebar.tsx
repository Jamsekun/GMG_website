// FilterSidebar.tsx
import { useState } from "react";
import { FilterForm } from "./FilterForm";

interface FilterSidebarProps {
  showFilter: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ showFilter, onClose }: FilterSidebarProps) => {
  // Static placeholder state for UI preview
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 50000]);

  const categoryItems = [
    { label: "Coffee", checked: false, onChange: () => {} },
    { label: "Tea", checked: true, onChange: () => {} },
    { label: "Pastries", checked: false, onChange: () => {} },
  ];

  const sortByItems = [
    { label: "Alphabet", checked: false, onChange: () => {}, value: "Alphabet" },
    { label: "Latest", checked: false, onChange: () => {}, value: "Latest" },
    { label: "Oldest", checked: false, onChange: () => {}, value: "Oldest" },
    { label: "Price", checked: false, onChange: () => {}, value: "Price" },
  ];

  const handleReset = () => {
    setSearch("");
    setPriceRange([1000, 50000]);
  };

  const handleApply = () => {
    console.log("Apply clicked");
  };

  // For UI preview, always show desktop version
  const isDesktop = true;

  return (
    <>
      {isDesktop && (
        <aside className="flex flex-col bg-black rounded-3xl h-fit p-8 gap-y-6 text-white w-80">
          <FilterForm
            search={search}
            setSearch={setSearch}
            categoryItems={categoryItems}
            sortByItems={sortByItems}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            onReset={handleReset}
            onApply={handleApply}
          />
        </aside>
      )}

      {!isDesktop && showFilter && (
        <div
          className="fixed inset-0 z-30 flex justify-center bg-black bg-opacity-30"
          onClick={onClose}
        >
          <div
            className="w-full h-fit mx-4 md:mx-12 mt-36 md:mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 bg-white border-4 border-amber-500 rounded-3xl max-h-screen p-8 gap-y-4 text-black text-sm">
              <FilterForm
                search={search}
                setSearch={setSearch}
                categoryItems={categoryItems}
                sortByItems={sortByItems}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onReset={handleReset}
                onApply={handleApply}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
