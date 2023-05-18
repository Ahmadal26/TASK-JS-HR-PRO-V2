const employeesJSON = require("./employees.json");
const managersJSON = require("./managers.json");

class Employee {
  constructor(name, position, yearJoined, salary) {
    this.name = name;
    this.position = position;
    thsi.yearJoined = yearJoined;
    this.salary = salary;
  }
  idBadge() {
    return this.position + " " + this.name;
  }
}

class Maneger extends Employee {
  constructor(name, position, yearJoined, salary, bonusPercentage) {
    super(name, position, yearJoined, salary);
    this.bonusPercentage = bonusPercentage;
  }
  salaryIncrese(increaseAmount) {
    return increaseAmount + this.salary;
  }
  logMangerInfo() {
    console.log(this.name);
    console.log("since" + this.yearJoined);
    console.log("Bonus % " + this.bonusPercentage);
  }
  getWorkingYears(Year) {
    return this.yearJoined - Year;
  }
}

employeesJSON = new Employee.map([
  ("Ahmad", "Eng", "2024", 1600),
  ("Osama", "HR", "2025", "2000"),
  ("Wahab", "IT", "2026", "2200"),
]);
managersJSON = new Maneger.map([
  ("Ali", "Eng", "2024", 1600, 20),
  ("Aziz", "HR", "2025", "2000", 10),
  ("Adel", "IT", "2026", "2200", 30),
]);
console.log(idBadge(employeesJSON.forEach()));
const superHeroes = "developers";

managersJSON.filter((n) => n > n.yearJoined);
