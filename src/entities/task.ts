export interface Task {
  id: number;
  title: string;
  description?: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Review" | "Done" | "Blocked";
}

export interface TaskInput {
  title: string;
  description?: string;
  priority: "Critical" | "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Review" | "Done" | "Blocked";
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
