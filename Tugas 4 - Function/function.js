// Soal no 1
function teriak() {
    var output = '"Halo Sanbers!"';
    return output;
  }
  
  console.log('No. 1'); // title no soal
  console.log(teriak());
  console.log(''); // spasi antar soal
  
  // Soal no 2
  function kalikan(num1, num2) {
    return num1 * num2;
  }
   
  var num1 = 12;
  var num2 = 4;
   
  console.log('No. 2'); // title no soal
  var hasilKali = kalikan(num1, num2);
  console.log(hasilKali);
  console.log(''); // spasi antar soal
  
  // Soal No 3
  function introduce(name, age, address, hobby) {
      var output = '"Nama Saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!"';
      return output;
  }
   
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogyakarta";
  var hobby = "Gaming";
  
  console.log('No. 3'); // title no soal
  var perkenalan = introduce(name, age, address, hobby);
  console.log(perkenalan);
  console.log(''); // spasi antar soal