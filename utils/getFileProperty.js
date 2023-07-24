//function to get properties of selected file
export default function getFileProperty(array, propertyName) {
  switch (propertyName) {
    case "size":
      let fileSize = 0;
      array.forEach((file) => {
        fileSize = fileSize + file.size;
      });
      return fileSize;

    case "name":
      let fileTypes = [];
      array.forEach((file) => {
        fileTypes.push(file.name);
      });
      return fileTypes;

    case "type":
      let FileNames = [];
      array.forEach((file) => {
        FileNames.push(file.type);
      });
      return FileNames;

    default:
      break;
  }
}
