export default class GridItem {
    constructor(width, height, coordinatePair) {
        this.width = width;
        this.height = height;
        this.coordinatePair = coordinatePair;
    }

    /**
     *
     * @returns {Array} An array of coordinates themselves represented as a two element array.
     */
    calculatePositions() {
        let positions = [];
        let xWithWidth = this.coordinatePair.x + this.width;
        let yWithHeight = this.coordinatePair.y + this.height;

        for (let x = this.coordinatePair.x; x < xWithWidth; x++) {
            for (let y = this.coordinatePair.y; y < yWithHeight; y++) {
                positions.push([x, y]);
            }
        }

        return positions;
    }
}