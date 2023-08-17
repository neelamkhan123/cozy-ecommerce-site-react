import ProductPageTemplate from "../../components/Products/ProductPageTemplate";

const HomeProducts = () => {
  return (
    <ProductPageTemplate
      category={"home"}
      heading={"Home Products"}
      filter1={"LIVING ROOM"}
      filter2={"DINING ROOM"}
      filter3={"BEDROOM"}
    />
  );
};

export default HomeProducts;
