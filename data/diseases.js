// =============================================
// Plant Disease Dummy Data
// Simulated AI Detection Results
// =============================================

/**
 * Array of plant diseases with details
 * Each disease includes: id, name, description, confidence range, and treatment recommendations
 */
const diseases = [
  {
    id: 1,
    name: 'Bercak Daun (Leaf Spot)',
    latinName: 'Alternaria spp.',
    description: 'Bercak daun adalah penyakit yang disebabkan oleh jamur yang menyerang daun tanaman. Gejalanya berupa bintik-bintik coklat atau hitam dengan lingkaran konsentris pada permukaan daun. Dapat menyebabkan daun menguning dan gugur prematur.',
    symptoms: [
      'Bintik coklat atau hitam pada daun',
      'Lingkaran konsentris pada bercak',
      'Daun menguning di sekitar bercak',
      'Daun gugur sebelum waktunya'
    ],
    confidenceMin: 85,
    confidenceMax: 95,
    severity: 'Sedang',
    recommendations: [
      'Pangkas dan buang daun yang terinfeksi untuk mencegah penyebaran',
      'Aplikasikan fungisida berbahan aktif mankozeb atau klorotalonil setiap 7-10 hari',
      'Pastikan sirkulasi udara baik dengan jarak tanam yang cukup',
      'Hindari penyiraman dari atas yang membasahi daun',
      'Lakukan rotasi tanaman untuk memutus siklus hidup jamur',
      'Gunakan mulsa untuk mencegah percikan tanah ke daun'
    ],
    prevention: [
      'Tanam varietas yang tahan penyakit',
      'Jaga kebersihan lahan dari sisa tanaman',
      'Lakukan penyiraman di pagi hari',
      'Hindari kelembaban berlebih'
    ]
  },
  {
    id: 2,
    name: 'Embun Tepung (Powdery Mildew)',
    latinName: 'Oidium spp.',
    description: 'Embun tepung adalah penyakit jamur yang membentuk lapisan putih seperti tepung pada permukaan daun. Jamur ini berkembang pesat dalam kondisi lembab dengan suhu sedang, dapat menghambat fotosintesis dan pertumbuhan tanaman.',
    symptoms: [
      'Lapisan putih seperti tepung pada daun',
      'Daun mengkerut dan berubah bentuk',
      'Pertumbuhan tanaman terhambat',
      'Daun menjadi kering dan gugur'
    ],
    confidenceMin: 80,
    confidenceMax: 92,
    severity: 'Tinggi',
    recommendations: [
      'Semprotkan larutan baking soda (1 sendok makan per liter air) sebagai fungisida alami',
      'Aplikasikan fungisida sistemik berbahan aktif sulfur atau trifloxystrobin',
      'Potong dan musnahkan bagian tanaman yang terinfeksi parah',
      'Tingkatkan sirkulasi udara dengan pemangkasan yang tepat',
      'Kurangi kelembaban dengan mengatur jarak tanam',
      'Semprotkan di pagi hari saat embun telah kering'
    ],
    prevention: [
      'Pilih lokasi dengan sinar matahari cukup',
      'Hindari pemupukan nitrogen berlebih',
      'Semprotkan preventif fungisida organik',
      'Jaga kebersihan area tanam'
    ]
  },
  {
    id: 3,
    name: 'Hawar Daun (Leaf Blight)',
    latinName: 'Phytophthora spp.',
    description: 'Hawar daun adalah penyakit serius yang disebabkan oleh jamur atau bakteri. Ditandai dengan bercak coklat kehitaman yang meluas dengan cepat, menyebabkan daun layu dan mati. Menyebar cepat dalam kondisi lembab.',
    symptoms: [
      'Bercak coklat kehitaman yang meluas cepat',
      'Tepi daun mengering dan menggulung',
      'Daun layu dan mati',
      'Dapat menyerang batang dan buah'
    ],
    confidenceMin: 78,
    confidenceMax: 90,
    severity: 'Tinggi',
    recommendations: [
      'Segera buang dan bakar tanaman yang terinfeksi berat',
      'Aplikasikan fungisida berbahan aktif metalaksil atau dimethomorph',
      'Semprot dengan interval 5-7 hari pada musim hujan',
      'Perbaiki drainase lahan untuk mengurangi kelembaban',
      'Hindari penyiraman berlebihan dan genangan air',
      'Sterilisasi alat pemangkasan setelah digunakan'
    ],
    prevention: [
      'Gunakan benih atau bibit bersertifikat',
      'Tanam pada lahan dengan drainase baik',
      'Aplikasi fungisida preventif saat musim hujan',
      'Lakukan sanitasi lahan secara rutin'
    ]
  },
  {
    id: 4,
    name: 'Busuk Daun (Leaf Rot)',
    latinName: 'Pythium spp.',
    description: 'Busuk daun adalah penyakit yang menyebabkan pembusukan pada jaringan daun. Dimulai dari tepi daun dengan bercak basah yang kemudian membusuk. Penyakit ini berkembang pesat dalam kondisi kelembaban tinggi dan sanitasi buruk.',
    symptoms: [
      'Bercak basah berair pada daun',
      'Jaringan daun membusuk dan berbau',
      'Daun menjadi lunak dan rontok',
      'Pertumbuhan jamur putih pada area busuk'
    ],
    confidenceMin: 82,
    confidenceMax: 94,
    severity: 'Sedang',
    recommendations: [
      'Buang segera semua daun yang menunjukkan gejala pembusukan',
      'Aplikasikan bakterisida atau fungisida tembaga',
      'Kurangi frekuensi penyiraman dan kelembaban',
      'Tingkatkan drainase dengan membuat bedengan lebih tinggi',
      'Berikan pupuk kalium untuk memperkuat dinding sel tanaman',
      'Hindari pemupukan nitrogen berlebihan yang membuat daun lembek'
    ],
    prevention: [
      'Pastikan drainase lahan sempurna',
      'Jaga kebersihan area sekitar tanaman',
      'Hindari penyiraman di sore/malam hari',
      'Beri jarak tanam yang cukup'
    ]
  },
  {
    id: 5,
    name: 'Karat Daun (Leaf Rust)',
    latinName: 'Puccinia spp.',
    description: 'Karat daun adalah penyakit jamur yang menghasilkan pustula berwarna kuning, oranye, atau coklat kemerahan pada permukaan daun. Spora jamur mudah menyebar melalui angin dan air, dapat menyebabkan penurunan hasil signifikan.',
    symptoms: [
      'Pustula berwarna kuning/oranye pada daun',
      'Bubuk karat saat daun disentuh',
      'Daun menguning dan gugur prematur',
      'Penurunan vigor tanaman'
    ],
    confidenceMin: 75,
    confidenceMax: 88,
    severity: 'Sedang',
    recommendations: [
      'Aplikasikan fungisida berbahan aktif triadimefon atau propikonazol',
      'Semprot dengan interval 10-14 hari',
      'Kumpulkan dan musnahkan daun yang gugur',
      'Tingkatkan nutrisi tanaman dengan pupuk lengkap NPK',
      'Pastikan tanaman mendapat sinar matahari cukup',
      'Lakukan penyemprotan di pagi hari untuk efektivitas maksimal'
    ],
    prevention: [
      'Tanam varietas tahan karat',
      'Hindari penanaman terlalu rapat',
      'Lakukan monitoring rutin',
      'Aplikasi fungisida preventif pada musim rentan'
    ]
  },
  {
    id: 6,
    name: 'Antraknosa (Anthracnose)',
    latinName: 'Colletotrichum spp.',
    description: 'Antraknosa adalah penyakit jamur yang menyerang daun, batang, dan buah. Ditandai dengan bercak coklat gelap yang cekung dengan tepi lebih gelap. Dapat menyebabkan kerusakan serius terutama pada buah.',
    symptoms: [
      'Bercak coklat gelap dengan tepi hitam',
      'Bercak cekung pada buah',
      'Daun berlubang setelah bercak kering',
      'Buah membusuk sebelum matang'
    ],
    confidenceMin: 77,
    confidenceMax: 91,
    severity: 'Tinggi',
    recommendations: [
      'Gunakan fungisida berbahan aktif azoksistrobin atau difenokonazol',
      'Semprot secara menyeluruh termasuk bagian bawah daun',
      'Buang dan musnahkan buah yang terinfeksi',
      'Lakukan pemangkasan untuk meningkatkan sirkulasi udara',
      'Aplikasi fungisida setiap 7 hari pada masa kritis',
      'Panen buah pada waktu yang tepat, jangan terlambat'
    ],
    prevention: [
      'Gunakan bibit sehat',
      'Hindari luka pada tanaman',
      'Jaga kebersihan alat pertanian',
      'Lakukan rotasi tanaman'
    ]
  },
  {
    id: 7,
    name: 'Layu Bakteri (Bacterial Wilt)',
    latinName: 'Ralstonia solanacearum',
    description: 'Layu bakteri adalah penyakit serius yang menyebabkan tanaman layu mendadak meskipun tanah masih lembab. Bakteri menyerang sistem pembuluh, menghambat aliran air dan nutrisi.',
    symptoms: [
      'Tanaman layu mendadak di siang hari',
      'Batang mengeluarkan lendir bakteri jika dipotong',
      'Daun menguning dan layu permanen',
      'Sistem akar membusuk'
    ],
    confidenceMin: 73,
    confidenceMax: 87,
    severity: 'Sangat Tinggi',
    recommendations: [
      'Segera cabut dan musnahkan tanaman terinfeksi dengan membakar',
      'Sterilisasi tanah dengan solarisasi atau fumigasi',
      'Aplikasikan bakterisida tembaga atau streptomisin pada tanaman sehat',
      'Jangan tanam tanaman inang yang sama minimal 2-3 tahun',
      'Perbaiki drainase dan hindari kelembaban berlebih',
      'Gunakan kapur pertanian untuk menetralkan pH tanah'
    ],
    prevention: [
      'Gunakan varietas tahan penyakit',
      'Hindari luka akar saat pengolahan tanah',
      'Sterilisasi alat pertanian',
      'Rotasi tanaman dengan non-inang'
    ]
  }
];

// =============================================
// Disease Selection Functions
// =============================================

/**
 * Get a random disease from the database
 * @returns {Object} - Randomly selected disease with calculated confidence
 */
function getRandomDisease() {
  // Select random disease
  const randomIndex = Math.floor(Math.random() * diseases.length);
  const selectedDisease = diseases[randomIndex];
  
  // Generate random confidence within range
  const confidence = generateRandomConfidence(
    selectedDisease.confidenceMin,
    selectedDisease.confidenceMax
  );
  
  // Return disease with calculated confidence
  return {
    ...selectedDisease,
    confidence: confidence,
    detectedAt: new Date().toISOString()
  };
}

/**
 * Generate random confidence value within range
 * @param {number} min - Minimum confidence
 * @param {number} max - Maximum confidence
 * @returns {number} - Random confidence value with one decimal
 */
function generateRandomConfidence(min, max) {
  const random = Math.random() * (max - min) + min;
  return Math.round(random * 10) / 10; // Round to 1 decimal place
}

/**
 * Get disease by ID
 * @param {number} id - Disease ID
 * @returns {Object|null} - Disease object or null if not found
 */
function getDiseaseById(id) {
  return diseases.find(disease => disease.id === id) || null;
}

/**
 * Get all diseases
 * @returns {Array} - Array of all diseases
 */
function getAllDiseases() {
  return diseases;
}

/**
 * Select and store random disease
 * Call this when processing/analyzing image
 */
function selectAndStoreDisease() {
  const disease = getRandomDisease();
  sessionStorage.setItem('selectedDisease', JSON.stringify(disease));
  return disease;
}

// =============================================
// Auto-select disease on loading page
// =============================================

// If on loading page, automatically select disease
if (window.location.pathname.includes('loading.html')) {
  selectAndStoreDisease();
}

// Export for use in other files (if using modules)
// export { diseases, getRandomDisease, getDiseaseById, getAllDiseases, selectAndStoreDisease };

console.log('Disease data loaded:', diseases.length, 'diseases available');
