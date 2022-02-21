import "./index.scss";
import { useEffect } from "react";
import { Gallery } from "../../components/Gallery";
import { Layout } from "../../components/Layout";
import { Project } from "../../core/interfaces/index.interface";

const ILLUSTRATION_PARAMS: Project = {
  tagline: `Here are some illustrations I did that represents beauty , culture and freedom in beautiful bold colours.`,
  sections: [],
};

export const Illustration = ({
  setBannerStyles,
  setBannerText,
  setHeaderStyles,
}: any) => {
  useEffect(() => {
    setBannerStyles({
      color: "#FFFEF2",
      backgroundColor: "#36575A",
    });
    setBannerText("Illustrations");
    setHeaderStyles({
      linksStyle: { color: "#FFFEF2" },
      headerStyles: { backgroundColor: "#36575A" },
    });
  }, [setBannerStyles, setBannerText, setHeaderStyles]);

  return (
    <Layout params={ILLUSTRATION_PARAMS} wireframes={false}>
      <div className="wireframes">
        <Gallery />
      </div>
    </Layout>
  );
};
