// var myObj = {
//     mykey : 'myValue' //mykey = object, myValue = nilainya
// };

var DzakkiObj = {
    id: "17abcd",
    name: "Muzakki",
    age: "17",
    favorites: [
        "reading",
        {
            coding: [{
                PHP : ["Codeigneter", "Laravel"]
            }, "JS"],
            sports: ["Swimming", "Martial"]
        }
    ],
    address: {
        street: "Karangasem Amlapura",
        zipCode: 80813
    }
};

console.log(DzakkiObj);
console.log(DzakkiObj.id); //memanggil id
console.log(DzakkiObj.name); //memanggil name
console.log(DzakkiObj.favorites); // memanggil favorites
console.log(DzakkiObj.favorites[1].coding);
console.log(DzakkiObj.favorites[1].coding[1]);
console.log(DzakkiObj.address)
console.log(DzakkiObj.height = 160) //menambkah property
console.log(DzakkiObj.height)
console.log(DzakkiObj.age++) //mengedit age
console.log(DzakkiObj.age)
console.log(DzakkiObj.favorites[1].sports[1]);
console.log(DzakkiObj.favorites[1].coding[0].PHP);

//gilaaaaa