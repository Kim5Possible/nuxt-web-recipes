export const useAnimation = () => {
  const { $anime } = useNuxtApp();

  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (!target.hasAttribute("data-animated")) {
              $anime({
                targets: entry.target,
                translateY: [100, 0],
                opacity: [0, 1],
                delay: 100 * index,
                duration: 1000,
              });
              target.setAttribute("data-animated", "true");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const categoriesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (!target.hasAttribute("data-animated")) {
              $anime({
                targets: entry.target,
                scale: [0, 1],
                translateY: [100, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 100 * index * 0.3,
                easing: "easeInOutSine",
              });
              target.setAttribute("data-animated", "true");
            }
            categoriesObserver.observe(entry.target);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const textHover = (el: HTMLElement, scale: number, color: string) => {
      $anime.remove(el);
      $anime({
        targets: el,
        scale: scale,
        duration: 100,
        color: color,
        easing: "easeInOutSine",
      });
    };

    const categoriesMenu = (
      block: HTMLElement,
      el: HTMLElement[],
      isOpenCategory: boolean
    ) => {
      if (isOpenCategory) {
        block.style.display = "block";
        $anime({
          targets: block,
          opacity: [0, 1],
          clipPath: [
            "inset(180% 0% 80% 0% round 5%)",
            "inset(0% 0% 0% 0% round 5%)",
          ],
          height: ["0", "75px"],
          duration: 500,
          easing: "linear",
        });
        $anime({
          targets: el,
          opacity: [0, 1],
          duration: 300,
          delay: 500,
          easing: "easeInQuad",
        });
      } else {
        $anime({
          targets: block,
          opacity: [1, 0],
          clipPath: [
            "inset(0% 0% 0% 0% round 5%)",
            "inset(180% 0% 80% 0% round 5%)",
          ],
          height: ["75px", "0"],
          duration: 500,
          delay: 400,
          easing: "linear",
          complete: () => {
            block.style.display = "none";
          },
        });
        $anime({
          targets: el,
          opacity: [1, 0],
          duration: 300,
          easing: "easeInQuad",
        });
      }
    };

    const textAppear = (letter: HTMLElement[], wrapper: HTMLElement) => {
      $anime.timeline().add({
        targets: letter,
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1),
      });
    };

    const searchAnimation = (el: HTMLElement, isSearch: boolean) => {
      if (isSearch) {
        $anime({
          targets: el,
          opacity: [0, 1],
          clipPath: ["inset(0% 0% 0% 100% )", "inset(0% 0% 0% 0%)"],
          duration: 1000,
          easing: "linear",
          begin: () => {
            el.style.display = "block";
          },
        });
      } else {
        $anime({
          targets: el,
          opacity: [1, 0],
          clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"],
          duration: 1000,
          easing: "linear",
          complete: () => {
            el.style.display = "none";
          },
        });
      }
    };

    return {
      observer,
      categoriesObserver,
      textHover,
      categoriesMenu,
      textAppear,
      searchAnimation,
    };
  }

  return {
    observer: null,
    categoriesObserver: null,
    textHover: null,
    categoriesMenu: null,
    textAppear: null,
    searchAnimation: null,
  };
};
