
let initCreateBtn = document.getElementById("initBus");
let busCreationForm = document.getElementById("busCreationForm");
let busInfoContainer = document.getElementById("busListContainer");

// window.onload = () => {
//     busCreationForm.style.display = "none";
// };

initCreateBtn.addEventListener("click", () => {
    busCreationForm.style.display = "block";
});

export const createBusCard = (busName, busID, busColor) => {
    let newBusCard = document.createElement("div");
    let colorIcon = document.createElement("div");
    colorIcon.innerText = "BUS-COLOR";
    colorIcon.style.backgroundColor = busColor;
    newBusCard.class = "busCard";
    newBusCard.innerHTML = `<p> Name: ${busName}</p> <p> Route Number: ${busID} </p>`;
    newBusCard.appendChild(colorIcon);
    busInfoContainer.appendChild(newBusCard);
}