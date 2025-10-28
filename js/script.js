  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Animación escut
  gsap.fromTo("#boxFromTo",
    { x: 200 },
    { 
      x: -1000,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    }
  );

  // Animación Historia
  const historiaImages = gsap.utils.toArray(".historia-img");
  historiaImages.forEach((img, index) => {
    gsap.set(img, { opacity: index === 0 ? 1 : 0 });
  });

  const historiaTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true
  });

  historiaTimeline
    .to(historiaImages[0], { opacity: 0, duration: 2, ease: "power2.inOut" }, 0)
    .to(historiaImages[1], { opacity: 1, duration: 2, ease: "power2.inOut" }, 0)
    .to(historiaImages[1], { opacity: 0, duration: 3, ease: "power2.inOut" }, 4)
    .to(historiaImages[0], { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 4);

  // ✅ CARRUSEL INICIALIZADO CORRECTAMENTE
  document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true,
        pause: 'hover'
      });
      console.log('✅ CARRUSEL FUNCIONANDO!');
    } else {
      console.error('❌ No se encontró el carrusel');
    }
  });
