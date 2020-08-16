import _ from "lodash";

export default function filter(array, options) {
  const { textProperty = "", valueProperty } = options;

  let newarray = array.filter(
    (item) => _.get(item, textProperty) === valueProperty
  );

  return newarray;
}
