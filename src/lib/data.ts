import type {
  Car,
  Testimonial,
  Faq,
  BlogPost,
  Destination,
  DestinationArea,
} from "@/lib/types";

export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Avanza",
    capacity: 7,
    year: 2022,
    fuel: "Bensin",
    image: "/daftar-mobil/all-new-avanza-avanza.png",
    specs: ["AC Dingin", "Audio", "Kapasitas 7 orang"],
    "data-ai-hint": "city car, avanza, toyota",
  },
  {
    id: 2,
    name: "Toyota Agya",
    capacity: 5,
    year: 2021,
    fuel: "Bensin",
    image: "/daftar-mobil/toyota-agya.png",
    specs: ["AC Dingin", "Hemat BBM", "Kapasitas 5 orang"],
    "data-ai-hint": "city car, agya, toyota",
  },
  {
    id: 3,
    name: "Daihatsu Ayla",
    capacity: 5,
    year: 2020,
    fuel: "Bensin",
    image: "/daftar-mobil/daihatsu-ayla-agya.png",
    specs: ["AC Dingin", "Compact", "Kapasitas 5 orang"],
    "data-ai-hint": "city car, ayla, daihatsu",
  },
  {
    id: 4,
    name: "Honda Brio",
    capacity: 5,
    year: 2021,
    fuel: "Bensin",
    image: "/daftar-mobil/honda-brio.png",
    specs: ["AC Dingin", "Stylish", "Kapasitas 5 orang"],
    "data-ai-hint": "city car, brio, honda",
  },
  {
    id: 5,
    name: "Toyota Calya",
    capacity: 7,
    year: 2020,
    fuel: "Bensin",
    image: "/daftar-mobil/toyota-calya.png",
    specs: ["AC Dingin", "Hemat BBM", "Kapasitas 7 orang"],
    "data-ai-hint": "mpv, calya, toyota",
  },
  {
    id: 6,
    name: "Suzuki Ertiga",
    capacity: 7,
    year: 2022,
    fuel: "Bensin",
    image: "/daftar-mobil/ertiga-hybrid.png",
    specs: ["AC Dingin", "Nyaman", "Kapasitas 7 orang"],
    "data-ai-hint": "mpv, ertiga, suzuki",
  },
  {
    id: 7,
    name: "Suzuki XL7",
    capacity: 7,
    year: 2022,
    fuel: "Bensin",
    image: "/daftar-mobil/suzuki-xl7.png",
    specs: ["AC Dingin", "Kapasitas Besar", "SUV Style"],
    "data-ai-hint": "suv, xl7, suzuki",
  },
  {
    id: 8,
    name: "Mitsubishi Xpander",
    capacity: 7,
    year: 2023,
    fuel: "Bensin",
    image: "/daftar-mobil/mitsubishi-xpander.png",
    specs: ["AC Dingin", "Nyaman", "Kapasitas 7 orang"],
    "data-ai-hint": "mpv, xpander, mitsubishi",
  },
  {
    id: 9,
    name: "Toyota Rush",
    capacity: 7,
    year: 2021,
    fuel: "Bensin",
    image: "/daftar-mobil/toyota-rush.png",
    specs: ["AC Dingin", "Tangguh", "Kapasitas 7 orang"],
    "data-ai-hint": "suv, rush, toyota",
  },
  {
    id: 10,
    name: "Daihatsu Terios",
    capacity: 7,
    year: 2021,
    fuel: "Bensin",
    image: "/daftar-mobil/daihatsu-terios.png",
    specs: ["AC Dingin", "Tangguh", "Kapasitas 7 orang"],
    "data-ai-hint": "suv, terios, daihatsu",
  },
  {
    id: 11,
    name: "Toyota Fortuner",
    capacity: 7,
    year: 2022,
    fuel: "Diesel",
    image: "/daftar-mobil/fortuner-rush.png",
    specs: ["AC Dingin", "Luxury", "Kapasitas 7 orang"],
    "data-ai-hint": "suv, fortuner, toyota",
  },
  {
    id: 12,
    name: "Mitsubishi Pajero",
    capacity: 7,
    year: 2022,
    fuel: "Diesel",
    image: "/daftar-mobil/mitsubishi-pajero.png",
    specs: ["AC Dingin", "Mewah", "Kapasitas 7 orang"],
    "data-ai-hint": "suv, pajero, mitsubishi",
  },
  {
    id: 13,
    name: "Toyota Alphard",
    capacity: 7,
    year: 2022,
    fuel: "Bensin",
    image: "/daftar-mobil/toyota-alphard.png",
    specs: ["AC Dingin", "Luxury", "Kapasitas 7 orang"],
    "data-ai-hint": "mewah, alphard, toyota",
  },
  {
    id: 14,
    name: "Toyota Innova Reborn",
    capacity: 7,
    year: 2021,
    fuel: "Diesel",
    image: "/daftar-mobil/innova-reborn.png",
    specs: ["AC Dingin", "Nyaman", "Kapasitas 7 orang"],
    "data-ai-hint": "mpv, innova, toyota",
  },
  {
    id: 15,
    name: "Toyota Innova Zenix",
    capacity: 7,
    year: 2023,
    fuel: "Hybrid",
    image: "/daftar-mobil/innova-zenix.png",
    specs: ["AC Dingin", "Hybrid", "Kapasitas 7 orang"],
    "data-ai-hint": "mpv, innova, toyota",
  },
  {
    id: 16,
    name: "Isuzu Elf Minibus",
    capacity: 15,
    year: 2020,
    fuel: "Diesel",
    image: "/daftar-mobil/isuzu-elf-minibus.png",
    specs: ["AC Dingin", "Kapasitas 15 orang"],
    "data-ai-hint": "niaga, elf, isuzu",
  },
  {
    id: 17,
    name: "Hiace Commuter",
    capacity: 15,
    year: 2021,
    fuel: "Diesel",
    image: "/daftar-mobil/hiace-commuter.png",
    specs: ["AC Dingin", "Kapasitas 15 orang"],
    "data-ai-hint": "niaga, hiace, toyota",
  },
  {
    id: 18,
    name: "Hiace Premio",
    capacity: 15,
    year: 2022,
    fuel: "Diesel",
    image: "/daftar-mobil/hiace-premio.png",
    specs: ["AC Dingin", "Kapasitas 15 orang", "Model Baru"],
    "data-ai-hint": "niaga, hiace, toyota",
  },
  {
    id: 19,
    name: "Hiace Premio Luxury",
    capacity: 12,
    year: 2022,
    fuel: "Diesel",
    image: "/daftar-mobil/hiace-premio-luxury.png",
    specs: ["AC Dingin", "Kursi Kapten", "Kapasitas 12 orang"],
    "data-ai-hint": "mewah, hiace, toyota",
  },
  {
    id: 20,
    name: "Hilux Double Cabin",
    capacity: 5,
    year: 2022,
    fuel: "Diesel",
    image: "/daftar-mobil/hilux-double-cabin.png",
    specs: ["AC Dingin", "4x4", "Kapasitas 5 orang"],
    "data-ai-hint": "niaga, hilux, toyota",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    review:
      "Pelayanannya cepat dan mobilnya bersih. Sangat memuaskan. Mobilin Aja!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtYW58ZW58MHx8fHwxNzE3NTk4Mzk3fDA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "happy man",
  },
  {
    name: "Citra Lestari",
    review:
      "Booking mudah via WhatsApp, harganya juga terjangkau. Recommended!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbnxlbnwwfHx8fDE3MTc1OTgzOTd8MA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "happy woman",
  },
  {
    name: "Ahmad Dahlan",
    review:
      "Support 24 jam sangat membantu saat ada kendala di jalan. Terima kasih Mobilin.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYW58ZW58MHx8fHwxNzE3NTk4Mzk3fDA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "man smiling",
  },
  {
    name: "Dewi Anggraini",
    review:
      "Armadanya lengkap, jadi banyak pilihan. Proses serah terima kunci juga cepat.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3b21hbnxlbnwwfHx8fDE3MTc1OTgzOTd8MA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "woman travel",
  },
  {
    name: "Eko Prasetyo",
    review:
      "Mobilnya baru dan nyaman untuk perjalanan jauh. Pasti sewa di sini lagi.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtYW58ZW58MHx8fHwxNzE3NTk4Mzk3fDA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "man posing",
  },
  {
    name: "Siti Aminah",
    review:
      "Pilihan yang tepat untuk liburan keluarga. Anak-anak senang, perjalanan lancar!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbnxlbnwwfHx8fDE3MTc1OTgzOTd8MA&ixlib=rb-4.0.3&q=80&w=300",
    "data-ai-hint": "mother smiling",
  },
];

export const staticFaqs: Faq[] = [
  {
    question: "Apa saja syarat untuk menyewa mobil di Mobilin?",
    answer:
      "Untuk menyewa mobil, Anda memerlukan KTP, SIM A yang masih berlaku, dan bukti pembayaran. Untuk beberapa jenis mobil, mungkin diperlukan dokumen tambahan seperti ID Karyawan atau tagihan kartu kredit.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer:
      "Pembayaran dapat dilakukan melalui transfer bank, kartu kredit, atau dompet digital. Kami akan mengirimkan detail pembayaran setelah Anda melakukan konfirmasi pesanan via WhatsApp.",
  },
  {
    question: "Apakah bisa sewa mobil lepas kunci?",
    answer:
      "Tentu saja. Kami menyediakan layanan sewa mobil lepas kunci maupun dengan sopir. Silakan informasikan kebutuhan Anda saat melakukan pemesanan.",
  },
  {
    question: "Apakah harga sewa sudah termasuk bensin?",
    answer:
      "Harga sewa belum termasuk bahan bakar (bensin/solar). Mobil akan diserahkan dengan tangki penuh dan harus dikembalikan dalam keadaan penuh juga.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan pada mobil?",
    answer:
      "Segera hubungi tim support 24 jam kami. Kami akan memberikan panduan dan bantuan secepatnya. Biaya perbaikan akan tergantung pada jenis kerusakan dan perlindungan asuransi yang Anda pilih.",
  },
  {
    question: "Apakah ada batasan jarak tempuh harian?",
    answer:
      "Tidak ada batasan jarak tempuh untuk pemakaian dalam kota. Untuk pemakaian luar kota, mungkin akan ada kebijakan berbeda yang akan diinformasikan saat pemesanan.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "tips-memilih-mobil-rental",
    title: "5 Tips Jitu Memilih Mobil Rental untuk Liburan Keluarga",
    date: "2024-05-15",
    excerpt:
      "Liburan keluarga akan segera tiba! Salah satu persiapan penting adalah memilih mobil rental yang tepat. Simak 5 tips dari Mobilin agar perjalanan Anda nyaman dan aman.",
    author: "Tim Mobilin",
    image: "/blog/blog1.png",
    "data-ai-hint": "family travel car",
    content: `
            <p>Memilih mobil rental yang tepat adalah kunci untuk liburan keluarga yang sukses. Kenyamanan, keamanan, dan kapasitas adalah beberapa faktor penting yang perlu dipertimbangkan. Berikut adalah 5 tips jitu dari Mobilin untuk membantu Anda membuat keputusan yang tepat:</p>
            <br/>
            <h4>1. Sesuaikan dengan Jumlah Penumpang</h4>
            <p>Pastikan mobil memiliki kapasitas yang cukup untuk seluruh anggota keluarga dan barang bawaan. Jangan memaksakan mobil kecil jika Anda bepergian dengan lebih dari 4 orang plus koper besar. Mobil jenis MPV seperti Avanza atau Xpander bisa menjadi pilihan ideal.</p>
            <br/>
            <h4>2. Pertimbangkan Jenis Transmisi</h4>
            <p>Apakah Anda lebih nyaman dengan transmisi manual atau otomatis? Jika rute perjalanan Anda cenderung macet, mobil otomatis akan memberikan kenyamanan lebih. Namun, jika Anda menyukai kontrol penuh dan efisiensi bahan bakar, manual bisa menjadi pilihan.</p>
            <br/>
            <h4>3. Cek Fitur Keamanan</h4>
            <p>Pastikan mobil dilengkapi dengan fitur keamanan standar seperti airbag, ABS, dan sabuk pengaman di semua kursi. Jika Anda membawa anak kecil, periksa ketersediaan ISOFIX untuk car seat.</p>
            <br/>
            <h4>4. Lakukan Inspeksi Sebelum Berangkat</h4>
            <p>Sebelum memulai perjalanan, luangkan waktu untuk memeriksa kondisi mobil. Cek ban, rem, lampu, dan AC. Jangan ragu untuk melaporkan jika ada sesuatu yang tidak beres kepada penyedia rental.</p>
            <br/>
            <h4>5. Pesan dari Jauh-jauh Hari</h4>
            <p>Terutama saat musim liburan, mobil rental cepat habis dipesan. Melakukan pemesanan dari jauh-jauh hari tidak only memastikan ketersediaan unit, tetapi juga seringkali memberikan Anda harga yang lebih baik.</p>
        `,
  },
  {
    slug: "destinasi-road-trip-jawa",
    title: "Rekomendasi Destinasi Road Trip Seru di Pulau Jawa",
    date: "2024-05-10",
    excerpt:
      "Jelajahi keindahan Pulau Jawa dengan road trip! Berikut beberapa rekomendasi destinasi yang wajib Anda kunjungi bersama mobil sewaan dari Mobilin.",
    author: "Tim Mobilin",
    image: "/blog/blog2.png",
    "data-ai-hint": "java landscape road",
    content: `
            <p>Pulau Jawa menyimpan sejuta pesona yang menanti untuk dijelajahi. Melakukan road trip adalah cara terbaik untuk menikmati setiap sudut keindahannya. Dengan mobil sewaan dari Mobilin, petualangan Anda akan menjadi lebih fleksibel dan nyaman. Berikut beberapa rute inspiratif:</p>
            <br/>
            <h4>Rute Selatan: Jakarta - Bandung - Yogyakarta</h4>
            <p>Nikmati perjalanan melintasi Puncak yang sejuk, kuliner lezat di Bandung, hingga suasana budaya yang kental di Yogyakarta. Rute ini menawarkan pemandangan pegunungan yang memukau dan kota-kota yang hidup.</p>
            <br/>
            <h4>Rute Utara (Pantura): Jakarta - Cirebon - Semarang - Surabaya</h4>
            <p>Jalur Pantura menawarkan pengalaman berbeda dengan kota-kota pelabuhan yang bersejarah. Cicipi kuliner khas Cirebon, jelajahi Kota Lama Semarang, dan rasakan dinamika kota metropolitan Surabaya.</p>
            <br/>
            <h4>Rute Eksotis: Yogyakarta - Malang - Banyuwangi</h4>
            <p>Untuk para petualang, rute ini adalah jawabannya. Dari candi-candi megah di sekitar Yogya, keindahan pegunungan Bromo dari Malang, hingga pesona Kawah Ijen di Banyuwangi. Perjalanan ini akan memberikan kenangan tak terlupakan.</p>
        `,
  },
];

export const destinationAreas: DestinationArea[] = [
  {
    slug: "yogyakarta",
    province: "yogyakarta",
    name: "Panduan Wisata Yogyakarta",
    heroImage: "/destinasi/yogyakarta/yogyakarta.png",
    "data-ai-hint": "borobudur temple",
    short_description:
      "Jelajahi jantung budaya Jawa, dari candi kuno hingga kafe-kafe kekinian yang menawan.",
    destinations: [
      {
        name: "Candi Borobudur & Prambanan",
        image: "/destinasi/yogyakarta/borobudur.png",
        "data-ai-hint": "borobudur temple",
        description:
          "Saksikan kemegahan dua candi warisan dunia dalam satu perjalanan. Sunrise di Borobudur dan sunset di Prambanan adalah kombinasi sempurna.",
      },
      {
        name: "Jalan Malioboro & Keraton",
        image: "/destinasi/yogyakarta/malioboro.png",
        "data-ai-hint": "malioboro street",
        description:
          "Rasakan denyut nadi kota. Belanja batik di Malioboro, lalu selami sejarah Kesultanan Yogyakarta di Keraton.",
      },
      {
        name: "Heha Sky View & Heha Ocean View",
        image: "/destinasi/yogyakarta/heha.png",
        "data-ai-hint": "yogyakarta viewpoint",
        description:
          "Nikmati pemandangan kota dari atas bukit atau panorama laut selatan yang dramatis. Spot foto-foto yang Instagramable.",
      },
      {
        name: "Goa Jomblang & Goa Pindul",
        image: "/destinasi/yogyakarta/goa-jomblang.png",
        "data-ai-hint": "jomblang cave",
        description:
          'Petualangan memacu adrenalin. Saksikan "cahaya surga" di Goa Jomblang dan susuri sungai bawah tanah di Goa Pindul.',
      },
    ],
  },
  {
    slug: "bali",
    province: "bali",
    name: "Panduan Wisata Bali",
    heroImage: "/destinasi/bali/bali.png",
    "data-ai-hint": "bali beach",
    short_description:
      "Temukan surga tropis di Pulau Dewata, dari pantai-pantai eksotis hingga sawah terasering yang menenangkan.",
    destinations: [
      {
        name: "Ubud & Tegalalang",
        image: "/destinasi/bali/ubud.png",
        "data-ai-hint": "ubud rice fields",
        description:
          "Pusat spiritual dan budaya. Jelajahi sawah terasering Tegalalang, Monkey Forest, dan pasar seni yang ramai.",
      },
      {
        name: "Seminyak & Canggu",
        image: "/destinasi/bali/seminyak.png",
        "data-ai-hint": "seminyak beach club",
        description:
          "Area trendi yang penuh dengan butik mewah, restoran kelas atas, dan beach club yang stylish untuk menikmati matahari terbenam.",
      },
      {
        name: "Uluwatu & Nusa Dua",
        image: "/destinasi/bali/uluwatu.png",
        "data-ai-hint": "uluwatu temple cliff",
        description:
          "Pemandangan pura di atas tebing yang dramatis, tarian Kecak saat senja, dan pantai-pantai berpasir putih yang mewah.",
      },
      {
        name: "Nusa Penida",
        image: "/destinasi/bali/nusa-penida.png",
        "data-ai-hint": "klingking beach",
        description:
          "Surganya para fotografer. Kunjungi Kelingking Beach yang ikonik, Angel's Billabong, dan Crystal Bay untuk snorkeling.",
      },
    ],
  },
  {
    slug: "medan",
    province: "sumatera-utara",
    name: "Panduan Wisata Medan & Sekitarnya",
    heroImage: "/destinasi/medan/medan.png",
    "data-ai-hint": "lake toba",
    short_description:
      "Gerbang menuju keajaiban alam Sumatera Utara, mulai dari danau vulkanik raksasa hingga dataran tinggi yang sejuk.",
    destinations: [
      {
        name: "Danau Toba & Pulau Samosir",
        image: "/destinasi/medan/danau-toba.png",
        "data-ai-hint": "lake toba samosir",
        description:
          "Jelajahi danau vulkanik terbesar di dunia. Kunjungi desa-desa tradisional Batak di Pulau Samosir dan nikmati pemandangan spektakuler.",
      },
      {
        name: "Berastagi & Gundaling",
        image: "/destinasi/medan/gundaling.png",
        "data-ai-hint": "berastagi highlands",
        description:
          "Dataran tinggi yang sejuk dengan pemandangan Gunung Sinabung dan Sibayak. Jangan lupa kunjungi pasar buah dan bunga yang segar.",
      },
      {
        name: "Istana Maimun & Masjid Raya",
        image: "/destinasi/medan/ISTANA MAIMUN.png",
        "data-ai-hint": "maimun palace",
        description:
          "Saksikan kemegahan arsitektur Kesultanan Deli di jantung kota Medan. Perpaduan gaya Melayu, Islam, dan Eropa.",
      },
      {
        name: "Taman Alam Lumbini",
        image: "/destinasi/medan/pagoda.png",
        "data-ai-hint": "lumbini park pagoda",
        description:
          "Temukan replika Pagoda Shwedagon dari Myanmar yang megah dan berkilauan emas di tengah kesejukan Berastagi.",
      },
    ],
  },
  {
    slug: "jakarta",
    province: "jakarta",
    name: "Panduan Wisata & Bisnis Jakarta",
    heroImage: "/destinasi/jakarta/Jakarta Sunset - Sudirman.png",
    "data-ai-hint": "jakarta skyline",
    short_description:
      "Jelajahi dinamika ibu kota, dari gedung pencakar langit, pusat perbelanjaan mewah, hingga kota tua yang bersejarah.",
    destinations: [
      {
        name: "Kota Tua & Pelabuhan Sunda Kelapa",
        image: "/destinasi/jakarta/kota-tua.png",
        "data-ai-hint": "kota tua jakarta",
        description:
          "Kembali ke masa lalu di pusat Batavia. Kunjungi Museum Fatahillah dan lihat kapal-kapal Pinisi yang megah di pelabuhan kuno.",
      },
      {
        name: "Monas & Museum Nasional",
        image: "/destinasi/jakarta/monas.png",
        "data-ai-hint": "monas monument",
        description:
          "Ikon kebanggaan Indonesia. Naik ke puncak Monas untuk pemandangan kota dan pelajari sejarah bangsa di Museum Nasional di dekatnya.",
      },
      {
        name: "Ancol & Dunia Fantasi",
        image: "/destinasi/jakarta/ancol.png",
        "data-ai-hint": "ancol dufan",
        description:
          "Pusat hiburan tepi pantai untuk semua usia. Nikmati wahana seru di Dufan, bersantai di pantai, atau kunjungi Sea World.",
      },
      {
        name: "Pusat Perbelanjaan & Kuliner",
        image: "/destinasi/jakarta/senayan.png",
        "data-ai-hint": "shopping mall interior",
        description:
          "Dari Grand Indonesia hingga Senayan City, nikmati pengalaman belanja kelas dunia dan cicipi ragam kuliner dari food court hingga fine dining.",
      },
    ],
  },
  {
    slug: "bandung",
    province: "jawa-barat",
    name: "Panduan Wisata Bandung",
    heroImage: "/destinasi/bandung/bandung.png",
    "data-ai-hint": "bandung tea plantation",
    short_description:
      "Temukan kesejukan dan kreativitas di Paris van Java, dari kawah vulkanik hingga factory outlet yang menggoda.",
    destinations: [
      {
        name: "Kawah Putih & Situ Patenggang",
        image: "/destinasi/bandung/kawah-putih.png",
        "data-ai-hint": "kawah putih",
        description:
          "Kunjungi danau kawah vulkanik yang sureal dengan air berwarna putih kehijauan, lalu bersantai di tepi danau Situ Patenggang.",
      },
      {
        name: "Lembang & Farmhouse",
        image: "/destinasi/bandung/lembang.png",
        "data-ai-hint": "lembang farmhouse",
        description:
          "Area sejuk di utara Bandung. Kunjungi Farmhouse dengan suasana Eropanya, De Ranch, atau Floating Market yang unik.",
      },
      {
        name: "Jalan Braga & Gedung Sate",
        image: "/destinasi/bandung/braga.png",
        "data-ai-hint": "braga street",
        description:
          "Susuri Jalan Braga yang historis dengan bangunan art deco-nya, dan jangan lupa berfoto di depan Gedung Sate yang ikonik.",
      },
      {
        name: "Factory Outlet & Distro",
        image: "/destinasi/bandung/factory.png",
        "data-ai-hint": "fashion store",
        description:
          "Surga belanja! Jelajahi area Jalan Riau atau Dago untuk menemukan berbagai factory outlet dan distro dengan fashion terkini.",
      },
    ],
  },
  {
    slug: "surabaya",
    province: "jawa-timur",
    name: "Panduan Wisata Surabaya",
    heroImage: "/destinasi/surabaya/surabaya.png",
    "data-ai-hint": "surabaya suramadu",
    short_description:
      "Jelajahi Kota Pahlawan, dari monumen bersejarah, jembatan megah, hingga kuliner rawon yang khas.",
    destinations: [
      {
        name: "Jembatan Suramadu",
        image: "/destinasi/surabaya/suramadu.png",
        "data-ai-hint": "suramadu bridge night",
        description:
          "Lintasi jembatan terpanjang di Indonesia yang menghubungkan Surabaya dengan Pulau Madura. Pemandangannya indah terutama di malam hari.",
      },
      {
        name: "Tugu Pahlawan & Museum 10 Nopember",
        image: "/destinasi/surabaya/tugu-pahlawan.png",
        "data-ai-hint": "tugu pahlawan",
        description:
          "Kenang kembali semangat perjuangan arek-arek Suroboyo di monumen ikonik ini dan pelajari detailnya di museum bawah tanah.",
      },
      {
        name: "House of Sampoerna",
        image: "/destinasi/surabaya/house.png",
        "data-ai-hint": "sampoerna museum",
        description:
          "Museum unik yang menampilkan sejarah industri kretek di Indonesia, bertempat di bangunan kolonial Belanda yang megah.",
      },
      {
        name: "Kenjeran Park (Kenpark)",
        image: "/destinasi/surabaya/kenpark.png",
        "data-ai-hint": "kenjeran park pagoda",
        description:
          "Area rekreasi luas dengan pemandangan laut, Pagoda Tian Ti, dan Patung Buddha Empat Wajah yang mengesankan.",
      },
    ],
  },
  {
    slug: "makassar",
    province: "sulawesi-selatan",
    name: "Panduan Wisata Makassar",
    heroImage: "/destinasi/makassar/makassar.png",
    "data-ai-hint": "losari beach",
    short_description:
      "Gerbang Indonesia Timur yang mempesona, dari pantai ikonik, benteng bersejarah, hingga surga kupu-kupu.",
    destinations: [
      {
        name: "Pantai Losari",
        image: "/destinasi/makassar/losari.png",
        "data-ai-hint": "losari beach sunset",
        description:
          "Nikmati matahari terbenam yang spektakuler sambil mencicipi Pisang Epe. Ikon kota Makassar yang tak boleh dilewatkan.",
      },
      {
        name: "Benteng Rotterdam",
        image: "/destinasi/makassar/rotterdam.png",
        "data-ai-hint": "fort rotterdam",
        description:
          "Benteng peninggalan Kerajaan Gowa-Tallo yang kemudian diperkuat oleh Belanda. Saksi bisu sejarah panjang Makassar.",
      },
      {
        name: "Taman Nasional Bantimurung",
        image: "/destinasi/makassar/bantimurung.png",
        "data-ai-hint": "bantimurung waterfall",
        description:
          'Dikenal sebagai "Kerajaan Kupu-Kupu". Nikmati keindahan air terjun, gua-gua, dan ribuan kupu-kupu yang beterbangan.',
      },
      {
        name: "Rammang-Rammang",
        image: "/destinasi/makassar/rammang.png",
        "data-ai-hint": "rammang rammang karst",
        description:
          "Susuri sungai dengan perahu di antara gugusan pegunungan karst terbesar ketiga di dunia. Pemandangan yang luar biasa.",
      },
    ],
  },
  {
    slug: "lombok",
    province: "nusa-tenggara-barat",
    name: "Panduan Wisata Lombok",
    heroImage: "/destinasi/lombok/lombok.png",
    "data-ai-hint": "lombok beach mountain",
    short_description:
      "Saingan Bali yang menawan, dengan pantai perawan, sirkuit kelas dunia, dan Gunung Rinjani yang megah.",
    destinations: [
      {
        name: "Gili Trawangan, Meno, & Air",
        image: "/destinasi/lombok/gili.png",
        "data-ai-hint": "gili trawangan beach",
        description:
          "Tiga pulau surga dengan karakter berbeda. Pesta di Gili T, bulan madu di Gili Meno, atau bersantai di Gili Air.",
      },
      {
        name: "Sirkuit Mandalika & Pantai Kuta",
        image: "/destinasi/lombok/mandalika.png",
        "data-ai-hint": "mandalika circuit",
        description:
          "Rasakan atmosfer balap internasional di Sirkuit Mandalika, lalu nikmati keindahan Pantai Kuta dengan pasir mericanya yang unik.",
      },
      {
        name: "Gunung Rinjani",
        image: "/destinasi/lombok/rinjani.png",
        "data-ai-hint": "rinjani mountain lake",
        description:
          "Salah satu pendakian terindah di Indonesia. Capai puncaknya dan saksikan keindahan Danau Segara Anak di kaldera.",
      },
      {
        name: "Desa Sade & Sukarara",
        image: "/destinasi/lombok/desa.png",
        "data-ai-hint": "sasak traditional house",
        description:
          "Pelajari budaya suku Sasak. Lihat rumah tradisional di Desa Sade dan saksikan proses menenun kain songket di Sukarara.",
      },
    ],
  },
  {
    slug: "labuan-bajo",
    province: "nusa-tenggara-timur",
    name: "Panduan Wisata Labuan Bajo & Flores",
    heroImage: "/destinasi/ntt/labuan.png",
    "data-ai-hint": "labuan bajo island",
    short_description:
      "Gerbang menuju dunia prasejarah Komodo dan keajaiban alam Flores yang tak ada habisnya.",
    destinations: [
      {
        name: "Pulau Komodo & Rinca",
        image: "/destinasi/ntt/komodo.png",
        "data-ai-hint": "komodo dragon",
        description:
          "Bertemu langsung dengan kadal raksasa prasejarah, Komodo, di habitat aslinya. Pengalaman sekali seumur hidup.",
      },
      {
        name: "Pulau Padar",
        image: "/destinasi/ntt/padar.png",
        "data-ai-hint": "padar island",
        description:
          "Daki ke puncak dan dapatkan pemandangan ikonik tiga teluk dengan warna pantai yang berbeda. Salah satu spot foto terbaik di Indonesia.",
      },
      {
        name: "Pink Beach & Manta Point",
        image: "/destinasi/ntt/pink.png",
        "data-ai-hint": "pink beach drone",
        description:
          "Bersantai di pantai berpasir merah muda yang langka, lalu snorkeling atau diving bersama ikan pari Manta yang anggun.",
      },
      {
        name: "Gua Rangko",
        image: "/destinasi/ntt/rangko.png",
        "data-ai-hint": "rangko cave",
        description:
          "Temukan kolam renang alami dengan air asin yang jernih di dalam gua. Cahaya matahari yang masuk menciptakan efek magis.",
      },
    ],
  },
  {
    slug: "raja-ampat",
    province: "papua-barat-daya",
    name: "Panduan Wisata Raja Ampat",
    heroImage: "/destinasi/raja-ampat/papua.png",
    "data-ai-hint": "raja ampat islands",
    short_description:
      "Surga terakhir di bumi. Jelajahi kepulauan dengan keanekaragaman hayati laut terkaya di dunia.",
    destinations: [
      {
        name: "Wayag & Pianemo",
        image: "/destinasi/raja-ampat/wayang.png",
        "data-ai-hint": "wayag islands",
        description:
          "Dua ikon Raja Ampat. Daki bukit karst untuk melihat pemandangan gugusan pulau yang menakjubkan. Pianemo adalah versi mininya.",
      },
      {
        name: "Arborek & Sawinggrai",
        image: "/destinasi/raja-ampat/arborek.png",
        "data-ai-hint": "arborek village pier",
        description:
          "Kunjungi desa wisata yang ramah dan alami kehidupan lokal. Dermaga di desa-desa ini adalah spot snorkeling yang luar biasa.",
      },
      {
        name: "Pasir Timbul & Friwen Wall",
        image: "/destinasi/raja-ampat/pasir.png",
        "data-ai-hint": "sandbar raja ampat",
        description:
          "Berjalan di atas pasir putih di tengah lautan biru saat air surut di Pasir Timbul. Lalu, jelajahi dinding karang yang indah di Friwen.",
      },
      {
        name: "Melihat Burung Cenderawasih",
        image: "/destinasi/raja-ampat/burung.png",
        "data-ai-hint": "bird of paradise",
        description:
          "Bangun pagi-pagi dan trekking ke dalam hutan untuk menyaksikan tarian magis dari Burung Cenderawasih, sang burung surga.",
      },
    ],
  },
];
