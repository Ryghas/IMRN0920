// if-else
var nama = "Agung";
var peran = "Warewolf";

console.log("Output if-else"); // Soal if-else
if (nama == "") // ketika nama tidak diisi
{
    console.log('"Nama harus diisi!"');
    console.log(''); // spasi
} else if (peran == "") // ketika peran tidak diisi 
{
    console.log('"Halo ' + nama + ', Pilih peranmu untuk memulai game!"')
    console.log(''); // spasi
} else 
{
    if (peran == "Penyihir") // ketika peran penjadi Penyihir
    {
        console.log('"Selamat datang di Dunia Werewolf, ' + nama + '"');
        console.log('"Halo Penyihir ' + nama + ', kamu dapat melihat siapa yang menjadi warewolf!"');
        console.log(''); // spasi
    } else if (peran == "Guard") // ketika peran menjadi Guard 
    {
        console.log('"Selamat datang di Dunia Werewolf, ' + nama + '"');
        console.log('"Halo Guard ' + nama + ', kamu akan membantu melindungi temanmu dari serangan werewolf."');
        console.log(''); // spasi
    } else // ketika peran menjadi Warewolf 
    {
        console.log('"Selamat datang di Dunia Werewolf, ' + nama + '"');
        console.log('"Halo Warewolf ' + nama + ', Kamu akan memakan mangsa setiap malam!"');
        console.log(''); // spasi antara soal
    }

}


// Switch Case
var hari = 30; 
var bulan = 4; 
var tahun = 1996;

console.log("Output switch case"); // Soal switch case
switch(true) {
    case (hari >= 1 && hari <= 31): 
        hari = hari;
        break;
    default:
    hari = 'tanggal_error' // jika tanggal lebih dari 31
        break;
}
switch(true) {
    case (bulan == 1):
        bulan = 'Januari';
        break;
    case (bulan == 2):
        bulan = 'Febuari';
        break;
    case (bulan == 3):
        bulan = 'Maret';
        break;
    case (bulan == 4):
        bulan = 'April';
        break;
    case (bulan == 5):
        bulan = 'Mei';
        break;
    case (bulan == 6):
        bulan = 'Juni';
        break;
    case (bulan == 7):
        bulan = 'Juli';
        break;
    case (bulan == 8):
        bulan = 'Agustus';
        break;
    case (bulan == 9):
        bulan = 'September';
        break;
    case (bulan == 10):
        bulan = 'Oktober';
        break;
    case (bulan == 11):
        bulan = 'November';
        break;
    case (bulan == 12):
        bulan = 'Desember';
        break;
    default:
        bulan = 'bulan_error'; // jika bukan diantara bulan 1-12
        break;
}
switch(true) {
    case (tahun >= 1900 && tahun <= 2200):
        tahun = tahun;
        break;
    default:
        tahun = 'tahun_error'; // jika tahun kurang dari 1900 dan lebih dari 2200
        break;

}

switch(true) {
  case (hari == 'tanggal_error' || bulan == 'bulan_error' || tahun == 'tahun_error'):
    console.log('perhatikan tanggal, bulan dan tahun yang anda input, pastikan tidak melebihi ketentuan')
    break;
  default:
    console.log(hari + ' ' + bulan + ' ' + tahun);
    break;

}