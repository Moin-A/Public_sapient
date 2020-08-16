import _ from "lodash";

function filter(arra, options) {
  const { textProperty, valueProperty } = options;

  let newarray = arra.filter(
    (item) => _.get(item, textProperty) === valueProperty
  );

  return newarray;
}

filter.defaultProps = {
  arra: [],
  options: {},
};

export default filter;
