const hqLocation = 42
let blocks = 0

function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        blocks = someValue - 42;
        return blocks;
    } 
    else if (someValue < 42) {
        blocks = 42 - someValue;
        return blocks;
    }
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        let feetTraveled = (start - destination);
        return feetTraveled * 264;
    }
    else if (destination > start) {
        let feetTraveled = (destination - start);
        return feetTraveled * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination) -400) * .02);
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}