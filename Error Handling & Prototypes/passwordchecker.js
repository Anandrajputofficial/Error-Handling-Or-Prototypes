class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  const user = new User("Mithun", "password123");
  console.log(user.password); // Output: "***********"
  
  user.setpassword = "myPassword123";
  console.log(user.setpassword); // Output: "****************"
  
  user.setpassword = "invalidpassword";
  // Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.
    