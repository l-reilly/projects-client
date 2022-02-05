import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../api";
import { Suspense } from "../../components/Suspense";

function Project() {
  const { projectId } = useParams();
  const { data, error, loading } = useFetch(
    () => getProjectById(projectId),
    [projectId]
  );

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
      <h2>Project</h2>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
    </Suspense>
  );
}

export default Project;
