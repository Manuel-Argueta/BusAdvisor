import Map from './Map.js';
import Bus from './Bus.js';
import {createBusCard} from './userInterface.js';

let mapTile = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 1, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],];
let colorOptions = ["#51a138","#272b26","#ebf1f2"]; 
let tileRes = 10, canvasH = 400, canvasW = 400; 
let CONTINUE = true;
let simulationBox = document.getElementById("map"); 
let startRouteBtn = document.getElementById("initRoute");
let closeRouteBtn = document.getElementById("closeRoute");
let busCreationForm = document.getElementById("busCreationForm");
let confirmBusBtn = document.getElementById("confirmBus");
let startSimBtn = document.getElementById("startSim");
let stopSimBtn = document.getElementById("stopSim");

let simulationMap = new Map(mapTile,colorOptions,simulationBox,closeRouteBtn, tileRes,canvasH,canvasW);
let testRoute1 = [[1, 1],
[1, 2],
[1, 3],
[1, 4],
[1, 5],
[1, 6],
[1, 7],
[1, 8],
[1, 9],
[1, 10],
[1, 11],
[1, 12],
[1, 13],
[1, 14],
[1, 15],
[2, 15],
[3, 15],
[4, 15],
[5, 15],
[6, 15],
[7, 15],
[8, 15],
[9, 15],
[10, 15],
[10, 14],
[10, 13],
[10, 12],
[10, 11],
[10, 10],
[9, 10],
[8, 10],
[8, 9],
[8, 8],
[8, 7],
[8, 6],
[8, 5],
[8, 4],
[8, 3],
[8, 2],
[8, 1],
[7, 1],
[6, 1],
[5, 1],
[4, 1],
[3, 1],
[2, 1]]

let testRoute2 = [
    [
        17,
        10
    ],
    [
        17,
        11
    ],
    [
        17,
        12
    ],
    [
        17,
        13
    ],
    [
        17,
        14
    ],
    [
        17,
        15
    ],
    [
        17,
        16
    ],
    [
        17,
        17
    ],
    [
        17,
        18
    ],
    [
        17,
        19
    ],
    [
        17,
        20
    ],
    [
        17,
        21
    ],
    [
        17,
        22
    ],
    [
        17,
        23
    ],
    [
        18,
        23
    ],
    [
        19,
        23
    ],
    [
        20,
        23
    ],
    [
        21,
        23
    ],
    [
        22,
        23
    ],
    [
        23,
        23
    ],
    [
        24,
        23
    ],
    [
        25,
        23
    ],
    [
        26,
        23
    ],
    [
        27,
        23
    ],
    [
        28,
        23
    ],
    [
        29,
        23
    ],
    [
        30,
        23
    ],
    [
        31,
        23
    ],
    [
        32,
        23
    ],
    [
        33,
        23
    ],
    [
        33,
        24
    ],
    [
        33,
        25
    ],
    [
        33,
        26
    ],
    [
        33,
        27
    ],
    [
        33,
        28
    ],
    [
        33,
        29
    ],
    [
        34,
        29
    ],
    [
        35,
        29
    ],
    [
        36,
        29
    ],
    [
        37,
        29
    ],
    [
        37,
        28
    ],
    [
        37,
        27
    ],
    [
        37,
        26
    ],
    [
        37,
        25
    ],
    [
        37,
        24
    ],
    [
        37,
        23
    ],
    [
        37,
        22
    ],
    [
        37,
        21
    ],
    [
        37,
        20
    ],
    [
        37,
        19
    ],
    [
        37,
        18
    ],
    [
        36,
        18
    ],
    [
        35,
        18
    ],
    [
        34,
        18
    ],
    [
        32,
        18
    ],
    [
        33,
        18
    ],
    [
        33,
        17
    ],
    [
        33,
        16
    ],
    [
        33,
        15
    ],
    [
        33,
        14
    ],
    [
        33,
        13
    ],
    [
        33,
        12
    ],
    [
        33,
        11
    ],
    [
        33,
        10
    ],
    [
        32,
        10
    ],
    [
        31,
        10
    ],
    [
        30,
        10
    ],
    [
        29,
        10
    ],
    [
        28,
        10
    ],
    [
        27,
        10
    ],
    [
        26,
        10
    ],
    [
        25,
        10
    ],
    [
        24,
        10
    ],
    [
        23,
        10
    ],
    [
        22,
        10
    ],
    [
        21,
        10
    ],
    [
        20,
        10
    ],
    [
        19,
        10
    ],
    [
        18,
        10
    ]
]
let testBus1 = new Bus(500,55,"red",[],testRoute1,simulationBox,tileRes);
let testBus2 = new Bus(500,57,"blue",[],testRoute2,simulationBox,tileRes);;
// let testBus3 = new Bus(500,58,"purple",[],[],simulationBox,tileRes);
let allBuses = [testBus1,testBus2];

window.onload = () => {
   simulationMap.renderMap();
   startRouteBtn.addEventListener("click", simulationMap.startRouteMap);
   closeRouteBtn.addEventListener("click", () => {
       simulationMap.endRouteMap();
        confirmBusBtn.style.display = "block";
    });
    confirmBusBtn.addEventListener("click", () => {
        busCreationForm.style.display = "none";
        confirmBusBtn.style.display = "none";
        createNewBus();
    });
    startSimBtn.addEventListener("click", () => { 
        simulationMap.renderMap();
        animateAllBuses();

    });
    stopSimBtn.addEventListener("click", () => {

    });


    confirmBusBtn.style.display = "none";
    busCreationForm.style.display = "none";
};

const animateAllBuses = () => {
    for (let i = 0; i < allBuses.length; i++) {
        allBuses[i].animateBus(0);
    } 
    return 0;
}

const createNewBus = () => {
    let busName = document.getElementById("busName").value;
    let busID = document.getElementById("busID").value;
    let busColor = document.getElementById("busColor").value;
    let routeMap = simulationMap.getRouteMap();
    let newBus = new Bus(500,busID, busColor, [], routeMap, simulationBox, tileRes)
    allBuses.push(newBus);
    console.log(newBus);
    createBusCard(busName, busID, busColor);
}
