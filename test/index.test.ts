import { sayHello } from "../src/index";
import { expect } from "chai";

describe("Say Hello", () => {
  it("should say hello at least", () => {
    expect(sayHello()).to.be.equal("Hello");
  });
});
