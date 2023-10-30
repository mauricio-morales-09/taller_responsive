function generateRandomText() {
    const textArray = [
      "...ut labore et dolore magna aliqua",
      "...Tristique senectus et netus et",
      "...Fermentum posuere urna nec",
    ];

    return textArray[Math.floor(Math.random() * textArray.length)];
  }

  function updateCarouselText() {
    document.getElementById("text1").textContent = generateRandomText();
    document.getElementById("text2").textContent = generateRandomText();
    document.getElementById("text3").textContent = generateRandomText();
  }

  // Configura el carrusel para cambiar cada 2 segundos
  const myCarousel = document.getElementById("myCarousel");
  myCarousel.addEventListener("slid.bs.carousel", function() {
    setTimeout(updateCarouselText, 2000); // Cambiar cada 2 segundos (2000 ms)
  });

  // Inicia el carrusel
  $(document).ready(function() {
    updateCarouselText(); // Mostrar contenido inicial aleatorio
    $("#myCarousel").carousel();
  });  