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
        "link": "https://linktr.ee/alliance4nep",
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
        const navs = `<li class="nav-item ${isActive}"><a class="nav-link" href="${item.link}">${item.label}</a></li>`;
        document.getElementById("render_nav").insertAdjacentHTML('beforeend', navs);
    }

    navJSON.forEach(buildNav);
}

function render(url, insertCallback) {
    fetch(url)
        .then(r => r.json())
        .then(data => {
            data.rows.forEach(insertCallback);
        });
}
