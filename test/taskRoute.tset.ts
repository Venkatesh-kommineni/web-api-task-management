import request from "supertest";
import app from "../src/app";

describe("Task Routes", () => {
  it("GET /api/tasks returns array", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("POST /api/tasks creates a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task", priority: "High", status: "Open" });
    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe("Test Task");
  });

  it("DELETE /api/tasks/:id deletes a task", async () => {
    const createRes = await request(app)
      .post("/api/tasks")
      .send({ title: "Delete Me", priority: "Low", status: "Open" });

    const id = createRes.body.data.id;
    const deleteRes = await request(app).delete(`/api/tasks/${id}`).set("x-custom-auth", "secure-delete");
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body.message).toBe("Task deleted successfully.");
  });
});
