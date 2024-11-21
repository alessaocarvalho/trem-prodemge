document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");
    const aboutSection = document.getElementById("about");

    const toggleButtonVisibility = () => {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (aboutTop <= viewportHeight / 2) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    };

    backToTopButton.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener("scroll", toggleButtonVisibility);
  });
