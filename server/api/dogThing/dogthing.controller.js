let dogs = [
  { name: "berrdash", breed: "corgi" },
  { name: "dash", breed: "chowchow" },
  { name: "beer", breed: "mut" },
  { name: "champagne", breed: "akita" },
  { name: "dogo", breed: "terrier" },
  { name: "doge", breed: "lab" },
  { name: "mucham", breed: "mut" }
];

export const getDogs = (req, res, next) => {
  res.json({ dogs });
}

export const adoptDog = (req, res, next) => {
  let dog = req.body;
  dogs = dogs.filter(d => d.name !== dog.name);
  res.sendStatus(200);
}
