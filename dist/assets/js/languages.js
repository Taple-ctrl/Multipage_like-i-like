const languages = {
    "ua": ["Архітектурно-будівельний<br>компанія", "наша історія", "Про нас"],
    "ru": ["Архитектурно-строительная<br>компания", "наша история", "О нас", 
    "Портфолио", "Услуги", "Контакты", 
    "Новости", "<font>LIKE I LIKE — </font>Лорем ипсум долор сит амет, прилагательные элита. Но, клянусь богом, я не утруждал себя. Лорем ипсум долор сит амет, прилагательные элита. Ничего нового, но в наши дни это постоянно. Они укладываются в ровный рулет. Билл Гейтс.", "наши работы", 
    "кондо / /<br><font>RIVER STONE</font>", "Показать все", 
    "что мы делаем", "Дизайн", "дизайн интерьера", "4200Р/m2",
    "Обновление", "обновление дизайна", "где найти нас"],
    "en": ["Architectural and construction<br>company", "our story", "About us"],
}

let aboutli = document.querySelectorAll(".about-li");
let portfolioli = document.querySelectorAll(".portfolio-li");
let servicesli = document.querySelectorAll(".services-li");
let contactli = document.querySelectorAll(".contact-li");
let newsli = document.querySelectorAll(".news-li");
let condo = document.querySelectorAll(".portfolio_idle-list--hover--text");
let interior = document.querySelectorAll(".services_idle-design-box--text");
let interior_cost = document.querySelectorAll(".services_idle-design-box--cost");
let renovation = document.querySelectorAll(".services_idle-renovation-box--text");
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
        document.querySelector(".aboutUs_idle_content-text").innerHTML = languages.ru[7];
        document.querySelector(".category_title-story--portfolio").innerHTML = languages.ru[8];
        document.querySelector(".category_title-text--portfolio").innerHTML = languages.ru[3];
        document.querySelector(".portfolio_idle-btn").innerHTML = languages.ru[10];
        document.querySelector(".category_title-story--services").innerHTML = languages.ru[11];
        document.querySelector(".category_title-text--services").innerHTML = languages.ru[4];
        document.querySelector(".services_idle-design--text").innerHTML = languages.ru[12];
        document.querySelector(".services_idle-renovation--text").innerHTML = languages.ru[15];
        document.querySelector(".category_title-story--contact").innerHTML = languages.ru[17];
        document.querySelector(".category_title-text--contact").innerHTML = languages.ru[5];
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
        for (let i = 0; i < condo.length; i++) {
            condo[i].innerHTML = languages.ru[9];
        };
        for (let i = 0; i < interior.length; i++) {
            interior[i].innerHTML = languages.ru[13];
        };
        for (let i = 0; i < interior_cost.length; i++) {
            interior_cost[i].innerHTML = languages.ru[14];
        };
        for (let i = 0; i < renovation.length; i++) {
            renovation[i].innerHTML = languages.ru[16];
        };
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