
/**
 *  This function will take an array of heroes and return an array of arrays of heroes
 * with a maximum of 9 heroes per array.
 * This is useful for pagination.
 * @param {Array} heroes
 * @returns {Array} newHeroes
 * @example
 * paginate(heroes){
 *         return newHeroes
 * }
 */






export const paginate = (heroes) => {
 
const itemsPerPage = 9
const numberOfPages = Math.ceil(heroes.length / itemsPerPage)

const newHeroes = Array.from({ length: numberOfPages }, (_, index) => {
  const start = index * itemsPerPage
  return heroes.slice(start, start + itemsPerPage)
})

return newHeroes

}