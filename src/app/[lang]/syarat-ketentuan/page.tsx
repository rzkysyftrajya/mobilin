import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan',
  description: 'Baca syarat dan ketentuan layanan rental mobil di Mobilin sebelum Anda melakukan pemesanan.',
};

export default function SyaratKetentuanPage() {
  return (
    <div className="container py-12 md:py-20 max-w-4xl mx-auto">
      <ScrollAnimationWrapper>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <h1 className="!font-headline">Syarat dan Ketentuan</h1>
             <p className="lead">Terakhir diperbarui: 24 Juli 2024</p>

            <p>
                Harap baca Syarat dan Ketentuan ("Syarat") ini dengan saksama sebelum menggunakan layanan rental mobil Mobilin ("Layanan") yang dioperasikan oleh kami.
            </p>

            <h2>1. Persyaratan Penyewa</h2>
            <ul>
                <li>Penyewa harus berusia minimal 21 tahun.</li>
                <li>Penyewa wajib memiliki Surat Izin Mengemudi (SIM A) yang masih berlaku.</li>
                <li>Penyewa wajib memberikan salinan Kartu Tanda Penduduk (KTP) atau Paspor yang valid.</li>
                <li>Kami berhak menolak penyewaan jika dokumen yang diberikan tidak valid atau tidak lengkap.</li>
            </ul>

            <h2>2. Pemesanan dan Pembayaran</h2>
             <ul>
                <li>Pemesanan dianggap sah setelah konfirmasi dari tim kami dan pembayaran deposit (jika ada) telah diterima.</li>
                <li>Pelunasan biaya sewa dilakukan di muka sebelum serah terima kendaraan.</li>
                <li>Pembatalan yang dilakukan kurang dari 24 jam sebelum waktu sewa akan dikenakan biaya pembatalan sesuai kebijakan yang berlaku.</li>
            </ul>

            <h2>3. Penggunaan Kendaraan</h2>
            <ul>
                <li>Kendaraan hanya boleh dikemudikan oleh penyewa yang terdaftar atau pengemudi tambahan yang telah disetujui.</li>
                <li>Penyewa bertanggung jawab penuh atas segala kerusakan pada kendaraan yang disebabkan oleh kelalaian atau penggunaan yang tidak semestinya.</li>
                <li>Kendaraan tidak boleh digunakan untuk kegiatan ilegal, balapan, atau mengangkut barang melebihi kapasitas.</li>
                <li>Bahan bakar (BBM) tidak termasuk dalam biaya sewa. Kendaraan diserahkan dengan tangki penuh dan harus dikembalikan dalam kondisi yang sama.</li>
            </ul>

             <h2>4. Asuransi</h2>
            <ul>
                <li>Setiap penyewaan sudah termasuk asuransi dasar (Total Loss Only).</li>
                <li>Penyewa bertanggung jawab atas biaya risiko sendiri (Own Risk/Deductible) jika terjadi klaim asuransi untuk kerusakan parsial.</li>
                <li>Kerusakan yang disebabkan oleh pelanggaran Syarat dan Ketentuan ini tidak akan ditanggung oleh asuransi.</li>
            </ul>

            <h2>5. Perubahan Syarat</h2>
            <p>
                Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti Syarat ini kapan saja. Dengan melanjutkan penggunaan Layanan kami, Anda setuju untuk terikat oleh syarat yang direvisi.
            </p>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
