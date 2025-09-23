import Navbar_modern from "../../components/Navbar/Navbar_modern";
// import ProductHighlight from "../../components/ProductHighlight";
// import Stores from "../../components/Stores";
// import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer/Footer";
import FAQs from "../../components/FAQs";
// import FloatingChat from "../../components/FloatingChat";

const FAQ_page = () => {
  return (
    <>
      <Navbar_modern bgColor={"bg-[rgba(0,0,0,0.5)]"} position={"fixed z-20"} />

      <FAQs/>

    

      <Footer />

    </>
  );
};

export default FAQ_page;