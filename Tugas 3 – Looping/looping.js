// Soal no 1 Looping while
console.log('Output Soal no 1 Looping while'); // title soal
var flag = 1;
var flag2 = 21;

console.log('LOOPING PERTAMA');
while (flag < 20) 
{ 
  flag++;
  if ((flag%2) == 0) 
  {
    console.log(flag + ' - I love coding');
  }
}
console.log('LOOPING KEDUA');
while (flag2 > 1) 
{
  flag2--;
  if ((flag2%2) == 0) 
  {
    console.log(flag2 + ' - I will become a mobile developer');
  }
}
console.log(''); // spasi antar soal


// Soal no 2 Looping menggunakan for
console.log('Output Soal no 2 Looping for'); // title soal
for (var angka = 1; angka <= 20; angka++) 
{
    if ((angka%2) == 0) // jika genap 
    {
        console.log(angka + ' - Berkualitas');
    } else if (((angka%3) == 0) && ((angka%2) == 1)) // jika kelipatan 3 dan ganjil
    {
        console.log(angka + ' - I Love Coding');
    } else // jika ganjil
    {
        console.log(angka + ' - Santai')
    }
}
console.log(''); // spasi antar soal

// Soal no 3 Membuat Persegi Panjang #
console.log('Output Soal no 3 Membuat Persegi Panjang #');
var p = 4;
var l = 8;
var pp = '';
var i, j;
 
for (i = 1; i <= p; i++) // perulangan panjang
{ 
  for (j = 1; j <= l; j++) // perulangan lebar
  { 
    pp += '#';                      
  } 
  pp += '\n';
} 
console.log(pp);
console.log(''); // spasi antar soal

// Soal no 4 Membuat tangga
console.log('output Soal no 4 Membuat tangga');
var tangga = 7;
var i2, j2;
var tt = '';
 
for(let i2 = 1; i2 <= tangga; i2++ ){
  for(let j2 = 1; j2 <= tangga; j2++)
  {
    if(i2 >= j2 )
    {
      tt += '#';
    }
  }
  tt += '\n';
}
console.log(tt);
console.log(''); // spasi antar soal

// Soal no 5 Membuat Papan Catur
console.log('Output Soal no 5 Membuat Papan Catur');
var s = 8;
var ps = '';
var i3, j3;
 
for (i3 = 1; i3 <= s; i3++) 
{ 
  for (j3 = 1; j3 <= s; j3++)
  { 
    switch(true) 
    {
      case (((j3%2) == 0 && ((i3%2) == 0))):
          ps += ' ';
          break;
      case ((j3%2) == 1 && ((i3%2) == 0)):
          ps += '#';
          break;
      case (((j3%2) == 0 && ((i3%2) == 1))):
          ps += '#';
          break;
      case ((j3%2) == 1 && ((i3%2) == 1)):
          ps += ' ';
          break;
      default:
          break;
    }                      
  } 
  ps += '\n';
} 
console.log(ps);
