import ProductPageTemplate from "../../components/Products/ProductPageTemplate";

const DecorProducts = () => {
  return (
    <ProductPageTemplate
      category={"decor"}
      heading={"Decor Products"}
      filter1={"LIGHTING"}
      filter2={"FRAMES"}
      filter3={"PAINT"}
    />
  );
};

export default DecorProducts;
