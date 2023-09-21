import Person from "./models/Person.js"; // Importuojam modeli savo iš models folderio.

export async function addNewPerson(req, res) {
  const { name, age } = req.body; // Susikuriam name ir age ir pasiemam iš body dalies.
  try {
    const mewPerson = new Person({ name, age }); // pasiemam i konstanta savo modeli ir jame isidedam name ir age kaip nauja eilute/elementa. Kitaip tariant struktura kuri egzistuoja tik kode pokolkas.
    await mewPerson.save(); // Tai padarius isisaugo jau duomenu bazeje.
    res.json(mewPerson); // Siunciam nauja zmogu kitaip tariant siunciam atgal responsa.
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//{         ---ATSAKYMAS KURI GAVOME SIUNCIANT POST METODU---
//   "name": "Laurynas",                    musu kurtas name
//   "age": 25,                             musu kurtas age
//  "_id": "650b231442ee67568de7142d",      ID kuri sugeneravo musu dotenv
//  "__v": 0
// }
