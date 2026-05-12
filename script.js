document.addEventListener("DOMContentLoaded", () => {
const images = document.querySelectorAll(".card img, .certificate-card img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(255, 230, 242, 0.95)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "9999";

      const enlarged = document.createElement("img");
      enlarged.src =
      enlarged.style.maxWidth = "90%";
      enlarged.style.maxHeight = "90%";
      enlarged.style.border = "6px solid #ff99cc";
      enlarged.style.borderRadius = "15px";
      overlay.appendChild(enlarged);

      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});

