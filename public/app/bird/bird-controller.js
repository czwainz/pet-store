import BirdService from './bird-service.js'

let _bService = new BirdService()

function draw() {
  let template = ''
  _bService.birds.forEach(bird => {
    template += `
    <div class="card" style="max-width: 20rem;">
      <div class="card-body" onclick="app.controllers.catController.get('${bird._id}')">${bird.name} ${bird.age}<img src="${bird.img}" style="max-width: 15rem;" /></div>
    </div>
    `})
  document.getElementById('pets').innerHTML = template
}

export default class BirdController {
  constructor() {
    _bService.getBirds(draw)
  }

  draw() {
    draw()
  }
  delete(id) {
    _bService.delete(id, draw)
  }

}