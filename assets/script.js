/*=====================================
Nav Bar
======================================= */
const navJSON = [{
        "label": "Home",
        "link": "/",
    },
    {
        "label": "About",
        "link": "about.html",
    },
    {
        "label": "Initiatives",
        "link": "initiatives.html",
    },
    {
        "label": "Media",
        "link": "media.html",
    },
    {
        "label": "Donate",
        "link": "donate.html",
    },
    {
        "label": "Gaps",
        "link": "gaps.html",
    },
    {
        "label": "Get Involved",
        "link": "/#help",
    }
];
function renderNav(currentpage) {

    const buildNav = (item, index) => {
        const isActive = item.label === currentpage ? 'active' : '';
        const navs = `<li class="nav-item ${isActive}"><a class="nav-link ${isActive}" href="${item.link}">${item.label}</a></li>`;
        document.getElementById("render_nav").insertAdjacentHTML('beforeend', navs);
    }

    navJSON.forEach(buildNav);
}
/*=====================================
Remote content
======================================= */
function render(url, insertCallback) {
    fetch(url)
        .then(r => r.json())
        .then(data => {
            data.rows.forEach(insertCallback);
        });
}
/*=====================================
Sticky
======================================= */
window.onscroll = function () {
    var header_navbar = document.getElementById("header_navbar");
    var logo = document.querySelector("img#logo");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        logo.setAttribute("src", "images/logo.svg")
    } else {
        header_navbar.classList.remove("sticky");
        logo.setAttribute("src", "images/logo-white.svg")
    }

    //
    //
    // // show or hide the back-top-top button
    // var backToTo = document.querySelector(".back-to-top");
    // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     backToTo.style.display = "block";
    // } else {
    //     backToTo.style.display = "none";
    // }
};
