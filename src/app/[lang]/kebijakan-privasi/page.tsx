import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Pahami bagaimana Mobilin mengumpulkan, menggunakan, dan melindungi data pribadi Anda. Privasi Anda adalah prioritas kami.',
};

export default async function KebijakanPrivasiPage(props: { params: Promise<{ lang: Locale }>}) {
    const params = await props.params;

    const {
        lang
    } = params;

    return (
      <div className="container py-12 md:py-20 max-w-4xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
              <h1 className="!font-headline">Kebijakan Privasi</h1>
              <p className="lead">Terakhir diperbarui: 24 Juli 2024</p>
              
              <p>
                  Selamat datang di Mobilin. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat Anda menggunakan layanan kami.
              </p>

              <h2>Informasi yang Kami Kumpulkan</h2>
              <p>
                  Kami dapat mengumpulkan informasi pribadi dari Anda seperti:
              </p>
              <ul>
                  <li><strong>Data Identitas Pribadi:</strong> Nama, alamat email, nomor telepon, dan salinan dokumen identitas (KTP/SIM) yang diperlukan untuk verifikasi.</li>
                  <li><strong>Data Transaksi:</strong> Informasi tentang pemesanan yang Anda buat, termasuk tanggal, jenis mobil, dan riwayat pembayaran.</li>
                  <li><strong>Data Teknis:</strong> Informasi tentang perangkat dan browser yang Anda gunakan, alamat IP, dan data penggunaan situs web kami.</li>
              </ul>

              <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p>
                  Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul>
                  <li>Memproses pemesanan dan menyediakan layanan rental mobil kami.</li>
                  <li>Memverifikasi identitas Anda untuk keamanan.</li>
                  <li>Berkomunikasi dengan Anda mengenai pesanan, promosi, dan pembaruan layanan.</li>
                  <li>Meningkatkan dan mempersonalisasi pengalaman Anda di situs kami.</li>
                  <li>Mematuhi kewajiban hukum dan peraturan yang berlaku.</li>
              </ul>

              <h2>Keamanan Data</h2>
              <p>
                  Kami menggunakan langkah-langkah keamanan administratif, teknis, dan fisik untuk melindungi informasi pribadi Anda. Meskipun kami telah mengambil langkah-langkah yang wajar untuk mengamankan data Anda, perlu diingat bahwa tidak ada transmisi data melalui internet yang 100% aman.
              </p>

               <h2>Perubahan pada Kebijakan Ini</h2>
              <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala.
              </p>

              <h2>Hubungi Kami</h2>
              <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan <Link href={`/${lang}/kontak`}>hubungi kami</Link>.
              </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    );
}
