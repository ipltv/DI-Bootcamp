const box = document.getElementById("box");
let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
  box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  box.style.left = (e.clientX - offsetX) + "px";
  box.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  box.style.cursor = "grab";

  const boxRect = box.getBoundingClientRect();
  const targetRect = document.getElementById("target").getBoundingClientRect();

  const isInside =
    boxRect.left >= targetRect.left &&
    boxRect.top >= targetRect.top &&
    boxRect.right <= targetRect.right &&
    boxRect.bottom <= targetRect.bottom;

  if (isInside) {
    // Snap box to top-left corner inside target
    const target = document.getElementById("target");
    box.style.left = target.offsetLeft + "px";
    box.style.top = target.offsetTop + "px";
  }
});
