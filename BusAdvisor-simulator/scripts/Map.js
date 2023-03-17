export default class Map {
    //@param  mapValues: 2-D array holding value of individual tiles
    //@param colorOptions: array holding distinct colors for specific tile types
    //@param canvasObject: canvas element where map is being displayed
    constructor(mapValues,colorOptions,canvasObject, closeRouteBtn, tileRes, canvasH, canvasW) {
        this.mapValues = mapValues;
        this.colorOptions = colorOptions;
        this.canvasObject = canvasObject;
        this.tileRes = tileRes;
        this.canvasH = canvasH;
        this.canvasW = canvasW;                                                                                                                       
        this.currSecond = 0;
        this.frameCount = 0;
        this.framesLastSecond = 0;
        this.closeRouteBtn = closeRouteBtn;
        this.routeMap = [];
    }

    renderMap = () => {
        let ctx = this.canvasObject.getContext('2d');
        this.renderFrame(ctx);
    }

    renderFrame = (ctx) => {
        if (ctx == null)
            return;

        for (let i = 0; i < (this.canvasW/this.tileRes); i++) {
            for (let j = 0; j < (this.canvasH/this.tileRes); j++) {
                ctx.fillStyle = '#000000';
                ctx.fillRect(j*(this.tileRes) - 1, i*(this.tileRes)-1, this.tileRes + 2,this.tileRes + 2);
                ctx.fillStyle = this.colorOptions[this.mapValues[i][j]];
                ctx.fillRect(j*(this.tileRes), i*(this.tileRes),this.tileRes, this.tileRes);  
            }
        }

        //requestAnimationFrame(this.renderFrame(ctx));
    }

    //Generates a 2-D array with [x,y] coordinates of a bus route, recisving the general section of the map encapsulating the array
    startRouteMap = () => {
        this.routeMap = [];
        this.canvasObject.addEventListener('mousedown', (e) => {
            let currentTile = (this.getCursorPosition(e));
            //console.log(this.includesTile(currentTile))
            if (!(this.includesTile(currentTile))) {
                //console.log("added")
                this.routeMap.push(currentTile);
            }
        });
        console.log("added event listener");
    }

    endRouteMap = () => {
        this.canvasObject.removeEventListener('mousedown', (e) => {
            let currentTile = (simulationMap.getCursorPosition(e));
            simulationMap.addToRoute(currentTile);
        });
        console.log("removed event listener");
        console.log(this.getRouteMap())
    }

    getRouteMap = () => {
        return this.routeMap;
    }
    
    includesTile = (tile) => {
        //console.log(this.routeMap.length);
        for (let i = 0; i < this.routeMap.length; i++) {
            if (this.routeMap[i][0] == tile[0] && this.routeMap[i][1] == tile[1]) {
                return true;
            }
        }
        return false;
    }

    getCursorPosition = (event) => {
        const rect = this.canvasObject.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return [Math.floor(x/this.tileRes), Math.floor(y/this.tileRes)];
    }
}