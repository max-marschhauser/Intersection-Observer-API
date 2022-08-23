//INTERSECTION OBSERVER

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            /*if (entry.isIntersecting) observer.unobserve(entry.target);*/ // Element that has once entered the site will remain seen, will not reenter after scrolling back up
        });
    },
    {
        root: null, //it is the viewport, default, mostly do not touch
        threshold: 1, //what percent of element must be on the site before it is shown
        rootMargin: "-100px 0px -100px 0px", //margina on viewport
    }
);

cards.forEach((card) => {
    observer.observe(card);
});
