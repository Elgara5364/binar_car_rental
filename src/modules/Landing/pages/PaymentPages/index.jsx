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
      alias: "a.n Binar Car Rental",
      no_rek: "54104257877",
      atm: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        instruction3:
          "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      m_bca: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        instruction3:
          "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      bca_klik: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        instruction3:
          "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      internet_banking: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        instruction3:
          "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
    },
    {
      name: "BNI",
      desc: "BNI Transfer",
      alias: "a.n Binar Car Rental",
      no_rek: "54104257878",
      atm: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        instruction3:
          "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      m_BNI: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        instruction3:
          "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      BNI_klik: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        instruction3:
          "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      internet_banking: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        instruction3:
          "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
    },
    {
      name: "Mandiri",
      desc: "Mandiri Transfer",
      alias: "a.n Binar Car Rental",
      no_rek: "54104257879",
      atm: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        instruction3:
          "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      m_Mandiri: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        instruction3:
          "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      Mandiri_klik: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        instruction3:
          "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
      internet_banking: {
        instruction1: "Masukkan kartu ATM, lalu PIN ",
        instruction2:
          "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        instruction3:
          "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        instruction4:
          "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        instruction5: "Ambil dan simpanlah bukti transaksi tersebut",
      },
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
