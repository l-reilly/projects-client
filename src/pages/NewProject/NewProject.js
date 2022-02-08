import React from "react";
import { createProject, uploadImage } from "../../api";

function NewProject() {
  const [state, setState] = React.useState({ title: "", description: "" });
  const [file, setFile] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", file, file.name);
    const { data: imageData } = await uploadImage(formData);
    console.log("imageData", imageData);
    const { data } = await createProject({
      ...state,
      imageUrl: imageData.imageUrl,
    });
    console.log("data", data);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = ({ target }) => {
    const [file] = target.files;
    setFile(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
      />
      <input type="file" name="imageUrl" onChange={handleFileChange} />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProject;
