export interface City {
    name: string;
    slug: string;
    provinceSlug: string;
    isPopular?: boolean;
}

export const cities: City[] = [
    // Aceh
    { name: "Banda Aceh", slug: "banda-aceh", provinceSlug: "aceh", isPopular: true },
    { name: "Sabang", slug: "sabang", provinceSlug: "aceh" },
    { name: "Lhokseumawe", slug: "lhokseumawe", provinceSlug: "aceh" },
    { name: "Langsa", slug: "langsa", provinceSlug: "aceh" },

    // Bali
    { name: "Denpasar", slug: "denpasar", provinceSlug: "bali", isPopular: true },
    { name: "Badung", slug: "badung", provinceSlug: "bali" },
    { name: "Gianyar", slug: "gianyar", provinceSlug: "bali" },
    { name: "Tabanan", slug: "tabanan", provinceSlug: "bali" },
    { name: "Singaraja", slug: "singaraja", provinceSlug: "bali" },
    { name: "Kuta", slug: "kuta", provinceSlug: "bali", isPopular: true },
    { name: "Ubud", slug: "ubud", provinceSlug: "bali", isPopular: true },

    // Banten
    { name: "Tangerang", slug: "tangerang", provinceSlug: "banten" },
    { name: "Tangerang Selatan", slug: "tangerang-selatan", provinceSlug: "banten" },
    { name: "Serang", slug: "serang", provinceSlug: "banten", isPopular: true },
    { name: "Cilegon", slug: "cilegon", provinceSlug: "banten" },
    { name: "Pandeglang", slug: "pandeglang", provinceSlug: "banten" },

    // Bengkulu
    { name: "Bengkulu", slug: "bengkulu", provinceSlug: "bengkulu", isPopular: true },

    // Gorontalo
    { name: "Gorontalo", slug: "gorontalo", provinceSlug: "gorontalo", isPopular: true },

    // DKI Jakarta
    { name: "Jakarta Pusat", slug: "jakarta-pusat", provinceSlug: "jakarta", isPopular: true },
    { name: "Jakarta Selatan", slug: "jakarta-selatan", provinceSlug: "jakarta", isPopular: true },
    { name: "Jakarta Barat", slug: "jakarta-barat", provinceSlug: "jakarta" },
    { name: "Jakarta Timur", slug: "jakarta-timur", provinceSlug: "jakarta" },
    { name: "Jakarta Utara", slug: "jakarta-utara", provinceSlug: "jakarta" },
    { name: "Kepulauan Seribu", slug: "kepulauan-seribu", provinceSlug: "jakarta" },

    // Jambi
    { name: "Jambi", slug: "jambi", provinceSlug: "jambi", isPopular: true },

    // Jawa Barat
    { name: "Bandung", slug: "bandung", provinceSlug: "jawa-barat", isPopular: true },
    { name: "Bogor", slug: "bogor", provinceSlug: "jawa-barat", isPopular: true },
    { name: "Bekasi", slug: "bekasi", provinceSlug: "jawa-barat" },
    { name: "Depok", slug: "depok", provinceSlug: "jawa-barat" },
    { name: "Cirebon", slug: "cirebon", provinceSlug: "jawa-barat", isPopular: true },
    { name: "Tasikmalaya", slug: "tasikmalaya", provinceSlug: "jawa-barat" },
    { name: "Sukabumi", slug: "sukabumi", provinceSlug: "jawa-barat" },
    { name: "Cimahi", slug: "cimahi", provinceSlug: "jawa-barat" },
    { name: "Karawang", slug: "karawang", provinceSlug: "jawa-barat" },
    { name: "Purwakarta", slug: "purwakarta", provinceSlug: "jawa-barat" },

    // Jawa Tengah
    { name: "Semarang", slug: "semarang", provinceSlug: "jawa-tengah", isPopular: true },
    { name: "Surakarta", slug: "surakarta", provinceSlug: "jawa-tengah", isPopular: true },
    { name: "Magelang", slug: "magelang", provinceSlug: "jawa-tengah", isPopular: true },
    { name: "Salatiga", slug: "salatiga", provinceSlug: "jawa-tengah" },
    { name: "Pekalongan", slug: "pekalongan", provinceSlug: "jawa-tengah" },
    { name: "Tegal", slug: "tegal", provinceSlug: "jawa-tengah" },
    { name: "Kudus", slug: "kudus", provinceSlug: "jawa-tengah" },
    { name: "Cilacap", slug: "cilacap", provinceSlug: "jawa-tengah" },
    { name: "Purwokerto", slug: "purwokerto", provinceSlug: "jawa-tengah" },
    
    // DI Yogyakarta
    { name: "Yogyakarta", slug: "yogyakarta", provinceSlug: "yogyakarta", isPopular: true },
    { name: "Sleman", slug: "sleman", provinceSlug: "yogyakarta" },
    { name: "Bantul", slug: "bantul", provinceSlug: "yogyakarta" },
    { name: "Kulon Progo", slug: "kulon-progo", provinceSlug: "yogyakarta" },
    { name: "Gunungkidul", slug: "gunungkidul", provinceSlug: "yogyakarta" },

    // Jawa Timur
    { name: "Surabaya", slug: "surabaya", provinceSlug: "jawa-timur", isPopular: true },
    { name: "Malang", slug: "malang", provinceSlug: "jawa-timur", isPopular: true },
    { name: "Sidoarjo", slug: "sidoarjo", provinceSlug: "jawa-timur" },
    { name: "Gresik", slug: "gresik", provinceSlug: "jawa-timur" },
    { name: "Kediri", slug: "kediri", provinceSlug: "jawa-timur" },
    { name: "Jember", slug: "jember", provinceSlug: "jawa-timur" },
    { name: "Banyuwangi", slug: "banyuwangi", provinceSlug: "jawa-timur", isPopular: true },
    { name: "Madiun", slug: "madiun", provinceSlug: "jawa-timur" },
    { name: "Probolinggo", slug: "probolinggo", provinceSlug: "jawa-timur" },

    // Kalimantan Barat
    { name: "Pontianak", slug: "pontianak", provinceSlug: "kalimantan-barat", isPopular: true },
    { name: "Singkawang", slug: "singkawang", provinceSlug: "kalimantan-barat" },

    // Kalimantan Selatan
    { name: "Banjarmasin", slug: "banjarmasin", provinceSlug: "kalimantan-selatan", isPopular: true },
    { name: "Banjarbaru", slug: "banjarbaru", provinceSlug: "kalimantan-selatan" },

    // Kalimantan Tengah
    { name: "Palangkaraya", slug: "palangkaraya", provinceSlug: "kalimantan-tengah", isPopular: true },

    // Kalimantan Timur
    { name: "Samarinda", slug: "samarinda", provinceSlug: "kalimantan-timur", isPopular: true },
    { name: "Balikpapan", slug: "balikpapan", provinceSlug: "kalimantan-timur", isPopular: true },
    { name: "Bontang", slug: "bontang", provinceSlug: "kalimantan-timur" },

    // Kalimantan Utara
    { name: "Tanjung Selor", slug: "tanjung-selor", provinceSlug: "kalimantan-utara", isPopular: true },
    { name: "Tarakan", slug: "tarakan", provinceSlug: "kalimantan-utara" },

    // Kepulauan Bangka Belitung
    { name: "Pangkal Pinang", slug: "pangkal-pinang", provinceSlug: "kepulauan-bangka-belitung", isPopular: true },

    // Kepulauan Riau
    { name: "Batam", slug: "batam", provinceSlug: "kepulauan-riau", isPopular: true },
    { name: "Tanjungpinang", slug: "tanjungpinang", provinceSlug: "kepulauan-riau" },

    // Lampung
    { name: "Bandar Lampung", slug: "bandar-lampung", provinceSlug: "lampung", isPopular: true },
    { name: "Metro", slug: "metro", provinceSlug: "lampung" },

    // Maluku
    { name: "Ambon", slug: "ambon", provinceSlug: "maluku", isPopular: true },

    // Maluku Utara
    { name: "Ternate", slug: "ternate", provinceSlug: "maluku-utara", isPopular: true },

    // Nusa Tenggara Barat
    { name: "Mataram", slug: "mataram", provinceSlug: "nusa-tenggara-barat", isPopular: true },
    { name: "Bima", slug: "bima", provinceSlug: "nusa-tenggara-barat" },

    // Nusa Tenggara Timur
    { name: "Kupang", slug: "kupang", provinceSlug: "nusa-tenggara-timur", isPopular: true },
    { name: "Labuan Bajo", slug: "labuan-bajo", provinceSlug: "nusa-tenggara-timur", isPopular: true },

    // Papua
    { name: "Jayapura", slug: "jayapura", provinceSlug: "papua", isPopular: true },
    { name: "Merauke", slug: "merauke", provinceSlug: "papua" },
    
    // Papua Barat
    { name: "Manokwari", slug: "manokwari", provinceSlug: "papua-barat", isPopular: true },
    { name: "Sorong", slug: "sorong", provinceSlug: "papua-barat" },
    
    // Papua Barat Daya
    { name: "Sorong", slug: "sorong-kota", provinceSlug: "papua-barat-daya", isPopular: true },
    { name: "Raja Ampat", slug: "raja-ampat", provinceSlug: "papua-barat-daya", isPopular: true },

    // Papua Pegunungan
    { name: "Wamena", slug: "wamena", provinceSlug: "papua-pegunungan", isPopular: true },

    // Papua Selatan
    { name: "Merauke", slug: "merauke-kota", provinceSlug: "papua-selatan", isPopular: true },

    // Papua Tengah
    { name: "Nabire", slug: "nabire", provinceSlug: "papua-tengah", isPopular: true },
    { name: "Timika", slug: "timika", provinceSlug: "papua-tengah" },

    // Riau
    { name: "Pekanbaru", slug: "pekanbaru", provinceSlug: "riau", isPopular: true },
    { name: "Dumai", slug: "dumai", provinceSlug: "riau" },

    // Sulawesi Barat
    { name: "Mamuju", slug: "mamuju", provinceSlug: "sulawesi-barat", isPopular: true },

    // Sulawesi Selatan
    { name: "Makassar", slug: "makassar", provinceSlug: "sulawesi-selatan", isPopular: true },
    { name: "Parepare", slug: "parepare", provinceSlug: "sulawesi-selatan" },
    { name: "Palopo", slug: "palopo", provinceSlug: "sulawesi-selatan" },

    // Sulawesi Tengah
    { name: "Palu", slug: "palu", provinceSlug: "sulawesi-tengah", isPopular: true },

    // Sulawesi Tenggara
    { name: "Kendari", slug: "kendari", provinceSlug: "sulawesi-tenggara", isPopular: true },
    { name: "Baubau", slug: "baubau", provinceSlug: "sulawesi-tenggara" },

    // Sulawesi Utara
    { name: "Manado", slug: "manado", provinceSlug: "sulawesi-utara", isPopular: true },
    { name: "Bitung", slug: "bitung", provinceSlug: "sulawesi-utara" },
    { name: "Tomohon", slug: "tomohon", provinceSlug: "sulawesi-utara" },

    // Sumatera Barat
    { name: "Padang", slug: "padang", provinceSlug: "sumatera-barat", isPopular: true },
    { name: "Bukittinggi", slug: "bukittinggi", provinceSlug: "sumatera-barat", isPopular: true },
    { name: "Payakumbuh", slug: "payakumbuh", provinceSlug: "sumatera-barat" },

    // Sumatera Selatan
    { name: "Palembang", slug: "palembang", provinceSlug: "sumatera-selatan", isPopular: true },
    { name: "Prabumulih", slug: "prabumulih", provinceSlug: "sumatera-selatan" },

    // Sumatera Utara
    { name: "Medan", slug: "medan", provinceSlug: "sumatera-utara", isPopular: true },
    { name: "Pematangsiantar", slug: "pematangsiantar", provinceSlug: "sumatera-utara" },
    { name: "Tebing Tinggi", slug: "tebing-tinggi", provinceSlug: "sumatera-utara" },
    { name: "Binjai", slug: "binjai", provinceSlug: "sumatera-utara" },
];

export function getCityName(provinceSlug: string, citySlug: string): City | undefined {
    // Handle potential duplicate slugs like Sorong
    if (provinceSlug === 'papua-barat-daya' && citySlug === 'sorong') {
        return cities.find(c => c.provinceSlug === provinceSlug && c.slug === 'sorong-kota');
    }
     if (provinceSlug === 'papua-selatan' && citySlug === 'merauke') {
        return cities.find(c => c.provinceSlug === provinceSlug && c.slug === 'merauke-kota');
    }
    return cities.find(c => c.provinceSlug === provinceSlug && c.slug === citySlug);
}

export function getPopularCities(): City[] {
    return cities.filter(c => c.isPopular);
}
