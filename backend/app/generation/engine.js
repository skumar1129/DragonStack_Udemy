const Generation = require('./index.js');
const GenerationTable = require('./table.js');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.newGeneration();
  }

  newGeneration(){
     const generation = new Generation()

    GenerationTable.storeGeneration(generation)
      .then(({generationId}) => {
        this.generation = generation
        this.generation.generationId = generationId;

        this.timer = setTimeout(() =>
          this.newGeneration(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(error => console.error(error));



  }

  stop() {
    clearTimeout(this.timer);
  }
}

module.exports = GenerationEngine;
