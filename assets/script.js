const dataJSON = [
    {
        "title": "आस्क फाउन्डेशन नेपालले सुरु गर्याे 'कोभिड एलिएन्स' हटलाइन सेवा",
        "date": "May 20, 2021",
        "desc": "Hotline covered by Setopati",
        "linklabel": "read more",
        "link": "https://www.setopati.com/kinmel/medical/237935"
    },
    {
        "title": "Press Release - Covid Alliance for Nepal - UK",
        "date": "May 18, 2021",
        "desc": "Leading Public Figures Call on UK Government for Oxygen for Nepal",
        "linklabel": "read more",
        "link": "https://alliance4nep.github.io/press-release-20210518.html"
    },
    {
        "title": "‘Urgent: Oxygen Needed’: Nepalis mobilise to take charge in Covid crisis",
        "date": "May 18, 2021",
        "desc": "Pete Pattison",
        "linklabel": "read more",
        "link": "https://www.theguardian.com/global-development/2021/may/18/urgent-oxygen-needed-nepalis-mobilise-to-take-charge-in-covid-crisis"
    }
];

function render(url, insertCallback) {
    fetch(url)
        .then(r => r.json())
        .then(data => {
            data.rows.forEach(insertCallback);
        });
}

