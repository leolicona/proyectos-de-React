//Fuction to repalce " " in the string for "_" and remove accents
export const replaceSpace = (string) => {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
};

console.log(replaceSpace("hola corazón"));