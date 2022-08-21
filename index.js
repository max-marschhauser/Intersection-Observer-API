//INTERSECTION OBSERVER

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            /*if (entry.isIntersecting) observer.unobserve(entry.target);*/ //ako želim da element koji je jednom došao na ekran tako i ostame i kada se ponovno skrolla gore
        });
    },
    {
        root: null, //it is the viewport, default, najčešće ne dirati
        threshold: 1, //koji postotak novog elementa mora biti na stanici prije nego što uđe
        rootMargin: "-100px 0px -100px 0px", //margina na viewportu
    }
);

cards.forEach((card) => {
    observer.observe(card);
});
