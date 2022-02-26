function distanceFromHqInBlocks(street) {
    let distance = (street - 42) 
    return Math.abs(distance);
}
function distanceFromHqInFeet(street) {
    let feet = (distanceFromHqInBlocks (street) * 264)
    return feet;
}

function distanceTravelledInFeet(start, destination){
    let blocks = (start - destination)
    let feet = (blocks * 264)
    return Math.abs(feet);
}

function calculatesFarePrice(start, destination) {
    let feet = (distanceTravelledInFeet(start, destination))
    if (feet <= 400) {
        return 0;
    }
    else if (feet <= 2000) {
        return ((feet - 400) *.02);
    }
    else if (feet <= 2500) {
        return 25;
    }
    else if (feet > 2500) {
        return "cannot travel that far";
    }
}