import { api } from "./api";

export async function uploadImage(file) {
  return api.post("/image-upload", file);
}
