
export default class Bus {
    constructor(busSpeed, routeNumber, busColor, stopList, routeMap, canvasObject, tileRes) {
        this.routeMap = routeMap;
        this.xPos  = this.routeMap[0][0];
        this.yPos = this.routeMap[0][1];
        this.routeNumber = routeNumber;
        this.busColor = busColor;
        this.stopList = stopList;
        this.busSpeed = busSpeed;
        this.canvasObject = canvasObject;
        this.tileRes = tileRes;
    }

    animateBus = (i) => {
        let ctx = this.canvasObject.getContext('2d');
        //console.log(this.routeMap.length);
        if (i < this.routeMap.length) {
            setTimeout(() => {
                this.renderBus(ctx,"#272b26");
                this.moveBus(i);
                this.renderBus(ctx,this.busColor);
                this.animateBus(i+1);
            }, this.busSpeed);
        }
        return 0;
    }

    moveBus = (i) => {
        let newX = this.routeMap[i][0];
        let newY = this.routeMap[i][1];
        this.xPos = newX;
        this.yPos = newY;
    }

    renderBus = (ctx,color) => {
        ctx.fillStyle = color;
        ctx.fillRect(this.xPos*(this.tileRes), this.yPos*(this.tileRes),this.tileRes, this.tileRes); 
    }

 }