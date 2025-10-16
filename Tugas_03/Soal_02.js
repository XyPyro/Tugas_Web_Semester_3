function jajanBoba(uang, callback) {
  console.log("Kamu pergi membeli boba...");
  const hargaBoba = 5000;
  const waktuBoba = 5000;

  setTimeout(() => {
    if (uang >= hargaBoba) {
      uang -= hargaBoba;
      console.log(`Kamu jajan boba dengan harga Rp. ${hargaBoba}`);
      console.log(`Uang kamu Rp. ${uang}\n`);
      callback(uang);
    } else {
      console.log(`Maaf, uang kamu belum cukup untuk membeli boba`);
      console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
    }
  }, waktuBoba);
}

function jajanSeblak(uang) {
  console.log("Sekarang kamu ingin membeli seblak...");
  const hargaSeblak = 8000;
  const waktuSeblak = 9000;

  setTimeout(() => {
    if (uang >= hargaSeblak) {
      uang -= hargaSeblak;
      console.log(`Kamu jajan seblak dengan harga Rp. ${hargaSeblak}`);
      console.log(`Uang kamu sebesar Rp. ${uang}\n`);
    } else {
      console.log(`Maaf, uang kamu belum cukup untuk membeli seblak`);
      console.log(`Sisa uang kamu sebesar Rp. ${uang}`);
    }
  }, waktuSeblak);
}

jajanBoba(20000, jajanSeblak);