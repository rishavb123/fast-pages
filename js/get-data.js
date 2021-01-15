function loadPages() {
    db.collection("pages").get().then((querySnapshot) => {
        state.pages = [];
        querySnapshot.forEach(doc => {
            state.pages.push({
                ...doc.data(),
                id: doc.id
            });
        });
        updatedPages();
        state.currentPage = 0;
        updatedCurrentPage()
    }).catch((error) => {
        console.log("Error getting pages: ", error)
    });
}
$(document).ready(loadPages)