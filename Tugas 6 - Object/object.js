// Soal No. 1 (Array to Object)
console.log('Soal No. 1 (Array to Object)'); // title soal
var now = new Date();
var thisYear = now.getFullYear();

function arrayToObject(arr) {
  
  for (var i = 0; i < arr.length; i++) 
  {
    var umur = thisYear - arr[i][3];
    var invalid = 'Invalid Birth Year'
    var fullName = (i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ': ';
    var akhir = '';
    switch (true) {
      case ((umur <= 0) || (arr[i][3] == null)):
      var parseObject = {
      firstName : arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : invalid
      }
      break;
      case (arr == '[]') :
      akhir = console.log('');
      default:
      var parseObject = {
      firstName : arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : umur
      }
      break;
    }
    var a = console.log(fullName);
    var b = console.log(parseObject); 
  }
  return a + b + akhir;
}
 
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people); 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2); 
arrayToObject([]);
console.log('') // spasi antar soal

// Soal No. 2 (Shopping Time)
console.log('Soal No. 2 (Shopping Time)'); // title soal

function shoppingTime(memberId, money) {
  var promoSale = {};
  promoSale['Sepatu Stacattu'] = 1500000;
  promoSale['Baju Zoro'] = 500000;
  promoSale['Baju H&N'] = 250000;
  promoSale['Sweater Uniklooh'] = 175000;
  promoSale['Casing Handphone'] = 50000;

  var shopping = {};
  shopping['memberId'] = memberId;
  shopping['money'] = money;
  shopping['listPurchased'] = '';
  shopping['changeMoney'] = '';

  var notice1 =  'Mohon maaf, toko X hanya berlaku untuk member saja';
  var notice2 = 'Mohon maaf, uang tidak cukup';
  var item = Object.keys(promoSale);
  var harga = Object.values(promoSale);
  var parseMerk = [];

  if(!memberId) {
    return notice1;
  } else if (money < 50000) {
    return notice2;
  } else {
        for (var i = 0; harga.length; i++)
    {
      if (money >= harga[i]) {
        shopping.changeMoney = money -= harga[i];
        parseMerk.push(item[i]);
      } else {
        shopping.changeMoney - money;
      }
      shopping.lisPurchased = parseMerk;
    }
  }
  return shopping;
}
 
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
console.log(''); // spasi antar soal

// Soal No. 3 (Naik Angkot)
console.log('Soal No. 3 (Naik Angkot)'); // title Soal
function naikAngkot(arrPenumpang) {
  var bayar;
  var hasil_angkot = '';
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (var i = 0; i <= rute.length; i++) 
  {
    bayar = bayar + 2000;
  }
  var parseObjectPenumpang = {
      penumpang : arrPenumpang[i][0],
      naikDari : arrPenumpang[i][1],
      tujuan : arr[i][2],
      bayar : bayar
      }
  hasil_angkot = console.log(parseObjectPenumpang);
  return hasil_angkot;
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]