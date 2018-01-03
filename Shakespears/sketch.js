

var target;
var popmax;
var mutationRate;
var population;

var bestPhrase;
var allPhrases;
var stats;

function setup() {
  bestPhrase = createP("Best phrase:");
  //bestPhrase.position(10,10);
  //bestPhrase.class("best");

  allPharses = createP("All phrases:");
  //allPhrases.position(600, 10);
  //allPhrases.class("all");

  stats = createP("Stats");
  //stats.position(10,200);
  //stats.class("stats");

  target = "To be or not to be.";
  popmax = 200;
  mutationRate = 0.01;

  // Create a population with a target phrase, mutationRate and popmax
  population = new Population(target , mutationRate, popmax);
}


 function draw() {
   // Calculate fitness
   population.calcFitness();
   // Genarate mating pool
   population.naturalSelection();
   // Create next generation
   population.generate();

   population.evaluate();

   // If we found the target
   if (population.finished) {
     noLoop();
   }
   displayInfo();
 }

function displayInfo() {
  // Display current status of Population
  var answer = population.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  var statstext = "total generation:  " + population.generations  + "<br>"
  //statstext += "average fitness:   " + floor(100 * population.fitness)  + "<br>"
  statstext += "total population:   " + popmax + "<br>"
  statstext += "average fitness:   " + floor(mutationRate) + "<br>"

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + population.allPhrase);
}
