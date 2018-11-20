import CatController from "./cat/cat-controller.js";
import DogController from "./dog/dog-controller.js";
import BirdController from "./bird/bird-controller.js"

console.log("Neat this is my app")

class App {
  constructor() {
    this.controllers = {
      catController: new CatController(),
      dogController: new DogController(),
      birdController: new BirdController()
    }
  }
}

// @ts-ignore
window.app = new App()