
// A class to describe a population of virtual organisms
// In this case, each organism is just an instance of a population object

function Population(p, m, num) {

  this.population; // Array to hold the current population
  this.matingPool; //ArrayList which we will use for output phrases
  this.generations = 0; // Target phrase
  this.finished = false; // Are we finished evolving?


  this.target = p; // Target phrase
  this.mutationRate = m; // Mutation mutationRate
  this.perfectScore = 1;

  this.best = "";

  this.population = [];
  for (var i = 0; i < num; i++) {
    this.population[i] = new DNA(this.target.length);
  }
  this.matingPool = [];

  // Fill our fitness array with a value for
  // every member of population

  this.calcFitness = function() {
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness(target);
    }
  }
  this.calcFitness();

  // Genrate a mating pool
  this.naturalSelection = function() {
    // Clear the ArrayList
    this.matingPool = []

    var maxFitness = 0;
    // a higher fitness = more entries to mating pool
    // a lower fitness = less entries to mating pool
    for (var i = 0; i < this.population.length; i++) {
      var fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
      var n = floor(fitness * 100); // Arbitrary multiplier
      for (var j = 0; j < n; j++) {
        this.matingPool.push(this.population[i]);
      }
    }
    console.log(this.matingPool);
  }

  // Create a new genetation
  this.generate = function() {
    // Refill the population with children from the matrix
    for (var i = 0; i < this.population.length; i++) {
      // var a = floor(random(this.matingPool.length));
      // var b = floor(random(this.matingPool.length));
      var partnerA = this.acceptReject();
      var partnerB = this.acceptReject();
      var child = partnerA.crossover(partnerB);
      child.mutate(this.mutationRate);
      this.population[i] = child;
    }
    this.generations++;
  }

  this.acceptReject = function() {
    var besafe = 0;
    while (true) {
      var index = floor(random(this.population.length));
      var partner = this.population[index]
      var r = random(maxFitness);
      if (r < partner.fitness) {
        return partner;
      }
      besafe++;
      if (besafe > 10000) {
        return null;
      }
    }
  }
}
