class Kubus {
  constructor(sisi) {
    this.sisi = sisi;
  }

  luasKubus() {
    return 6 * this.sisi * this.sisi;
  }
}

const kubus = new Kubus(25);
console.log("Luas kubus:", kubus.luasKubus());