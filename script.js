const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/*
prevent temporary placeholder links from jumping to the top of the page.
remove the "unavailable" class and replace href="#" once each URL is ready.
*/
const unavailableLinks = document.querySelectorAll(
    'a[aria-disabled="true"]'
);

unavailableLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});