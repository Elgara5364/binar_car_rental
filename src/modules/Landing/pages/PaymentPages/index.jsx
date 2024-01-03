import Navigation from "../../components/Navigation";
// import HeaderPay from "../../components/HeaderPayment/headerpay";
// import DetailPay from "../../components/DetailPay/detailpay";
// import PayMain from "../../components/PayMain/paymain";
import Footer from "../../components/Footer";
import EmptyHero from "../../components/EmptyHero";
import PaymentStep from "../../components/PaymentStep";
import PaymentDate from "../../components/PaymentDate";

const PaymentPages = () => {
  return (
    <div>
      <Navigation />
      <EmptyHero />
      <PaymentStep />
      <PaymentDate />
      <Footer />
    </div>
  );
};

export default PaymentPages;
