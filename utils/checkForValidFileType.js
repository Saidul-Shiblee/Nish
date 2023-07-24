//function to chekc the valid file format
export default function chekForValidFileType(validFileTypes, TypesToCheck) {
  let isValid = true;
  for (let i of TypesToCheck) {
    if (!validFileTypes.includes(i)) {
      isValid = false;
      return isValid;
    }
  }
  return isValid;
}
