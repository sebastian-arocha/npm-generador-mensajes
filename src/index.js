const nombres = [
  "Tú puedes lograr todo lo que te propongas",
  "Nunca pares de aprender!",
  "El éxito está en tus manos",
  "Oye tú. Serás un gran desarrollador :)",
  "Lo más inspirador que puedes ver, eres tú mismo. Mira hasta donde has llegado.",
  "Eres inspiración para tu familia!",
  "Vas a llegar lejos, confía en ti.",
];

const randomMsg = () => {
  const message = nombres[Math.floor(Math.random() * nombres.length)];
  console.log(message);
};

module.exports = { randomMsg };
