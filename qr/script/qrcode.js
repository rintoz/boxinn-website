const routes = {
    BOXINN6331: "../event.html",
    BOXINN6332: "https://example.com/product2"
};

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (routes[code]) {
    window.location.replace(routes[code]);
} else {
    document.body.innerHTML = "Invalid QR Code";
}
