import { getTasks, createTask, deleteTask } from "../src/services/taskService";
import { messages } from "../src/utilities/constants";

const mockRes = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Task Service", () => {
  it("getTasks should call res.json", () => {
    const req: any = {};
    const res = mockRes();
    getTasks(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("createTask should add a task", () => {
    const req: any = { body: { title: "dev access", priority: "High", status: "Open" } };
    const res = mockRes();
    const next = jest.fn();
    createTask(req, res, next);
    expect(res.json).toHaveBeenCalled();
    expect(res.json.mock.calls[0][0].data.title).toBe("dev access");
  });

  it("deleteTask should remove a task", () => {
    const req: any = { params: { id: "1" } };
    const res = mockRes();
    const next = jest.fn();
    deleteTask(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ success: true, message: messages.DELETE_SUCCESS });
  });
});
