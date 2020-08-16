import Filter from "../pages/utils/filter";

describe(" Test Button Component", () => {
  it("Verity button component ", () => {
    let arr = Filter([{ text: true }, { text: true }], {
      textProperty: "text",
      valueProperty: true,
    });
    expect(arr.length).toEqual(2);
  });
});
