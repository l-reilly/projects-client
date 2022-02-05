import React from "react";
import { getProjects } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
import { Link } from "react-router-dom";

function Projects() {
  const { data, loading, error } = useFetch(getProjects);

  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <h2>Projects</h2>
      <div>
        {data?.map((project) => (
          <div key={project._id}>
            <p>{project.title}</p>
            <Link to={`/projects/${project._id}`}>show more</Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default Projects;
