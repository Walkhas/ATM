const user = {
    "Mali": {
      pass: 'Mali123',
      balance: '200'
    }
    "Gera": {
      pass: 'Gera123',
      balance: '290'
    }
    "Maui": {
      pass: 'Maui123',
      balance: '67'
    }
}
  
function login(username, password) {
  if (user[username] && user[username].pass === password) {
    return 'Inicio Exitoso!'
  }
  return 'Usuario o contraseña incorrectos'
} 