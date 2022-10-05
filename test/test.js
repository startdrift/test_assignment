'use strict';

const assert = require('assert');

const apiCall = require('../services/apiCall');
const {
    sweepFullRoom,
    sweepFullRoomExpectedResponse,
    sweepFullRoomBackAndForth,
    sweepFullRoomBackAndForthExpectedResponse,
    sweepFullRoomWithExtraSteps,
    sweepFullRoomWithExtraStepsExpectedResponse,
    countAllPatches,
    countAllPatchesExpectedResponse,
    randomPatches,
    randomPatchesExpectedResponse,
    emptyKeysArray
} = require('../fixtures/roombaData');

describe('Test Roomba', function () {
    let actualResponse = null;
    it('Verify room dimensions with final hoover position and patches of dirt by sweeping full room', async () => {
        actualResponse = await apiCall.runRoomba(sweepFullRoom);
        assert.equal(JSON.stringify(actualResponse.data.coords), sweepFullRoomExpectedResponse);
    });
    it('Verify if patch is clean for the remainder of the program run and hoover back to original position by sweeping full room back and forth', async () => {
        actualResponse = await apiCall.runRoomba(sweepFullRoomBackAndForth);
        assert.equal(JSON.stringify(actualResponse.data.coords), sweepFullRoomBackAndForthExpectedResponse);
    });
    it('Verify if wall has no effect and the robot skids in place by increasing number of steps', async () => {
        actualResponse = await apiCall.runRoomba(sweepFullRoomWithExtraSteps);
        assert.equal(JSON.stringify(actualResponse.data.coords), sweepFullRoomWithExtraStepsExpectedResponse);
    });
    it('Verify all possible patches', async () => {
        actualResponse = await apiCall.runRoomba(countAllPatches);
        assert.equal(JSON.stringify(actualResponse.data), countAllPatchesExpectedResponse);
    });
    it('Verify random patches', async () => {
        actualResponse = await apiCall.runRoomba(randomPatches);
        assert.equal(JSON.stringify(actualResponse.data), randomPatchesExpectedResponse);
    });
    it('Verify random patches', async () => {
        actualResponse = await apiCall.runRoomba(randomPatches);
        assert.equal(JSON.stringify(actualResponse.data), randomPatchesExpectedResponse);
    });
    it('Verify Bad Request 400 response with an empty array for all keys', async () => {
        actualResponse = await apiCall.runRoomba(emptyKeysArray);
        assert.equal(JSON.stringify(actualResponse.status), 500);
    });
});
