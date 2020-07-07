const should = require("chai").should;
const except = require("chai").expect;
const supertest = require("supertest");
import "mocha";
import { TestUtils } from "../src/utils/TestUtil";

let api = supertest("http://localhost");

describe("Users API", () => {
  beforeEach(() => {
    console.log("started mocking");
    return TestUtils.mock();
  });

  afterEach((done) => {
    TestUtils.rollback();
    done();
  });

  it("shoudl print", (done) => {
    console.log("H");
    done();
  });
});
