const maxKursi = 5;

function Angkot(sopir, trayek, kas, penumpang) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      // telusuri jika ada kursi kosong dari awal
      for (var i = 0; i < this.penumpang.length; i++) {
        // jika ada kursi kosong
        if (this.penumpang[i] === undefined) {
          this.penumpang[i] = namaPenumpang;
          return penumpang;
        }
        // jika sudah ada nama yang sama
        if (penumpang[i] == namaPenumpang) {
          console.log(namaPenumpang + " sudah di dalam angkot!!!");
          return this.penumpang;
        }
      }
      // jika semua kursi sudah terisi
      if (this.penumpang.length < maxKursi) {
        penumpang.push(namaPenumpang);
        return this.penumpang;
      } else {
        console.log("Maaf penumpang Penuh! tidak bisa menambahkan " + namaPenumpang);
        return this.penumpang;
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    //jika angkot kosong
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong");
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.kas += bayar;
          this.penumpang[i] = undefined;
          return penumpang;
        }
      }
      console.log(namaPenumpang + " tidak ada di dalam angkot");
      return penumpang;
    }
  };
}

var angkot1 = new Angkot("Yudhi", ["Semarang - Wonosobo"], 0, []);
var angkot2 = new Angkot("Dani", ["Semarang - Demak"], 0, []);