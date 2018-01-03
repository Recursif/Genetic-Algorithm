
// Constructor (makes a random DNA)

function DNA(num) {
  // The genetic sequence
  this.genes = []
  this.fitness = 0;
  for (var i = 0; i < num; i++) {
    this.genes[i] = newChar();
  }

  // Converts character array to a String
  this.getPhrase = function() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % ouput)
  this.calcFitness = function() {
    var score = 0;
    for (var i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  // crossover
  this.crossover = function(partner) {
    // A new children
    var child = new DNA(this.genes.length);

    var midpoint = floor(random(this.genes.length));

    // Half from one, half from the other
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }

  // Based on a mutation probability, picks a new random char
  this.mutate = function(mutationRate) {
    for (var i = 0; i < genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = newChar();
      }
    }
  }
}

// mutate DNA
function newChar() {
  var c = floor(random(63, 122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}
