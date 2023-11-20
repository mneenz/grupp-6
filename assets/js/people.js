
const people = [
        {
            name: "John Doe",
            title: "CEO",
            img: "../assets/img/portrait-white-man-isolated.png"
        },
        {
            name: "Jane Doe",
            title: "CTO",
            img: "../assets/img/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news.png"
        },
        {
            name: "Bob Smith",
            title: "CFO",
            img: "../assets/img/handsome-confident-smiling-man-with-hands-crossed-chest.png"
        },
        {
            name: "Alice Johnson",
            title: "COO",
            img: "../assets/img/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.png"
        },
        {
            name: "David Lee",
            title: "CMO",
            img: "../assets/img/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling.png"
        },
        {
            name: "Maria Rodriguez",
            title: "CIO",
            img: "../assets/img/portrait-european-girl-with-tanned-skin-dark-hair.png"
        },
        {
            name: "Emily Wilson",
            title: "CDO",
            img: "../assets/img/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.png"
        }
    ];

function populateContactUs() {
   
    const vartPeopleDivskaligga = document.getElementById("people");

    var peopleHTML = "<div class='persons'>";
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        peopleHTML += `
            <div class="person">
                <img src="${person.img}" alt="${person.name}">
                <h3>${person.name}</h3>
                <p>${person.title}</p>
            </div>
        `;
    }
    peopleHTML += "</div>";
    vartPeopleDivskaligga.innerHTML = peopleHTML;
}

populateContactUs();
