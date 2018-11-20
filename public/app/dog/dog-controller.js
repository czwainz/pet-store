import DogService from './dog-service.js'

let _dService = new DogService()

function draw() {
  let template = ''
  _dService.dogs.forEach(dog => {
    template += `
    <div class="card" style="max-width: 20rem;">
      <div class="card-body" onclick="app.controllers.catController.get('${dog._id}')">${dog.name} ${dog.age}<img src="${dog.img}" style="max-width: 15rem;" /></div>
    </div>
    `})
  document.getElementById('pets').innerHTML = template
}

export default class DogController {
  constructor() {
    _dService.getDogs(draw)
  }

  draw() {
    draw()
  }
  delete(id) {
    _dService.delete(id, draw)
  }

}