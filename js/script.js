const hitungLuasPersegiButton = document.getElementById(
  "hitung-luas-persegi-button"
);
const resetLuasPersegiButton = document.getElementById(
  "reset-luas-persegi-button"
);
const sisiPersegiInput = document.getElementById("sisi-persegi-input");
const luasPersegiResult = document.getElementById("luas-persegi-result");

const sisixsisi = document.getElementById("luas-sisixsisi-result");
const persegix = document.getElementById("luas-persegix-result");

hitungLuasPersegiButton.addEventListener("click", () => {
  const sisi = sisiPersegiInput.value;
  const luas = sisi * sisi;

  luasPersegiResult.textContent = `Luas Persegi: ${luas}`;
  sisixsisi.textContent = `L = S X S`;
  persegix.textContent = `L = ${sisi} X ${sisi}`;
});

resetLuasPersegiButton.addEventListener("click", () => {
  sisiPersegiInput.value = "";
  luasPersegiResult.textContent = "";
});

const hitungKelilingPersegiButton = document.getElementById(
  "hitung-keliling-persegi-button"
);

const resetKelilingPersegiButton = document.getElementById(
  "reset-keliling-persegi-button"
);
const sisiPersegiInput2 = document.getElementById("sisi-persegi-input-2");
const kelilingPersegiResult = document.getElementById(
  "keliling-persegi-result"
);

const pss = document.getElementById("keliling-pss-result");
const psss = document.getElementById("keliling-psss-result");

hitungKelilingPersegiButton.addEventListener("click", () => {
  const sisi = sisiPersegiInput2.value;
  const keliling = 4 * sisi;

  kelilingPersegiResult.textContent = `Keliling Persegi: ${keliling}`;
  pss.textContent = `K = 4 X S`;
  psss.textContent = `K = 4 X ${sisi}`;
});

resetKelilingPersegiButton.addEventListener("click", () => {
  sisiPersegiInput2.value = "";
  kelilingPersegiResult.textContent = "";
});
