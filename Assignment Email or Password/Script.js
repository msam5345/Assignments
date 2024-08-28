
let gmail = prompt("Enter Your Gmail:");

let password = prompt("Enter Your Password:");


if (gmail === "user@gmail.com" && password === "password123") {
    console.log("Login Successful!")
    alert("Login Successful!")
}
else if (gmail === "" && password === "") {
    alert("Both Gmail and Password Are Required.")
    console.log("Both Gmail and Password Are Required.")
}
else {
    alert("Invalid Gmail Or Password.")
    console.log("Invalid Gmail Or Password.")
}