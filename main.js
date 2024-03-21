let name1 = prompt("Ismingizni kiriting :");
let letter = prompt("Birorta harf kiriting :");

let check = name1.toLowerCase().includes(letter.toLowerCase());

if (check) {
    alert("Kiritilgan ism ichida bu harf mavjud")
}else {
    alert("Kiritilgan ism ichida bu harf mavjud emas")
}