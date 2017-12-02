/* ===
   ImgPixels
   @author: Sadi Mahmud
   @license: MIT
   @version: 0.0.1
*/

export default class ImgPixels {
    constructor(config = {}) {
        Object.assign(this, {
            widthMul: 18,
            heightMul: 25,
            src: '',
            sqrWidth: 30,
            parentContainerId: "dataImage",
            functionInListener: () => {}
        }, config);   
    } 

    makePixels() {
        var pC = document.getElementById(this.parentContainerId);
        pC.style.width = (this.widthMul * this.sqrWidth) + "px";
        pC.style.height = (this.heightMul * this.sqrWidth) + "px";
        pC.style.display = "inline-block";
        pC.style.lineHeight = 0;
        var canvas = document.createElement("canvas");
        canvas.width = (this.widthMul * this.sqrWidth);
        canvas.height = (this.heightMul * this.sqrWidth);
        var ctx = canvas.getContext("2d");
        var img = new Image(); 
        
        img.src = this.src;
        
        img.addEventListener("load", () => {
            ctx.drawImage(img, 0, 0);
            for(var i = 0; i<(this.heightMul * this.sqrWidth); i+=this.sqrWidth) {
                for(var j = 0; j<(this.widthMul * this.sqrWidth); j+=this.sqrWidth) {
                    var data = ctx.getImageData(j, i, this.sqrWidth, this.sqrWidth);
                    
                    // create a temporary canvas
                    var tempCanvas = document.createElement("canvas");
                    var tempCtx = tempCanvas.getContext("2d");

                    tempCanvas.width = this.sqrWidth;
                    tempCanvas.height = this.sqrWidth;

                    tempCtx.putImageData(data, 0, 0);
        
                    var img1 = document.createElement("img");
                    img1.src = tempCanvas.toDataURL("image/png");
                    document.getElementById(this.parentContainerId).appendChild(img1);
                    tempCanvas.remove();
                }
            }
        
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            this.functionInListener();
               
        }, false);

    } // makePixels
}