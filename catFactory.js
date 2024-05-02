class CatFactory {
  constructor(breed) {
    this.breed = breed;
  }

  meow() {
    console.log("meow");
  }
  purr() {
    console.log("purr");
  }

  shower() {
    console.log("lick lick lick...");
    setTimeout(() => {
      console.log("lick... done showering");
    }, 5000);
  }
  zoomies() {
    console.log("meow");
  }
}

class OrangeCat {
  constructor() {}
}

const cat = new CatFactory("Orange");
cat.shower();
