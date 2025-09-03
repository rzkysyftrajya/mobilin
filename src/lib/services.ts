import { LucideIcon, Calendar, Car, Users, Plane, Heart, Briefcase, Sun, Moon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
}

export const services: Service[] = [
    {
        slug: "sewa-harian-mingguan-bulanan",
        title: "Rental Harian, Mingguan, Bulanan",
        icon: Calendar,
        description: "Butuh mobil untuk beberapa hari atau bahkan beberapa bulan? Kami tawarkan harga terbaik dan fleksibilitas tinggi.",
        longDescription: "Solusi sempurna untuk liburan, perjalanan dinas, atau saat mobil pribadi Anda sedang tidak tersedia. Nikmati tarif yang lebih hemat untuk penyewaan jangka panjang. Proses cepat, syarat mudah, dan Anda siap jalan."
    },
    {
        slug: "sewa-mobil-lepas-kunci",
        title: "Sewa Mobil Lepas Kunci",
        icon: Car,
        description: "Nikmati kebebasan dan privasi penuh dengan menyetir sendiri. Proses serah terima cepat dan syarat mudah.",
        longDescription: "Untuk Anda yang menginginkan kebebasan penuh dalam menjelajahi destinasi. Kami memastikan setiap mobil dalam kondisi prima dan aman untuk Anda kendarai sendiri. Syarat mudah, proses verifikasi cepat."
    },
    {
        slug: "sewa-mobil-dengan-sopir",
        title: "Sewa Mobil dengan Sopir",
        icon: Users,
        description: "Duduk santai dan nikmati perjalanan. Sopir kami berpengalaman, ramah, dan menguasai medan.",
        longDescription: "Bebaskan diri Anda dari lelahnya menyetir di tengah kemacetan atau rute yang tidak dikenal. Sopir profesional kami tidak hanya mengantar, tapi juga bisa menjadi pemandu wisata Anda. Cocok untuk perjalanan bisnis atau liburan santai."
    },
    {
        slug: "antar-jemput-bandara",
        title: "Antar-Jemput Bandara",
        icon: Plane,
        description: "Hindari antrian taksi dan ketidakpastian transportasi online. Kami pastikan Anda tiba atau berangkat dari bandara tepat waktu.",
        longDescription: "Mulai dan akhiri perjalanan udara Anda dengan nyaman. Layanan antar-jemput bandara kami menjamin ketepatan waktu dan kenyamanan, membebaskan Anda dari stres mencari transportasi di bandara."
    },
    {
        slug: "mobil-pernikahan",
        title: "Mobil Pernikahan (Wedding Car)",
        icon: Heart,
        description: "Jadikan hari spesial Anda semakin tak terlupakan dengan mobil premium yang elegan.",
        longDescription: "Hari pernikahan Anda pantas mendapatkan yang terbaik. Kami menyediakan pilihan mobil premium yang bersih, wangi, dan siap dihias sesuai tema pernikahan Anda, lengkap dengan sopir profesional."
    },
    {
        slug: "sewa-mobil-korporat",
        title: "Sewa Mobil Korporat",
        icon: Briefcase,
        description: "Solusi mobilitas efisien untuk kebutuhan perusahaan Anda dengan kontrak jangka panjang dan layanan prioritas.",
        longDescription: "Kami menawarkan solusi transportasi yang efisien dan terjangkau untuk kebutuhan perusahaan Anda. Dapatkan kontrak sewa jangka panjang dengan harga kompetitif, layanan prioritas, dan manajemen armada yang terintegrasi."
    },
    {
        slug: "paket-wisata-tur",
        title: "Paket Wisata & Tur",
        icon: Sun,
        description: "Jelajahi destinasi wisata tanpa ribet. Kami sediakan paket tur fleksibel termasuk mobil dan sopir.",
        longDescription: "Ingin liburan tanpa pusing menyusun itinerary? Pilih paket wisata kami yang fleksibel. Kami menyediakan mobil, sopir yang juga bisa menjadi pemandu, dan rekomendasi destinasi terbaik di kota tujuan Anda."
    },
    {
        slug: "rental-mobil-24-jam",
        title: "Rental Mobil 24 Jam",
        icon: Moon,
        description: "Kebutuhan mendadak di tengah malam? Tim support dan layanan kami siap membantu Anda kapanpun.",
        longDescription: "Kebutuhan darurat tidak mengenal waktu. Layanan 24 jam kami memastikan Anda bisa mendapatkan mobil kapanpun Anda membutuhkannya. Tim customer service kami selalu siaga untuk melayani Anda."
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug);
}
