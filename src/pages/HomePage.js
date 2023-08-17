import Showcase from "../components/Index/Showcase";
import DeliveryBanner from "../components/Index/DeliveryBanner";
import AppBanner from "../components/Index/AppBanner";
import Bestsellers from "../components/Index/Bestsellers";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <DeliveryBanner />
      <AppBanner />
      <Bestsellers />
    </>
  );
};

export default HomePage;
