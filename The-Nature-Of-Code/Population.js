
this.target = p; // Target phrase
this.mutationRate = m; // Mutation mutationRate
this.perfectScore = 1;

this.best = "";

this population = [];
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
