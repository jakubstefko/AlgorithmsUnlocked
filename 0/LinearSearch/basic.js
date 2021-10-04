// this function will work properly ONLY if searchedElement
// will have some basic type
// I am ommiting all type checking process to purely focus
// on algorithms
// -1 will be default error return
function linearSearch(array = [], searchedElement = -1) {
  let response
  response = -1

  array.forEach((element, index) => {
    if (element === searchedElement) response = index
  })

  return response
}

;(() => {
  let a, b, c, arr

  arr = [2, 3, 1, 2]
  a = linearSearch(arr, 5)
  b = linearSearch(arr, 2)
  c = linearSearch(arr, 1)

  console.log(a, b, c)
})()
