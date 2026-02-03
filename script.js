const midias = [
  { type: "video", src: "videos/segunraca_trabalho_ww1280_wh720_wr15.mp4" }
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
