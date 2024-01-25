const titleCase = (str: string) => {
  if (str === "" || str === undefined) return "";
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

export default titleCase;
