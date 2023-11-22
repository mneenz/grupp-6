
const people = [
    {
        name: "Baby Joe",
        title: "CEO",
        img: "../assets/img/1.svg"
    },
    {
        name: "Annie Doe",
        title: "CTO",
        img: "../assets/img/2.svg"
    },
    {
        name: "Buster Smith",
        title: "CFO",
        img: "../assets/img/3.svg"
    },
    {
        name: "Boo Johnson",
        title: "COO",
        img: "../assets/img/4.svg"
    },
    {
        name: "Cali Lee",
        title: "CMO",
        img: "../assets/img/5.svg"
    },
    {
        name: "Abby Rodriguez",
        title: "CIO",
        img: "../assets/img/6.svg"
    },
    {
        name: "Callie Wilson",
        title: "CDO",
        img: "../assets/img/7.svg"
    }
];


function populateContactUs() {

    const vartPeopleDivskaligga = document.getElementById("people");
    var peopleHTML = "<div class='persons'>";
    for (var i = 0; i < people.length; i++) {
        const person = people[i];
        peopleHTML += `
            <div class="person">
                <img src="${person.img}" alt="${person.name}">
                    <div class="nameAndTile">
                        <h3>${person.name}</h3>
                        <p>${person.title}</p>
                    </div>
            </div>
        `;
    }
    peopleHTML += "</div>";
    vartPeopleDivskaligga.innerHTML = peopleHTML;
}

populateContactUs();

