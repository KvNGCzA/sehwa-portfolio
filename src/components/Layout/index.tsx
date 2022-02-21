import "./index.scss";
import { Fragment } from "react";
import { BrandingSection } from "../BrandingSection";
import { Button } from "../Button";
import { Gallery } from "../Gallery";
import { LayoutProps } from "../../core/interfaces/index.interface";

export const Layout = ({
  params,
  children,
  wireframes = true,
  images = [],
}: LayoutProps) => {
  return (
    <div className="page page__branding">
      <p className="tagline">{params.tagline}</p>
      {params.buttonText ? (
        <Button text={params.buttonText} className="view-btn" />
      ) : null}

      {wireframes ? (
        <Fragment>
          <Gallery images={images} />
          <BrandingSection sections={params.sections} />
        </Fragment>
      ) : null}

      {children}
    </div>
  );
};
