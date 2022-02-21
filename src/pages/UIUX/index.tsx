import "./index.scss";
import { Fragment, useEffect, useState } from "react";
import { Gallery } from "../../components/Gallery";
import { Layout } from "../../components/Layout";
import { PROJECTS } from "./index.data";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../../core/interfaces/index.interface";
import { ReactComponent as NextPage } from "../../assets/icons/next-page.svg";
import { ReactComponent as PrevPage } from "../../assets/icons/prev-page.svg";

export const UIUX = ({
  setBannerStyles,
  setBannerText,
  setHeaderStyles,
}: any) => {
  const [project, setProject] = useState<Project>(PROJECTS[0]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setBannerStyles({
      color: "#FFFEF2",
      backgroundColor: "#4D8886",
    });
    setBannerText(project.name);
    setHeaderStyles({
      linksStyle: { color: "#FFFEF2" },
      headerStyles: { backgroundColor: "#4D8886" },
    });
  }, [setBannerStyles, setBannerText, setHeaderStyles, project.name]);

  useEffect(() => {
    if (!params.project) {
      navigate(`/uiux/${PROJECTS[0].slug}`);
      return;
    }

    const selectedProject = PROJECTS.find((curr, index) => {
      if (curr.slug === params.project) {
        setPageIndex(index);
        return true;
      }

      return false;
    });

    if (selectedProject) setProject(selectedProject);
    else navigate(`/uiux/${PROJECTS[0].slug}`);
  }, [params.project, navigate, pageIndex]);

  const navigateProjects = (selectedProject: Project) => {
    navigate(`/uiux/${selectedProject.slug}`);
  };

  return (
    <Layout params={project} images={project.mainImages}>
      <div className="wireframes">
        <h2 className="wireframes__header">Wireframes</h2>
        <Gallery images={project.wireframes} />

        {project.userFlow?.length ? (
          <Fragment>
            <h2 className="wireframes__header">User Flow</h2>
            <Gallery images={project.userFlow} />
          </Fragment>
        ) : null}

        <div className="navigation">
          <button
            className={!pageIndex ? "hidden" : ""}
            onClick={() => navigateProjects(PROJECTS[pageIndex - 1])}
          >
            <PrevPage />
            Previous
          </button>
          <button
            className={pageIndex === PROJECTS.length - 1 ? "hidden" : ""}
            onClick={() => navigateProjects(PROJECTS[pageIndex + 1])}
          >
            Next
            <NextPage />
          </button>
        </div>
      </div>
    </Layout>
  );
};
