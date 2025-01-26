const viewHotelsButton = document.querySelector('.hotels__button');

export function toggleText() {

    const viewHotelsButton = document.querySelector('.hotels__button');

    if (!viewHotelsButton) {
        return;
    }

    if (viewHotelsButton.textContent === "View all") {
        viewHotelsButton.textContent = "Hide";
    } else if (viewHotelsButton.textContent === "Hide") {
        viewHotelsButton.textContent = "View all";
    }
}