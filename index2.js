// var animals = ["Lion", "Tiger", "Puma"]
// console.log(animals)
// console.log(animals[0])
// animals[3] = "Burung"
// animals[4] = "belalang"
// console.log(animals[4])

// // animals[3] = ["Zero", 1, "Two"]
// // console.log(animals[3])

// animals.push("Macan") // menambahkan array di index terkahir
// console.log(animals)

// animals.pop()
// console.log(animals) // menghapus array di index terakhir

// var arr  = [0, 1, 2, 3, 4, 5]

// arr.unshift(6, 2)// menambah array dari index terdepan
// console.log(arr)

// arr.shift()//menghapus array yang paling terdepan
// console.log(arr)


// arr.sort()// mengurutkan angka sesuai alfabet
// console.log(arr)

// arr.sort(function(value1, value2) { return value1 < value2 });
// console.log(arr);

// var arrSlice = arr.slice(1, 3) //mangambil nilai mulai dari index 1 sampai ke-3 tapi index ke-3 tidak muncul
// console.log(arrSlice)
// var arr = ["buku", "laptop", "komputer"]
// var arrSplice = arr.splice(0, 2, ) // mengambil nilai dari index 0 sampai index 1. index ke-2 tidak ikut dst
// var arrSplice = arr.splice(0, 2, "keyboard", "Mouse")
// console.log(arrSplice)

var arr = ["buku", "laptop", "komputer"];
arr.splice(2, 0, "televisi")
console.log(arr)
var arr = [2, 3, 1, 4, 0]
var kalimat = "Saya adalah Front-end Javascript Programmer"
var arrSplit = kalimat.split(" ")
console.log(arrSplit);
var arrSplitJoin = kalimat.split("").join(",")