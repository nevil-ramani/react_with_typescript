// import React from 'react'

// const ProjectsPage = () => {
//   return (
//     <h1>ProjectsPage</h1>
//   )
// }

// export default ProjectsPage



import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {

  return (
   <>
     <h1>Projects</h1>
    <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
   </>
  );
}

export default ProjectsPage;