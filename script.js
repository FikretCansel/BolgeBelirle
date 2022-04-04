let sehirx = 3000;
let sehiry = 1000;

let parselx = 1000;
let parsely = 1000;

var parseller = [];

class parsel {
  constructor(x, y, parselId) {
    this.x = x;
    this.y = y;
    this.parselId = parselId;
  }
}

let tempkalanx = sehirx;
let index = 1;
let indey = 1;
let parselId = 1;
let tempkalany = sehiry;
while (tempkalanx >= parselx) {
  tempkalanx = tempkalanx - parselx;
  tempkalany = sehiry;
  while (tempkalany >= parsely) {
    tempkalany = tempkalany - parselx;

    parseller.push(new parsel(index, indey, parselId));
    parselId++;
    indey++;
  }
  indey = 1;
  index++;
}

parseller.forEach((item) => {
  console.log(item.x + "," + item.y, ",", item.parselId);
});

class ev {
  constructor(x, y, parsel) {
    this.x = x;
    this.y = y;
    this.parsel = parsel;
  }
}

let evler = [new ev(1200, 10), new ev(20, 10), new ev(15, 20), new ev(1400,10),new ev(2000,50)];

// for (let evIndex = 0; evIndex < evler.length; evIndex++) {

//     for (let parselIndex = 0; parselIndex < parseller.length; parselIndex++) {
//         let parselXSag=parseller[parselIndex].x*parselx;
//         let parselYSol=parselXSag-parselx;

//         if(parselXSag<=evler[evIndex].x && parselYSol>evler[evIndex].x){
//             evler[evIndex].parsel=parseller[parselIndex];
//         }
//     }

// }

evler.forEach((evItem) => {
  parseller.forEach((parselItem) => {
    let parselXSag = parselItem.x * parselx;
    let parselXSol = parselXSag - parselx;

    console.log("Parsel Araliklari :" + parselXSol + "," + parselXSag);

    if (parselXSag >= evItem.x && parselXSol < evItem.x) {
      console.log("Ev 1 burda");
      evItem.parsel = parselItem;
    }
  });
});


console.log("-------------------------------")


evler.forEach(element => {
    console.log(element)
});

console.log("-------------------------------")


parseller.forEach((parselItem) => {
  let toplamx = 0;
  let toplamy = 0;
  let evsayi=0;
  evler.forEach((evItem) => {
    if (evItem.parsel.parselId === parselItem.parselId) {
        evsayi++;
      toplamx += evItem.x;
      toplamy += evItem.y;

    }
  });

  console.log(toplamx);
  console.log(toplamy);

  let toplanmaAlanix = toplamx / evsayi;
  let toplanmaAlaniy = toplamy / evsayi;

  console.log("ParselId"+parselItem.parselId+" - ("+parselItem.x + ","+ parselItem.y +") Toplanma ALani X :" + toplanmaAlanix.toString()+"Toplanma Alani Y:" + toplanmaAlaniy.toString());

  toplamx = 0;
  toplamy = 0;
});

// let tuneluzunlugu=1000;
// let tunalgenisligi=1.435;

// let hacim=tuneluzunlugu*tunalgenisligi;

// console.log(hacim)
