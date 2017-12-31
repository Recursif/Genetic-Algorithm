 function draw() {
   // Calculate fitness
   population.calcFitness();
   // Genarate mating pool
   population.naturalSelection();
   // Create next generation
   population.generate();


   population.evaluate();

   // If we found the target
 }
