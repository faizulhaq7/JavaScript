let adminAge = 45
const adminState = "Uttar Pradesh"
var mailId // not prefered [issue in block space and functional scope]
adminName = "Abhi"

adminAge = 60
// adminState = "Bihar" throws a TypeError: Assignment to constant variable.
adminName = "Faiz"
mailId = "faiz@google.com"

console.table([adminName, adminAge, adminState, mailId])