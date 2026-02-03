const midias = [
    { type: "video", src: "videos/segunraca_trabalho_ww1280_wh720_wr15.mp4" },
    { type: "video", src: "videos/cipa_resultado_ww1280_wh720_wr15.mp4" }
];

let index = 0;
const player = document.getElementById("player");

function tocarMidia() {
  player.innerHTML = "";
  const item = midias[index];
    console.log(item);

    const video = document.createElement("video");
    video.src = item.src;
    video.autoplay = true;
    video.muted = true; // importante pra autoplay em TVs
    video.onended = proximaMidia;
    player.appendChild(video);
}

function proximaMidia() {
    index++;

  // Se chegou ao fim da playlist, reinicia a página
  if (index >= midias.length) {
    location.reload();
    return;
  }
  tocarMidia();
}

tocarMidia();
