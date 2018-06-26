/**
 * your app starts here.
 */
const Hello = 'world'

function x(aw: string) {
  return aw + y()
}


function y() {
  const arr = [1, 2, 3]

  return [].concat(...arr)
}

export default x