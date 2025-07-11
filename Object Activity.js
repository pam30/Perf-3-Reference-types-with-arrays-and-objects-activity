
let car = {
  type: "Sedan",
  model: "Camry",
  color: "Red"
};
console.log("Type of car:", typeof car); 
car.type = "Toyota";
console.log("Updated car type:", car);

car.wheels = 4;
console.log("Car with new property (wheels):", car);
