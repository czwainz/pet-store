// @ts-ignore
let api = axios.create({
  baseURL: "//localhost:3000/api/cats"
})

let _cats = []

export default class CatService {
  delete(id, draw) {
    api.delete(id).then(res => this.getCats(draw))
  }
  getCats(cb) {
    api.get('').then(res => {
      console.log(res.data)
      _cats = res.data
      cb()
    })
  }
  get cats() {
    return _cats
  }
}