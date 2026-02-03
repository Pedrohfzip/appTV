const midias = [
  { type: "image", src: "imagens/img1.jpg", tempo: 8000 },
  { type: "image", src: "imagens/img2.png", tempo: 8000 },
  { type: "video", src: "videos/video1.mp4" },
  { type: "video", src: "videos/video2.mp4" }
];

let index = 0;
const player = document.getElementById("player");

function tocarMidia() {
  player.innerHTML = "";
  const item = midias[index];

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    player.appendChild(img);

    setTimeout(proximaMidia, item.tempo);
  } else {
    const video = document.createElement("video");
    video.src = item.src;
    video.autoplay = true;
    video.muted = true; // importante pra autoplay em TVs
    video.onended = proximaMidia;
    player.appendChild(video);
  }
}

function proximaMidia() {
  index = (index + 1) % midias.length;
  tocarMidia();
}

tocarMidia();
