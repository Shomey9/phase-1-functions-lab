// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        block = block - 42;
    } else {
        block = 42 - block;
    }
    return block;
}

function distanceFromHqInFeet(block) {
    let feet;
    if (block >= 42) {
        feet = (block - 42) * 264;
    } else {
        feet = (42 - block) * 264;
    }
    return feet;
}

function distanceTravelledInFeet(block1, block2) {
    let blockDistance = block1 - block2;
    let feet;
    if (blockDistance >= 0) {
        feet = blockDistance * 264;
    } else {
        feet = blockDistance * 264 * -1;
    }
    return feet;
}

function calculatesFarePrice(block1, block2) {
    let blockDistance = block1 - block2;
    let feet;
    if (blockDistance >= 0) {
        feet = blockDistance * 264;
    } else {
        feet = blockDistance * 264 * -1;
    }

    let farePrice;
    if (feet <= 400) {
        farePrice = 0;
    } else if (feet > 400 && feet <= 2000) {
        farePrice = (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
        farePrice = 25;
    } else {
        farePrice = "cannot travel that far";
    }
    return farePrice;
}
// The first four hundreed feet are free, feet <= 400
// For distance between 400 to 2000 ft, price is 400 < feet <= 2000
// 2 cents per foot.
// Charges flat feet over 2000ft and under 2500 ft. 2000 < feet <= 2500
// No rides over 2500 ft. Return 'cannot travel that far' 2500 < feet