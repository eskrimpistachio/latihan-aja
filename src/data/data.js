export const oprecInfo = [
  {
    id: "2022-OprecStaffAhli", // id oprec formatnya tahun-oprec
    name: "Oprec Staff Ahli", // nama buat di tentang
    title: [
      "Open Recruitment", // line 1
      "Staff Ahli BEM FILKOM 2022", // line 2
    ],
    description:
      "Open Recruitment Staff Ahli BEM FILKOM UB 2022 merupakan salah satu langkah awal untuk menjalankan roda organisasi dengan dimulainya periode kepengurusan dari BEM FILKOM UB 2022. Kegiatan ini dilaksanakan dengan melakukan penjaringan bagi mahasiswa FILKOM angkatan 2020 dan 2021 yang ingin berkontribusi menjadi staff ahli dalam BEM FILKOM 2022.",
    logo: "https://res.cloudinary.com/ewik/image/upload/v1643615575/aryakarsa_mqgum4.png", // gambar logo di home, login, dan robot image
    landingImage: `${process.env.PUBLIC_URL}/assets/OprecStaffAhli.jpg`,
    closeDate: new Date("2022-02-17T23:59:59.999+07:00"),
    announceDate: new Date("2022-02-21T16:00:00.999+07:00"),
    onlyFor: [20, 21], // Angkatan berapa yg diterima
    extends: true, //Extends atau tidak 
    timeline: [
      { date: "12 - 17 Februari 2022", description: "Pendaftaran Online 📝" },
      { date: "12 - 17 Februari 2022", description: "Pengumpulan Berkas 📋" },
      { date: "13 - 18 Februari 2022", description: "Screening 👨‍💻" },
      { date: "19 Februari 2022", description: "Focus Group Discussion 💬" },
      { date: "21 Februari 2022", description: "Pengumuman 📢" },
    ], //semisal extends timelinenya diubah juga
    quotes:
      "Don't block your potential by limiting expectations. Dare to try and see what you can.", //kalo gaada quotes bisa dikosongkan
    options: [
      " KEMENTERIAN PSDM DIRJEN KADERISASI",
      " KEMENTERIAN PSDM DIRJEN PENGEMBANGAN PERMBERDAYAAN MAHASISWA",
      " KEMENTERIAN PERHUB DIRJEN DALAM NEGERI",
      " KEMENTERIAN PERHUB DIRJEN LUAR NEGERI",
      " KEMENTERIAN INOVASI DAN KARYA",
      " KEMENTERIAN EKONOMI KREATIF",
      " KEMENTERIAN ADVOKESMA DIRJEN ADVOKASI KEBIJAKAN KAMPUS",
      " KEMENTERIAN ADVOKESMA DIRJEN KESEJAHTERAAN MAHASISWA",
      " KEMENTERIAN KASTRAT DIRJEN KEBIJAKAN KAMPUS",
      " KEMENTERIAN KASTRAT DIRJEN KEBIJAKAN PUBLIK",
      " KEMENTERIAN SOSLING DIRJEN SOSIAL MASYARAKAT",
      " KEMENTERIAN SOSLING DIRJEN LINGKUNGAN HIDUP",
      " BIRO PENGEMBANGAN INFORMASI DAN TEKNOLOGI",
      " BIRO ADKEU BAGIAN ADMINISTRASI DAN KESEKRETARIATAN",
      " BIRO ADKEU BAGIAN KEUANGAN",
      " BIRO MEDINKRAF BAGIAN MEDIA KREATIF",
      " BIRO MEDINKRAF BAGIAN MEDIA INFORMASI",
    ], //pilihan divisi
    alur: [
      {
        description:
          "1. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM (website ini)",
      },
      {
        description:
          "2. Peserta mengunduh dan mengisi berkas pendaftaran (dalam bentuk soft file)",
        titleLink: "Download berkas soft file (email UB)",
        link: "https://drive.google.com/drive/folders/1h2ddvVE9bB6Jj--KIK0nWyz41WfFdXjp?usp=sharing",
      },
      {
        description:
          "3. Peserta membaca Panduan Open Recruitment, serta membaca Peraturan Umum dan Kode Etik.",
      },
      {
        description:
          "4. Peserta mengunduh twibbon yang telah disediakan lalu mengunggah foto diri melalui media sosial instagram pribadi, serta tag akun instagram @bemfilkomub",
        note: "Untuk mempermudah penggunaan twibbon, dapat mengakses link berikut:",
        titleLink: "Twibbon Oprec",
        link: "https://www.twibbonize.com/oprecstaff2022",
      },
      {
        description:
          "5. Peserta mengunggah berkas pendaftaran ke dalam Google Drive pribadi (akses link folder Google Drive wajib public/shareable)",
      },
      {
        description:
          "6. Peserta menyetujui surat pernyataan komitmen yang telah diisi serta menyetujui Peraturan Umum dan Kode Etik BEM FILKOM 2022.",
      },
      {
        description:
          "7. Peserta mengisi data diri dan mengunggah link Google Drive yang berisi berkas pendaftaran pada website BEM FILKOM 2022.",
      },
      {
        description:
          "8. Peserta akan mendapatkan informasi terkait jadwal interview.",
        note: "NB: Pemberitahuan tentang jadwal interview akan diinformasikan paling lambat H+2 setelah peserta mendaftarkan diri melalui website BEM FILKOM 2022.",
      },
    ], //isi dari alur pendaftaran
    formFields: [
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
      },
      {
        name: "tanggal_lahir", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kapan tanggal lahir kamu? (format: DD-Month-YYYY)", //pertanyaan yang ditampilin
        placeholder: "cth: 31 Februari 2002",
      },
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
      },
      {
        name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kamu biasa dipanggil gimana?", //pertanyaan yang ditampilin
        placeholder: "cth: Rezky",
      },
      {
        name: "alamat", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat rumah kamu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur",
      },
      {
        name: "id_line", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: rezkysutomo232",
      },
      {
        name: "motto", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa motto hidup kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jangan pernah menyerah apapun yang terjadi.",
      },
      {
        name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Apa motivasi kamu untuk mendaftarkan diri sebagai calon staff ahli bem filkom ub 2022?", //pertanyaan yang ditampilin
        placeholder: "cth: Saya ingin menambah pengalaman berorganisasi.",
      },
      {
        name: "pilihan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Pertama kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "pilihan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Kedua kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "email", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa email kamu? (email UB)", //pertanyaan yang ditampilin
        placeholder: "cth: rezkysutomo@student.ub.ac.id",
        pattern: "[a-z0-9]+@student.ub.ac.id", //pattern regex kalo perlu
      },
      {
        name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
        placeholder: "cth: https://drive.google.com/xxxxx",
        pattern: "/(drive.google.com)/", //pattern regex kalo perlu
      },
    ], //isi dari form field chat
    api: {
      auth: "https://bemfilkom-rest.vercel.app/auth",
      check: "https://bemfilkom-rest.vercel.app/check/2022/OprecStaffAhli", // Check if registrant is already registered
      register:
        "https://bemfilkom-rest.vercel.app/register/2022/OprecStaffAhli", // Input registrant data
      announce:
        "https://bemfilkom-rest.vercel.app/announce/2022/OprecStaffAhli", // Check registrant's acceptance status
    },
    afterMessage: [
      "Terima kasih!",
      "Selamat kamu telah berhasil terdaftar sebagai calon Staff Ahli BEM FILKOM 2022!",
      "Informasi mengenai Screening akan diinformasikan melalui Line pendaftar.",
      // 🥰"
    ],
    closedMessage: [
      "Maaf!",
      "Pendaftaran sudah ditutup 🙏",
      "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
    ],
    acceptMessage: [
      "Selamat!!!",
      "Kamu berhasil lolos menjadi Staff Ahli BEM FILKOM 2022! 🥳\n\n",
      "Untuk informasi lebih lanjut, kamu bisa join ke : \n <a target='_blank' href='https://intip.in/ciptakanperan' class='text-blue-800 font-bold'>intip.in/ciptakanperan</a> \n\n Jika ada masalah, kamu bisa hubungi narahubung line di bawah ini : \nratusalmaalk (Ratu) \naufaazz (Aufa) \ncesiliaaaaa (Cesil) \n\n Mari #CiptakanPeran! ",
    ],
    rejectMessage: [
      "Mohon maaf",
      "Kamu belum berhasil lolos.",
      "Terimakasih telah berpartisipasi, tetap semangat, dan sampai bertemu di kesempatan selanjutnya! 😊",
    ],
  },
  {
    id: "2022-OprecStaffMuda", // id oprec formatnya tahun-oprec
    name: "Oprec Staff Muda", // nama buat di tentang
    title: [
      "Open Recruitment", // line 1
      "Staff Muda BEM FILKOM 2022", // line 2
    ],
    description:
      "Open Recruitment Staff Ahli BEM FILKOM UB 2022 merupakan salah satu langkah awal untuk menjalankan roda organisasi dengan dimulainya periode kepengurusan dari BEM FILKOM UB 2022. Kegiatan ini dilaksanakan dengan melakukan penjaringan bagi mahasiswa FILKOM angkatan 2020 dan 2021 yang ingin berkontribusi menjadi staff ahli dalam BEM FILKOM 2022.",
    logo: "https://res.cloudinary.com/ewik/image/upload/v1643615575/aryakarsa_mqgum4.png", // gambar logo di home, login, dan robot image
    landingImage: `${process.env.PUBLIC_URL}/assets/OprecStaffAhli.jpg`,
    closeDate: new Date("2022-02-17T23:59:59.999+07:00"),
    announceDate: new Date("2022-02-21T16:00:00.999+07:00"),
    onlyFor: [20, 21], // Angkatan berapa yg diterima
    extends: true, //Extends atau tidak 
    timeline: [
      { date: "12 - 17 Februari 2022", description: "Pendaftaran Online 📝" },
      { date: "12 - 17 Februari 2022", description: "Pengumpulan Berkas 📋" },
      { date: "13 - 18 Februari 2022", description: "Screening 👨‍💻" },
      { date: "19 Februari 2022", description: "Focus Group Discussion 💬" },
      { date: "21 Februari 2022", description: "Pengumuman 📢" },
    ], //semisal extends timelinenya diubah juga
    quotes:
      "Don't block your potential by limiting expectations. Dare to try and see what you can.", //kalo gaada quotes bisa dikosongkan
    options: [
      " KEMENTERIAN PSDM DIRJEN KADERISASI",
      " KEMENTERIAN PSDM DIRJEN PENGEMBANGAN PERMBERDAYAAN MAHASISWA",
      " KEMENTERIAN PERHUB DIRJEN DALAM NEGERI",
      " KEMENTERIAN PERHUB DIRJEN LUAR NEGERI",
      " KEMENTERIAN INOVASI DAN KARYA",
      " KEMENTERIAN EKONOMI KREATIF",
      " KEMENTERIAN ADVOKESMA DIRJEN ADVOKASI KEBIJAKAN KAMPUS",
      " KEMENTERIAN ADVOKESMA DIRJEN KESEJAHTERAAN MAHASISWA",
      " KEMENTERIAN KASTRAT DIRJEN KEBIJAKAN KAMPUS",
      " KEMENTERIAN KASTRAT DIRJEN KEBIJAKAN PUBLIK",
      " KEMENTERIAN SOSLING DIRJEN SOSIAL MASYARAKAT",
      " KEMENTERIAN SOSLING DIRJEN LINGKUNGAN HIDUP",
      " BIRO PENGEMBANGAN INFORMASI DAN TEKNOLOGI",
      " BIRO ADKEU BAGIAN ADMINISTRASI DAN KESEKRETARIATAN",
      " BIRO ADKEU BAGIAN KEUANGAN",
      " BIRO MEDINKRAF BAGIAN MEDIA KREATIF",
      " BIRO MEDINKRAF BAGIAN MEDIA INFORMASI",
    ], //pilihan divisi
    alur: [
      {
        description:
          "1. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM (website ini)",
      },
      {
        description:
          "2. Peserta mengunduh dan mengisi berkas pendaftaran (dalam bentuk soft file)",
        titleLink: "Download berkas soft file (email UB)",
        link: "https://drive.google.com/drive/folders/1h2ddvVE9bB6Jj--KIK0nWyz41WfFdXjp?usp=sharing",
      },
      {
        description:
          "3. Peserta membaca Panduan Open Recruitment, serta membaca Peraturan Umum dan Kode Etik.",
      },
      {
        description:
          "4. Peserta mengunduh twibbon yang telah disediakan lalu mengunggah foto diri melalui media sosial instagram pribadi, serta tag akun instagram @bemfilkomub",
        note: "Untuk mempermudah penggunaan twibbon, dapat mengakses link berikut:",
        titleLink: "Twibbon Oprec",
        link: "https://www.twibbonize.com/oprecstaff2022",
      },
      {
        description:
          "5. Peserta mengunggah berkas pendaftaran ke dalam Google Drive pribadi (akses link folder Google Drive wajib public/shareable)",
      },
      {
        description:
          "6. Peserta menyetujui surat pernyataan komitmen yang telah diisi serta menyetujui Peraturan Umum dan Kode Etik BEM FILKOM 2022.",
      },
      {
        description:
          "7. Peserta mengisi data diri dan mengunggah link Google Drive yang berisi berkas pendaftaran pada website BEM FILKOM 2022.",
      },
      {
        description:
          "8. Peserta akan mendapatkan informasi terkait jadwal interview.",
        note: "NB: Pemberitahuan tentang jadwal interview akan diinformasikan paling lambat H+2 setelah peserta mendaftarkan diri melalui website BEM FILKOM 2022.",
      },
    ], //isi dari alur pendaftaran
    formFields: [
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Setelah ini, jawablah pertanyaan-pertanyaan di bawah pada textbox yang disediakan.", //pertanyaan yang ditampilin
      },
      {
        name: "tanggal_lahir", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kapan tanggal lahir kamu? (format: DD-Month-YYYY)", //pertanyaan yang ditampilin
        placeholder: "cth: 31 Februari 2002",
      },
      {
        is_robot: true, //kalo bukan pertanyaan dari robot diilangin juga gpp
        questions:
          "Mantap Betul! Kalau kamu ingin mengubah jawaban, kamu bisa klik/tap pada jawaban yang ingin kamu ubah lalu mengubah isian di textbox.", //pertanyaan yang ditampilin
      },
      {
        name: "nama_panggilan", //name nya disesuain sama nama kolom yang di supabase
        questions: "Kamu biasa dipanggil gimana?", //pertanyaan yang ditampilin
        placeholder: "cth: Rezky",
      },
      {
        name: "alamat", //name nya disesuain sama nama kolom yang di supabase
        questions: "Di mana alamat rumah kamu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur",
      },
      {
        name: "id_line", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa ID Line kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: rezkysutomo232",
      },
      {
        name: "motto", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa motto hidup kamu?", //pertanyaan yang ditampilin
        placeholder: "cth: Jangan pernah menyerah apapun yang terjadi.",
      },
      {
        name: "motivasi", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Apa motivasi kamu untuk mendaftarkan diri sebagai calon staff ahli bem filkom ub 2022?", //pertanyaan yang ditampilin
        placeholder: "cth: Saya ingin menambah pengalaman berorganisasi.",
      },
      {
        name: "pilihan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Pertama kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan1", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "pilihan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Pilih Kementerian/Kebiroan Pilihan Kedua kamu!", //pertanyaan yang ditampilin
        placeholder: "Klik/tap untuk melihat dropdown...",
      },
      {
        name: "alasan2", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa alasan kamu memilih Kementerian/Kebiroan itu?", //pertanyaan yang ditampilin
        placeholder:
          "cth: Karena saya tertarik dengan Kementerian/Kebiroan ini.",
      },
      {
        name: "email", //name nya disesuain sama nama kolom yang di supabase
        questions: "Apa email kamu? (email UB)", //pertanyaan yang ditampilin
        placeholder: "cth: rezkysutomo@student.ub.ac.id",
        pattern: "[a-z0-9]+@student.ub.ac.id", //pattern regex kalo perlu
      },
      {
        name: "link_drive", //name nya disesuain sama nama kolom yang di supabase
        questions:
          "Terakhir, masukkan link Google Drive berkas soft file kamu. Jangan lupa permission-nya harus sudah di-set ke public (anyone with link can view).", //pertanyaan yang ditampilin
        placeholder: "cth: https://drive.google.com/xxxxx",
        pattern: "/(drive.google.com)/", //pattern regex kalo perlu
      },
    ], //isi dari form field chat
    api: {
      auth: "https://bemfilkom-rest.vercel.app/auth",
      check: "https://bemfilkom-rest.vercel.app/check/2022/OprecStaffAhli", // Check if registrant is already registered
      register:
        "https://bemfilkom-rest.vercel.app/register/2022/OprecStaffAhli", // Input registrant data
      announce:
        "https://bemfilkom-rest.vercel.app/announce/2022/OprecStaffAhli", // Check registrant's acceptance status
    },
    afterMessage: [
      "Terima kasih!",
      "Selamat kamu telah berhasil terdaftar sebagai calon Staff Ahli BEM FILKOM 2022!",
      "Informasi mengenai Screening akan diinformasikan melalui Line pendaftar.",
      // 🥰"
    ],
    closedMessage: [
      "Maaf!",
      "Pendaftaran sudah ditutup 🙏",
      "Jika kamu sudah mendaftar, semangat dan selamat mengikuti proses pendaftaran yang selanjutnya! Jika belum, pantau terus info lainnya di media sosial BEM FILKOM UB.",
    ],
    acceptMessage: [
      "Selamat!!!",
      "Kamu berhasil lolos menjadi Staff Ahli BEM FILKOM 2022! 🥳\n\n",
      "Untuk informasi lebih lanjut, kamu bisa join ke : \n <a target='_blank' href='https://intip.in/ciptakanperan' class='text-blue-800 font-bold'>intip.in/ciptakanperan</a> \n\n Jika ada masalah, kamu bisa hubungi narahubung line di bawah ini : \nratusalmaalk (Ratu) \naufaazz (Aufa) \ncesiliaaaaa (Cesil) \n\n Mari #CiptakanPeran! ",
    ],
    rejectMessage: [
      "Mohon maaf",
      "Kamu belum berhasil lolos.",
      "Terimakasih telah berpartisipasi, tetap semangat, dan sampai bertemu di kesempatan selanjutnya! 😊",
    ],
  }
];
