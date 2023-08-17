import ProductPageTemplate from "../../components/Products/ProductPageTemplate";

const GardenProducts = () => {
  return (
    <ProductPageTemplate
      category={"garden"}
      heading={"Garden Products"}
      filter1={"FURNITURE"}
      filter2={"TOOLS"}
      filter3={"PLANTS"}
    />
  );
};

export default GardenProducts;
