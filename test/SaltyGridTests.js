import SaltyGrid from '../lib/SaltyGrid';
import GridItem from '../lib/GridItem';
import CoordinatePair from '../lib/CoordinatePair';

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Adding items to the grid', () => {
    it('should be retrievable at position', () => {
        let coordinatePair = new CoordinatePair(2, 2);
        let gridItem = new GridItem(1, 1, coordinatePair);
        let grid = new SaltyGrid();
        grid.addGridItem(gridItem);

        assert.equal(grid.getGridItemAtCoordinatePair(coordinatePair), gridItem);
        assert.notEqual(grid.getGridItemAtCoordinatePair(coordinatePair), gridItem);
    });
});