export const paginate = (heroes) => {
 
const itemsPerPage = 9
const numberOfPages = Math.ceil(heroes.length / itemsPerPage)

const newHeroes = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage
  return heroes.slice(start, start + itemsPerPage)
})
console.log(newHeroes)
return newHeroes

}