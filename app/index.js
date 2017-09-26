function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`;

}

Wizard.prototype.pet_name;
// Won't work: no enclosing object to provide this context
// Wizard.prototype.info = () => return `I have a ${this.pet} named ${this.pet_name}`;

// Need an actual function
Wizard.prototype.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry);
console.log(harry.greet());
