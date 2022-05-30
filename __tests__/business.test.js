import Haiku from "../src/js/business.js"

describe ('Haiku constructor', () => {
  test('should construct Haiku object', () => {
    let haiku = new Haiku("text");
    expect(haiku.text).toEqual("text");
  });
});