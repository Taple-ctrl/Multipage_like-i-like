const languages = {
    "ua": ["Архітектурно-будівельний<br>компанія", "наша історія", "Про нас"],
    "ru": ["Архитектурно-строительная<br>компания", "наша история", "О нас", "Портфолио", "Услуги", "Контакты", "Новости"],
    "en": ["Architectural and construction<br>company", "our story", "About us"],
}

let aboutli = document.querySelectorAll(".about-li");
let portfolioli = document.querySelectorAll(".portfolio-li");
let servicesli = document.querySelectorAll(".services-li");
let contactli = document.querySelectorAll(".contact-li");
let newsli = document.querySelectorAll(".news-li");

function SelectLang(lang) {
    if (lang == "ua") {
        console.log("ua");
        document.querySelector(".logo-title").innerHTML = languages.ua[0];
        document.querySelector(".category_title-story--about").innerHTML = languages.ua[1];
        document.querySelector(".category_title-text--about").innerHTML = languages.ua[2];
        for (let i = 0; i < aboutli.length; i++) {
            aboutli[i].innerHTML = languages.ua[2];
        }
        for (let i = 0; i < portfolioli.length; i++) {
            portfolioli[i].innerHTML = languages.ua[3];
        }
    }

    if (lang == "ru") {
        console.log("ru");
        document.querySelector(".logo-title").innerHTML = languages.ru[0];
        document.querySelector(".category_title-story--about").innerHTML = languages.ru[1];
        document.querySelector(".category_title-text--about").innerHTML = languages.ru[2];
        for (let i = 0; i < aboutli.length; i++) {
            aboutli[i].innerHTML = languages.ru[2];
        };
        for (let i = 0; i < portfolioli.length; i++) {
            portfolioli[i].innerHTML = languages.ru[3];
        };
        for (let i = 0; i < servicesli.length; i++) {
            servicesli[i].innerHTML = languages.ru[4];
        };
        for (let i = 0; i < contactli.length; i++) {
            contactli[i].innerHTML = languages.ru[5];
        };
        for (let i = 0; i < newsli.length; i++) {
            newsli[i].innerHTML = languages.ru[6];
        };
        document.querySelector(".news-li").innerHTML = languages.ru[6];
    }

    if (lang == "en") {
        console.log("en");
        document.querySelector(".logo-title").innerHTML = languages.en[0];
        document.querySelector(".category_title-story--about").innerHTML = languages.en[1];
        document.querySelector(".category_title-text--about").innerHTML = languages.en[2];
        for (let i = 0; i < aboutli.length; i++) {
            aboutli[i].innerHTML = languages.en[2];
        }
    }
}