export const loginRequest = async (login, password) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    })
  }).then(() => {
    if (login === 'admin' && password === '123456'){
      return 'ok'
    }
    else {
      return 'sai cmnr'
    }
  })
}
