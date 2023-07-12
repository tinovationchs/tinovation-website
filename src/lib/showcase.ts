interface Project {
  authors: string[];
  date: string;
  description: string;
  guide_filename?: string;
  github_link?: string;
  demo_link?: string;
}

interface Projects {
  [index: string]: Project;
}

const projects: Projects = {};

export default projects;
