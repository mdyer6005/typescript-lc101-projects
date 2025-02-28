"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
//let spacecraftName: string = "Determination";
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
//let milesToMars: number = kilometersToMars * milesPerKilometer;
//let hoursToMars: number = milesToMars / speedMph;
//let daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
/* function getDaysToLocation(kilometersAway: number): number {
    let milesToDestination: number = kilometersAway * milesPerKilometer;
    let hoursToDestination: number = milesToDestination / speedMph;
    let daysToDestination: number = hoursToDestination / 24;
    return daysToDestination;
} */
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
/* console.log(`Spacecraft '${spacecraftName}' would take ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
console.log(`Spacecraft '${spacecraftName}' would take ${getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`);
 */
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesToDestination = kilometersAway * this.milesPerKilometer;
        var hoursToDestination = milesToDestination / this.speedMph;
        var daysToDestination = hoursToDestination / 24;
        return daysToDestination;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("Spacecraft " + this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to reach " + location.name);
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
/* console.log(`Spacecraft '${spaceShuttle.name}' would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
console.log(`Spacecraft '${spaceShuttle.name}' would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`);
 */
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation("the Moon", kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
