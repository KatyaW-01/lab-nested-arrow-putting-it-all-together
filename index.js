function createLoginTracker(userInfo){
  let attemptCount = 0
  const checkPassword = (passwordAttempt) => {
    attemptCount += 1
    if(passwordAttempt === userInfo.password && attemptCount <= 3){
      return "Login successful"
    }
    else if(passwordAttempt !== userInfo.password && attemptCount <= 3){
      return `Attempt ${attemptCount}: Login failed`
    }
    else if(attemptCount > 3){
      return "Account locked due to too many failed login attempts"
    }
  }
  return checkPassword
}

let info = {
  "username": "Katya01",
  "password": "password123"
}

let login = createLoginTracker(info)

console.log(login("password"))
console.log(login("anotherPassword"))
console.log(login("password123"))

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};