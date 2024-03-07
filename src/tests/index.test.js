const request = require("supertest");
const server = require("../server");
const app = request(server);
describe("Get Endpoints", () => {
  it("Get", async () => {
    const res = await app.get("/").send({
      name: "test /",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");
  });

  it("Get greating", async () => {
    const res = await app.get("/greating").send({
      name: "test /greating",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");
  });

  it("Get greating again", async () => {
    const res = await app.get("/greating-again").send({
      name: "test /greating-again",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("status");
  });
});
afterAll(async () => {
  server.close();
});
