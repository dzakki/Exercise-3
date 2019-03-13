// function namaFunction(parameter 1, parameter 2, ...) {
//     [Isi dari function berupa tindakan]
//     return [expression];
//   }

function tampilkan() {
    console.log('hello Word!');
}
tampilkan();

function munculAngka() {
    return 1000
}

var tampung = munculAngka(); //menampung function munculangka()
console.log(tampung);

function Tambah8(angka) {
    return angka + 9;
}

function tampilAngka(angkaPertama,angkaKedua) {
    return angkaPertama  + angkaKedua;
}

function tampilkanAngka(angka = 1) { //params default 1
    return angka
}
console.log([tampilkanAngka(1), tampilAngka(100,9)]);
console.log(tampung, Tambah8(9), tampilAngka(10,2), tampilkanAngka(10), tampilkanAngka(), );

var fungsiPenambahan = function (angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua;
}

console.log(fungsiPenambahan(10, 30));
// console.log(fungsiPenambahan(10)); hasil Nan
console.log(fungsiPenambahan);

