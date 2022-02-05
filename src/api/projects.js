import { api } from "./api";

export function createProject(project) {
  return api.post("/projects", project);
}

export function updateProject(projectId, project) {
  return api.put(`/projects/${projectId}`, project);
}

export function getProjects() {
  return api.get("/projects");
}

export function getProjectById(projectId) {
  return api.get(`/projects/${projectId}`);
}
