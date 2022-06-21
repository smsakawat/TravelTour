import Banner from "../../components/Banner/Banner";
import Destinations from "../../components/Destinations/Destinations";
import Discount from "../../components/Discount/Discount";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Tours from "../../components/Tours/Tours";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Tours></Tours>
      <Destinations></Destinations>
      <Discount></Discount>
      <Footer></Footer>
    </div>
  );
};

export default Home;
