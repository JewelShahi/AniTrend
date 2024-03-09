const image = document.getElementById("img");
const imageSources = [
  "https://wallpapersbq.com/images/bleach/bleach-wallpaper-3.webp",
  "https://wallpapercave.com/wp/wp8994577.jpg",
  "https://images8.alphacoders.com/950/950031.jpg",
  "https://images4.alphacoders.com/131/1319312.jpeg",
  "https://images5.alphacoders.com/119/1191178.jpg",
  "https://images4.alphacoders.com/119/1194217.jpg",
  "https://images4.alphacoders.com/118/1185023.jpg",
  "https://images2.alphacoders.com/991/991889.jpg",
  "https://wallpapers.com/images/hd/tokyo-ghoul-desktop-6ce7nxurfa6rfi3v.jpg",
  "https://images.alphacoders.com/125/1253078.jpg",
  "https://rare-gallery.com/uploads/posts/308123-Dr.-Stone-Characters-Senku-Ishigami-4K.jpg",
  "https://wallpapers.com/images/hd/death-note-4k-tasa19kio3xv9rao.jpg",
  "https://free4kwallpapers.com/uploads/originals/2022/03/14/-attack-on-titan-wallpaper.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/8954.jpg",
  "https://images.alphacoders.com/132/1328411.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae67dbcc-91f7-4369-a654-3159c9f4a09f/dfq3cbd-986ff415-b9ba-4d23-8e56-7dd5fb31a3cd.jpg/v1/fill/w_1280,h_720,q_75,strp/high_quality_4k_konosuba_wallpaper_by_sdugoten_dfq3cbd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYWU2N2RiY2MtOTFmNy00MzY5LWE2NTQtMzE1OWM5ZjRhMDlmXC9kZnEzY2JkLTk4NmZmNDE1LWI5YmEtNGQyMy04ZTU2LTdkZDVmYjMxYTNjZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zrFK6KZ8nepIZNhwnZNPcpj2kmRrpP6hHGB6SLsL1gI",
  "https://images2.alphacoders.com/114/1143190.jpg",
  "https://images4.alphacoders.com/704/704377.png",
  "https://www.manga-news.com/public/images/dvd/I-m-Standing-on-a-Million-Lives-anime-s2-visual-3.jpg",
  "https://images3.alphacoders.com/124/1244670.jpg",
  "https://images5.alphacoders.com/132/1325882.png",
  "https://w.forfun.com/fetch/ee/ee074da833712a423ec6c9e7a378e10f.jpeg",
  "https://wallpapers.com/images/hd/bungou-stray-dogs-mgubb3t08xbbrtgp.jpg",
  "https://images.alphacoders.com/132/1324648.jpeg",
  "https://staticg.sportskeeda.com/editor/2023/07/fd900-16903266704050-1920.jpg",
  "https://images2.alphacoders.com/719/thumb-1920-719031.jpg",
];
const buttonContainer = document.getElementById("dots");

if (imageSources.length < 5) {
  imageSources.forEach((src, index) => {
    const button = document.createElement("button");
    button.textContent = `${index + 1}`;
    button.addEventListener("click", () => {
      image.src = src;
    });

    buttonContainer.appendChild(button);
  });
} else {
  const buttons = ["◄", "►"];

  buttons.forEach((text, index) => {
    const button = document.createElement("button");
    button.classList.add("button");
    button.style.height = "40px";
    button.style.padding = "0px 10px";
    button.textContent = text;
    button.addEventListener("click", () => {
      if (index === 0) {
        currentIndex =
          currentIndex > 0 ? currentIndex - 1 : imageSources.length - 1;
      } else {
        currentIndex =
          currentIndex < imageSources.length - 1 ? currentIndex + 1 : 0;
      }
      updateImage();
    });

    buttonContainer.appendChild(button);
  });

  let currentIndex = 0;

  function updateImage() {
    image.src = imageSources[currentIndex];
  }

  updateImage();
}

const addParagraph = (container, message) => {
  container.textContent = `${message}`;
};

const toggleContainer = (container) => {
  if (container.classList.contains("container")) {
    container.classList.remove("container");
    container.textContent = ""; // Clear text content
  } else {
    container.classList.add("container");
  }
};

const onePiece = document.getElementById("one-piece");
const opContainer = document.getElementById("one-piece-container");
onePiece.addEventListener("click", () => {
  addParagraph(
    opContainer,
    "ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!"
  );
  toggleContainer(opContainer);
});

const bleach = document.getElementById("bleach");
const bleachContainer = document.getElementById("bleach-container");
bleach.addEventListener("click", () => {
  addParagraph(
    bleachContainer,
    'The series adapts Kubo\'s manga with the main story arcs and introduces anime exclusive ones. In Karakura Town, high school student Ichigo Kurosaki becomes a substitute Soul Reaper (死神, Shinigami, literally, "Death God"), when Rukia Kuchiki risks her life to protect him from a Hollow.'
  );
  toggleContainer(bleachContainer);
});

const naruto = document.getElementById("naruto");
const narutoContainer = document.getElementById("naruto-container");
naruto.addEventListener("click", () => {
  addParagraph(
    narutoContainer,
    "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72)."
  );
  toggleContainer(narutoContainer);
});
