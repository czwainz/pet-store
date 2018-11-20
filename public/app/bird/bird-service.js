// @ts-ignore
let api = axios.create({
  baseURL: "//localhost:3000/api/birds"
})

let _birds = []

export default class BirdService {
  delete(id, draw) {
    api.delete(id).then(res => this.getBirds(draw))
  }

  getBirds(cb) {
    api.get('').then(res => {
      console.log(res.data)
      _birds = res.data
      cb()
    })
  }
  get birds() {
    return _birds
  }
}