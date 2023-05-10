Promise
  .resolve()
  .then(() => {
    throw new Error('外部错误')
  }, () => {
    console.log('This is never called');
  })
  .catch(err => {
    console.log('捕捉到错误', err.message);
  })