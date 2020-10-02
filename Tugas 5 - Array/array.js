// Soal no 1 (Range)
function range(start, end) {
  var rangeArray = [];
  switch(true)
  {
    case (start == null || end == null) :
    rangeArray = -1;
    break;
    case (start < end) :
    for (let i = start; i <= end; i++) 
    {
      rangeArray.push(i);
    }
    break;
    case ( start > end) :
    for (let i = start; i >= end; i--)
    {
      rangeArray.push(i);
    }
    break;
    default:
    break;
  }
  return rangeArray;
}

console.log('Output Soal no 1 Range'); // title soal
console.log(range(1, 10));
console.log(range(1));
console.log(range(11,18));
console.log(range(54, 50));
console.log(range()); 
console.log(''); // spasi antar soal


// Soal no 2 (Range with Step)
function rangeWithStep(start, end, step) {
  var range = [];
  typeof step == "undefined" && (step = 1);
  if (end < start) {
      step = -step;
  }
  while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
  }
  return range;
}

console.log('Output Soal no 2 Range with Step'); // title soal
console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4)); 
console.log(''); // spasi antar soal


// Soal no 3 (Sum of array)
function sum(start, end, step) {
var range = [];
  var total = 0;
  typeof step == "undefined" && (step = 1);

  switch(true) {
    case ((start == null) && (end == null)):
      total = 0;
      break;
    case (end == null):
      total = start;
      break;
    case ((start != null) && (end != null)):
      if (end < start) 
      {
        step = -step;
      }
      while (step > 0 ? end >= start : end <= start) 
      {
        range.push(start);
        start += step;
      }
      for (var i = 0; i < range.length; i++) 
      {
        total += range[i];
      }
      
    default:
      break;
  }
  return total;
}

console.log('Output Soal no 3 Sum of Array'); // title soal
console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());
console.log(''); // spasi antara soal


// Soal no 4 Array Multidimensi
function dataHandling(inputs) {
  
  for (var i = 0, l1 = inputs.length; i < l1; i++) 
  {
    for (var j = 0, l2 = inputs[i].length; j < l2; j++) 
    {
      if (j == 0) 
      {
        console.log('Nomor ID : ' + inputs[i][j]);
      } else if (j == 1) 
      {
        console.log('Nama Lengkap : ' + inputs[i][j]);
      } else if ((j == 2)) 
      {
        console.log('TTL : ' + inputs[i][2] + ' ' + inputs[i][3]);
      } else if(j == 4) 
      {
        console.log('Hobi : ' + inputs[i][j]);
      }
    }
  }
}

var inputs = 
  [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ] 
console.log('Output Soal no 4 Array Multidimensi'); // title soal    
console.log(dataHandling(inputs));
console.log('') // spasi antara soal


// Soal no 5 Balik Kata
function balikKata(str) {
var currentString = str;
var newString = '';

for (let i = str.length - 1; i >= 0; i--) {
newString = newString + currentString[i];
}
return newString;
}

console.log('Output Soal no 5 Balik Kata'); // title soal
console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));
console.log(''); // spasi antara soal 

// Soal no 6 Metode Array
function dataHandling2(input) {
  var new_tanggal = '';
  var nama_baru_max = '';
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice( 4, 1, "Pria");
  input.splice(5, 0, "SMA Internasional Metro");
  console.log(input);
  var tanggal = input.slice(3,4);
  new_tanggal += tanggal;
  var a = new_tanggal.split('/');
  var bulan = a.slice(1,2);
  switch(true) {
    case ((bulan == 1) || (bulan == '01')) :
        bulan = 'Januari';
        break;
    case ((bulan == 2) || (bulan == '02')):
        bulan = 'Febuari';
        break;
    case ((bulan == 3) || (bulan == '03')):
        bulan = 'Maret';
        break;
    case ((bulan == 4) || (bulan == '04')):
        bulan = 'April';
        break;
    case ((bulan == 5) || (bulan == '05')):
        bulan = 'Mei';
        break;
    case ((bulan == 6) || (bulan == '06')):
        bulan = 'Juni';
        break;
    case ((bulan == 7) || (bulan == '07')):
        bulan = 'Juli';
        break;
    case ((bulan == 8) || (bulan == '08')):
        bulan = 'Agustus';
        break;
    case ((bulan == 9) || (bulan == '09')):
        bulan = 'September';
        break;
    case ((bulan == 10) || (bulan == '10')):
        bulan = 'Oktober';
        break;
    case ((bulan == 11) || (bulan == '11')):
        bulan = 'November';
        break;
    case ((bulan == 12) || (bulan == '12')):
        bulan = 'Desember';
        break;
    default:
        bulan = 'bulan error'; // jika bukan diantara bulan 1-12
        break; 
  }
  console.log(bulan);
  a.sort(short_desencing);
  console.log(a);
  var b = new_tanggal.split('/');
  var c = b.join('-');
  console.log(c);
  var nama_baru = input.slice(1,2);
  nama_baru_max += nama_baru;
  console.log(nama_baru_max.substring(0,14));
}

function short_desencing(awal, akhir)
{
  return akhir - awal;
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log('Soal no 6 Metode Array');
dataHandling2(input);