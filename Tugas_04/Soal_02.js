//a. Code Promise
// const url = "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Gagal mengambil data API");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("Judul Film:", data.title);
//     console.log("Deskripsi:", data.description);
//   })
//   .catch(error => {
//     console.error("Terjadi kesalahan:", error);
//   });

//b. Code Async/Await
const url = "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";

async function getFilm() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Gagal mengambil data API");
    }
    const data = await response.json();
    console.log("Judul Film:", data.title);
    console.log("Deskripsi:", data.description);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

getFilm();
