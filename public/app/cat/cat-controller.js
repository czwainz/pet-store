import CatService from './cat-service.js'

let _cService = new CatService()

function draw() {
  let template = ''
  _cService.cats.forEach(cat => {
    template += `
    <div class="card">
      <div class="card-body" onclick="app.controllers.catController.get('${cat._id}')">${cat.name} ${cat.age}<img src="${cat.img}" style="max-width: 15rem;" /></div>
    </div>
    `
  })
  document.getElementById('pets').innerHTML = template
}

export default class CatController {
  constructor() {
    _cService.getCats(draw)
  }
  draw() {
    draw()
  }
  delete(id) {
    _cService.delete(id, draw)
  }

}