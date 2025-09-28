export default class Dog {
  constructor(name, sex, breed, img, present, age, chipNumber, owner) {
    this.name = name || "Okänd";
    this.sex = sex || "Okänt kön";
    this.breed = breed || "Okänd ras";
    this.img = img || "https://via.placeholder.com/300x200?text=Ingen+bild";
    this.present = present ?? false;
    this.age = age ?? "Okänd ålder";
    this.chipNumber = chipNumber || "Okänt chipnummer";
    this.owner = owner || { name: "Okänd", lastName: "", phoneNumber: "" };
  }

  static fromJson(json) {
    return new Dog(
      json.name,
      json.sex,
      json.breed,
      json.img,
      json.present,
      json.age,
      json.chipNumber,
      json.owner
    );
  }
}