import Navigation from "../../components/Navigation";
// import HeaderPay from "../../components/HeaderPayment/headerpay";
// import DetailPay from "../../components/DetailPay/detailpay";
// import PayMain from "../../components/PayMain/paymain";
import Footer from "../../components/Footer";
import EmptyHero from "../../components/EmptyHero";
import PaymentStep from "../../components/PaymentStep";
import PaymentDate from "../../components/PaymentDate";
import PaymentChooseBank from "../../components/PaymentChooseBank";

const PaymentPages = () => {
  const bankDetail = [
    {
      name: "BCA",
      desc: "BCA Transfer",
    },
    {
      name: "BNI",
      desc: "BNI Transfer",
    },
    {
      name: "Mandiri",
      desc: "Mandiri Transfer",
    },
  ];

  return (
    <div>
      <Navigation />
      <EmptyHero />
      <PaymentStep />
      <PaymentDate />
      <PaymentChooseBank data={bankDetail} />
      <Footer />
    </div>
  );
};

export default PaymentPages;
