const firstName = prompt("Siapa namamu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
   },
   language: language
};
 
if (user.language === "tegal") {
   alert("Sugeng rawuh "+user.name.first +", neng webiste e Reziq" + "!");
} else {
alert("Selamat Datang " + user.name.first + ", Di website Reziq" + "!");
}