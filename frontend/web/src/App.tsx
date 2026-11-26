import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SoalList from "./pages/SoalList";
import SoalForm from "./pages/SoalForm";
import SesiGame from "./pages/SesiGame";
import KelasSiswa from "./pages/KelasSiswa";
import Laporan from "./pages/Laporan";
import Pengaturan from "./pages/Pengaturan";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bank-soal" element={<SoalList />} />
        <Route path="/bank-soal/tambah" element={<SoalForm />} />
        <Route path="/sesi-game" element={<SesiGame />} />
        <Route path="/kelas-siswa" element={<KelasSiswa />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
      </Routes>
    </Layout>
  );
}
