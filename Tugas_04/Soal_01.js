function downloadFile() {
  console.log("Memulai proses download...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        resolve("File berhasil diunduh!");
      } else {
        reject("Gagal mengunduh file. Periksa koneksi Anda.");
      }
    }, 3000);
  });
}

async function checkDownload() {
  try {
    const result = await downloadFile();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkDownload();
