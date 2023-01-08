let profile = new Map();
profile.set("Name", "Alex");
profile.set("Age", 36);
profile.set("Adres", "Moscow");

function printProfile() {
  // profile.forEach((value, key) => {
  //   console.log(`Ключ - ${key},  Значение - ${value}`);
  // });
  for (let [key, value] of profile)
    console.log(`Ключ - ${key},  Значение - ${value}`);
}

printProfile();
