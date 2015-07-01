import CoordinatePair from 'CoordinatePair.js';
import GridItem from 'GridItem.js';

export default class SaltyGrid {
    constructor() {
        // This (gridItems[]) may go away because I believe I just need it now for keeping a list of items in the grid.
        // Eventually they will be referenced directly by a virtual grid plane.
        this.gridItems = [];
        this.gridColumns = []; // remove
        this.gridMatrix = [];

        let start = performance.now();
        this.generateMatrix(60, 100);
        console.log(performance.now() - start);
    }

    /**
     *
     * @param numberOfColumns {number}
     * @param numberOfRows {number}
     */
    generateMatrix(numberOfColumns, numberOfRows) {
        // todo(mhaas2): Rather than filling with null, let's have an empty representation of a GridItem.
        this.gridMatrix = new Array(numberOfRows).fill(null);
        for (let i = 0; i < numberOfRows; i++) {
            this.gridMatrix[i] = new Array(numberOfColumns).fill(null);
        }
    }

    /**
     *
     * @param gridItem {GridItem}
     */
    addGridItem(gridItem) {
        this.gridItems.push(gridItem);
        this.gridMatrix[gridItem.coordinatePair.x][gridItem.coordinatePair.y] = gridItem;
    }

    /**
     *
     * @param coordinatePair {CoordinatePair}
     * @returns {GridItem}
     */
    getGridItemAtCoordinatePair(coordinatePair) {

    }

    /**
     *
     * @param x {number}
     * @param y {number}
     * @returns {GridItem}
     */
    getGridItemAtCoordinates(x, y) {
        return this.gridColumns[coordinate.x - 1];
    }
}

window.SaltyGrid = SaltyGrid;
let coordinatePair = new CoordinatePair(2, 2);
let gridItem = new GridItem(1, 1, coordinatePair);
let grid = new SaltyGrid();
grid.addGridItem(gridItem);
grid.addGridItem(new GridItem(1, 1, new CoordinatePair(4, 7)));
grid.addGridItem(new GridItem(1, 1, new CoordinatePair(5, 7)));
grid.addGridItem(new GridItem(1, 1, new CoordinatePair(4, 8)));

console.log(grid.toString());
