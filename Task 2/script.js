// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cropInput = document.getElementById("crop-input");
    const cropCanvas = document.getElementById("crop-canvas");
    const cropButton = document.getElementById("crop-button");
  
    const resizeInput = document.getElementById("resize-input");
    const resizeCanvas = document.getElementById("resize-canvas");
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const resizeButton = document.getElementById("resize-button");
  
    const filterInput = document.getElementById("filter-input");
    const filterCanvas = document.getElementById("filter-canvas");
    const filterSelect = document.getElementById("filter-select");
    const applyFilterButton = document.getElementById("apply-filter-button");
  
    let currentImage = null;
  
    // Load image onto canvas
    function loadImage(input, canvas) {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = new Image();
          img.onload = function () {
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            currentImage = img;
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  
    // Crop image
    cropInput.addEventListener("change", () => loadImage(cropInput, cropCanvas));
    cropButton.addEventListener("click", () => {
      const ctx = cropCanvas.getContext("2d");
      const croppedImage = ctx.getImageData(50, 50, 200, 200); // Example crop
      cropCanvas.width = 200;
      cropCanvas.height = 200;
      ctx.putImageData(croppedImage, 0, 0);
    });
  
    // Resize image
    resizeInput.addEventListener("change", () => loadImage(resizeInput, resizeCanvas));
    resizeButton.addEventListener("click", () => {
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);
      if (width && height) {
        const ctx = resizeCanvas.getContext("2d");
        resizeCanvas.width = width;
        resizeCanvas.height = height;
        ctx.drawImage(currentImage, 0, 0, width, height);
      }
    });
  
    // Apply filters
    filterInput.addEventListener("change", () => loadImage(filterInput, filterCanvas));
    applyFilterButton.addEventListener("click", () => {
      const filter = filterSelect.value;
      const ctx = filterCanvas.getContext("2d");
      ctx.filter = filter === "none" ? "none" :
        filter === "grayscale" ? "grayscale(100%)" :
        filter === "sepia" ? "sepia(100%)" :
        filter === "invert" ? "invert(100%)" : "none";
      ctx.drawImage(currentImage, 0, 0);
    });
  });
