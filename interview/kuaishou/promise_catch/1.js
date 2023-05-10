const p1 = new Promise((resolve, reject) => {
  reject('1')
})

const p2 = new Promise((resolve, reject) => {
  reject('2')
})

p1
  .then(() => { }, err => {
    console.log(err);
    return p2
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('??',err);
  })