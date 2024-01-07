import Accordion from "@/components/organisms/accordion/Accordion";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
import FilterHead from "@/components/atoms/filterHead/FilterHead";

const productAvailabilities = [
  {
    id: 1,
    label: "In Stock",
    name: "inStockFor",
  },
  {
    id: 2,
    label: "Out of Stock",
    name: "outOfStockFor",
  },
  {
    id: 3,
    label: "Pre Order",
    name: "preOrderFor",
  },
  {
    id: 4,
    label: "Up Coming",
    name: "upComingFor",
  },
];

const Availability = () => {
  return <Accordion title={"Availability"} items={productAvailabilities} />;
};

export default Availability;
