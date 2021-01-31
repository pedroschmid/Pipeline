const request = require("supertest");
const { app } = require("../app");

describe("GET Endpoint", () => {
  it("should retrieve array of users", async () => {
    const res = await request(app).get("/users");

    const array = res.body.length > 0 ? true : false;

    expect(res.statusCode).toEqual(200);
    expect(array).toEqual(true);
  });
});

describe("POST Endpoint", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ username: "test", password: "test" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("body");
  });
});
