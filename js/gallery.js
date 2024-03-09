const imageElements = [];
const galleryContainer = document.getElementById("imageGallery");
const loader = document.getElementById("loader");

const getImages = async () => {
  try {
    const numberOfCharacters = 40;
    const requests = Array.from({ length: numberOfCharacters }, async () => {
      const res = await fetch("https://api.jikan.moe/v4/random/characters");
      const data = await res.json();
      let imageUrl = data.data.images.webp.image_url;
      let characterName = data.data.name;
      if (
        !imageUrl ||
        imageUrl ===
          "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
      ) {
        imageUrl = data.data.images.jpg.image_url;
        if (
          !imageUrl ||
          imageUrl ===
            "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
        ) {
          imageUrl =
            "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";
        }
      }

      imageElements.push({ url: imageUrl, name: characterName });
    });
    await Promise.all(requests);

    for (let i = 0; i < imageElements.length; i++) {
      let imgElement = document.createElement("img");
      imgElement.src = imageElements[i].url;
      imgElement.alt = `${imageElements[i].name}`;
      imgElement.loading = "eager";
      imgElement.title = imageElements[i].name;
      galleryContainer.appendChild(imgElement);
    }
    console.log(
      `All images of characters and their names: ${JSON.stringify(
        imageElements,
        null,
        2
      )}`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loader.style.display = "none";
  }
};

getImages();