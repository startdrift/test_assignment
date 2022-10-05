'use strict';

const fullSweep = 'EEEENWWWWNEEEENWWWWNEEEE';
const fullSweepBackAndForth = 'EEEENWWWWNEEEENWWWWNEEEEWWWWSEEEESWWWWSEEEESWWWW';
const fullSweepWithExtraStep = 'SSEEEENWWWWWNEEEEENWWWWWNEEEEEN';

const sweepFullRoom = {
    "roomSize": [5, 5],
    "coords": [0, 0],
    "patches": [],
    "instructions": fullSweep
};

const sweepFullRoomBackAndForth = {
    "roomSize": [5, 5],
    "coords": [0, 0],
    "patches": [],
    "instructions": fullSweepBackAndForth
};
const sweepFullRoomWithExtraSteps = {
    "roomSize": [5, 5],
    "coords": [0, 0],
    "patches": [],
    "instructions": fullSweepWithExtraStep
};
const countAllPatches = {
    "roomSize": [5, 5],
    "coords": [0, 0],
    "patches": [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
        [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
        [2, 0], [2, 1], [2, 2], [2, 3], [2, 4],
        [3, 0], [3, 1], [3, 2], [3, 3], [3, 4],
        [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
    ],
    "instructions": fullSweep
};

const X1 = Math.floor(Math.random() * 5);
const Y1 = Math.floor(Math.random() * 5);
const X2 = Math.floor(Math.random() * 5);
const Y2 = Math.floor(Math.random() * 5);
const X3 = Math.floor(Math.random() * 5);
const Y3 = Math.floor(Math.random() * 5);

const randomPatches = {
    "roomSize": [5, 5],
    "coords": [0, 0],
    "patches": [[X1, Y1], [X2, Y2], [X3, Y3]],
    "instructions": fullSweep
};

const sweepFullRoomExpectedResponse = JSON.stringify([4, 4]);
const sweepFullRoomBackAndForthExpectedResponse = JSON.stringify([0, 0]);
const sweepFullRoomWithExtraStepsExpectedResponse = JSON.stringify([4, 4]);
const countAllPatchesExpectedResponse = JSON.stringify({ coords: [4, 4], patches: 25 });
const randomPatchesExpectedResponse = JSON.stringify({ coords: [4, 4], patches: 3 });


module.exports = {
    sweepFullRoom,
    sweepFullRoomExpectedResponse,
    sweepFullRoomBackAndForth,
    sweepFullRoomBackAndForthExpectedResponse,
    sweepFullRoomWithExtraSteps,
    sweepFullRoomWithExtraStepsExpectedResponse,
    countAllPatches,
    countAllPatchesExpectedResponse,
    randomPatches,
    randomPatchesExpectedResponse
};