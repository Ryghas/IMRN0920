// Soal no 1 (Membuat kalimat)
var word = 'JavaScript'; 
var second = 'is';
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I';
var sixth = 'love'; 
var seventh = 'it!';
var final_word = ' ' + second + ' ' + third + ' ' + fourth +' ' + fifth + ' ' + sixth + ' ' + seventh;

console.log('Output Soal no 1 (Membuat kalimat)'); // Soal
console.log(word.concat(final_word));
console.log(''); // Spasi antara Soal


// Soal no 2 Mengurai kalimat (Akses karakter dalam string)
var sentence = "I am going to be React Native Developer";

var firstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28];
var eighthWord = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38];

console.log('Output Soal no 2 Mengurai kalimat (Akses karakter dalam string)'); // Soal
console.log('First Word: ' + firstWord); 
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord);
console.log(''); // Spasi antara Soal


// Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool'; 

var firstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('Output Soal No. 3 Mengurai Kalimat (Substring)'); // Soal 
console.log('First Word: ' + firstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log(''); // Spasi antara Soal


// Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool';

var firstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17); 
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = firstWord3.length;  
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('Output Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String'); // Soal
console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);