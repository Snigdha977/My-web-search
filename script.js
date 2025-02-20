function search(event) {
    if (event.key === 'Enter') {
        let query = document.getElementById("search").value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
}
function manualSearch() {
    let query = document.getElementById("search").value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}
