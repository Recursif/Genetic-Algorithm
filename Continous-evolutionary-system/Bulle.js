
// At any moment there the Bloop will failed out
this.reproduce = function() {
  if (random(1) < 0.0005) {
    var childDNA = this.dna.copy();
    childDNA.mutate(0.01);
    return new Bloop(this.position, childDNA);
  } else {
    return null;
  }
}
