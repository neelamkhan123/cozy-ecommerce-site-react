import ProductPageTemplate from "../../components/Products/ProductPageTemplate";

const KitchenProducts = () => {
  return (
    <ProductPageTemplate
      category={"kitchen"}
      heading={"Kitchen Products"}
      filter1={"COOKING"}
      filter2={"BAKING"}
      filter3={"CLEANING"}
    />
  );
};

export default KitchenProducts;
