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
}

function updatedCurrentPage() {
    $(".main").clear();
    const page = state.page[state.currentPage];
    for (let element of page.elements) {
        if (element.horizontal) {
            $(".main").append("<div class='element-container'></div>");
            
        } else {
            $(".main").append(`
                <div class="element-container">
                    ${page.html}
                </div>
            `);
        }
    }
}