//! --------- UYGULAMALAR ---------



//* --------- ÇARPIM TABLOSU --------- 

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j))
    }
    console.log("------------------------------------------");
}


//* --------- ASAL SAYI BULMA --------- 


let sayi1 = Number(prompt("Sayı giriniz: "));
let sonuc1 = true;

for (let i = 2; i < Math.floor(sayi1 / 2); i++) {
    if (sayi1 % 2 == 0) {
        //asal değildir
        sonuc1 = false;
        break;
    }
}
if (sonuc) {
    alert(sayi1 + " asaldır");
} else {
    alert(sayi1 + " asal değildir");
}


//* --------- FAKTORİYEL BULMA --------- 


let sayi2 = Number(prompt("Sayıyı giriniz: "));
let sonuc2 = 1;

for (let i = 1; i <= sayi; i++) {
    sonuc2 *= i;
}
console.log(sonuc2);


//* --------- ARMSTRONG SAYISI --------- 

// 153 - 370 - 407

// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 +27 = 153

let sayi3 = prompt("Sayıyı giriniz: ");
let toplam3 = 0;

for (let i = 0; i < sayi3.length; i++) {
    let rakam = sayi3.charAt(i);
    toplam += rakam * rakam * rakam;
}

if (Number(sayi3) == toplam3) {
    alert("Armstrong sayısıdır.");
} else {
    alert("Armstrong sayısı değişdir.");
}