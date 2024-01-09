import Navigation from "../../components/Navigation";
// import HeaderPay from "../../components/HeaderPayment/headerpay";
// import DetailPay from "../../components/DetailPay/detailpay";
// import PayMain from "../../components/PayMain/paymain";
import Footer from "../../components/Footer";
import EmptyHero from "../../components/EmptyHero";
import PaymentStep from "../../components/PaymentStep";
import PaymentDate from "../../components/PaymentDate";
import PaymentChooseBank from "../../components/PaymentChooseBank";
import { useSelector } from "react-redux";
import PaymentConfirmation from "../../components/PaymentConfirmation";

const PaymentPages = () => {
  const state = useSelector((state) => state.payment);
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
      {!state.isSelectedBank ? (
        <PaymentStep data={bankDetail} />
      ) : (
        <PaymentStep data={bankDetail} />
      )}
      {!state.isSelectedBank || state.step == 1 ? <PaymentDate /> : null}
      {!state.isSelectedBank || state.step == 1 ? (
        <PaymentChooseBank data={bankDetail} />
      ) : (
        <PaymentConfirmation />
      )}
      <Footer />
    </div>
  );
};

export default PaymentPages;
