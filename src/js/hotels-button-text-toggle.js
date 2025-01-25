const viewHotelsButton = document.querySelector('.hotels__button');

export function toggleText() {

    const viewHotelsButton = document.querySelector('.hotels__button');

    if (!viewHotelsButton) {
        return;
    }

    if (viewHotelsButton.textContent === "View all") {
        viewHotelsButton.textContent = "Hide all";
    } else if (viewHotelsButton.textContent === "Hide all") {
        viewHotelsButton.textContent = "View all";
    }
}