function openImage(imgPath) {
      document.getElementById("modalImg").src = imgPath;
      document.getElementById("imageModal").style.display = "flex";
    }

    function closeImage() {
      document.getElementById("imageModal").style.display = "none";
      document.getElementById("modalImg").src = "";
    }

    document.getElementById("imageModal").addEventListener("click", function(e) {
      if (e.target.id === "imageModal") closeImage();
    });

   
