const state = {};

function updatedPages() {
    $(".pages-list").empty();
    for (let i in state.pages) {
        const page = state.pages[i];
        $(".pages-list").append(`
            <li onclick="state.currentPage=${i};updatedCurrentPage()" class='nav-item'>
                <a class="nav-link" href="#">${page.name}</a>
            </li>
        `);
    }
    $(".pages-list").append(`
        <a class='new-page btn' onclick='newPage(prompt("What is the name of the page?"))'>+</a>
    `);
}

function newPage(name) {
    db.collection("pages").doc().set({
        name,
        elements: []
    })
}

function updatedCurrentPage() {
    $(".main").empty();
    const page = state.pages[state.currentPage];
    for (let element of page.elements) {
        if (element.horizontal) {
            const id = makeid(10);
            $(".main").append(`<div id='${id}' class='element-container'></div>`);
            const div = $("#" + id);
            for (let html of element.elements) {
                div.append(html);
            }
        } else {
            $(".main").append(`
                <div class="element-container">
                    ${element.html}
                </div>
            `);
        }
    }
}