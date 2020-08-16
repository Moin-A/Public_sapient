import Filter from "../util_filter";

describe(" Test Button Component", () => {
  it("Verity button component ", () => {
    let arr = Filter([{ text: true }, { text: true }], {
      textProperty: "text",
      valueProperty: true,
    });
    expect(arr.length).toEqual(2);
  });
});
