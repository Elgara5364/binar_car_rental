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
      method_name: ["ATM BCA", "M-BCA", "BCA Klik", "Internet Banking"],
      atm: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      m_bca: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      bca_klik: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      internet_banking: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
    },

    {
      name: "BNI",
      desc: "BNI Transfer",
      alias: "a.n Binar Car Rental",
      no_rek: "54104257878",
      method_name: ["ATM BNI", "M-BNI", "BNI Klik", "Internet Banking"],
      atm: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      m_bca: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      bca_klik: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      internet_banking: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BNI Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor BNI Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
    },

    {
      name: "Mandiri",
      desc: "Mandiri Transfer",
      alias: "a.n Binar Car Rental",
      no_rek: "54104257879",
      method_name: [
        "ATM Mandiri",
        "M-Mandiri",
        "Mandiri Klik",
        "Internet Banking",
      ],
      atm: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      m_Mandiri: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      Mandiri_klik: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
      internet_banking: [
        {
          instruction: "Masukkan kartu ATM, lalu PIN ",
        },
        {
          instruction:
            "Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek Mandiri Virtual Account” ",
        },
        {
          instruction:
            "Masukkan nomor Mandiri Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678 ",
        },
        {
          instruction:
            "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi ",
        },
        { instruction: "Ambil dan simpanlah bukti transaksi tersebut" },
      ],
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
        <PaymentConfirmation data={bankDetail} />
      )}
      <Footer />
    </div>
  );
};

export default PaymentPages;
