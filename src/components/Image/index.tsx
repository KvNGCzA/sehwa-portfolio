import { useState } from "react";
import "./index.scss";
import { Image as ImageProps } from "../../core/interfaces/index.interface";

export const Image = ({ src, alt }: ImageProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const setLoaded = () => {
    setLoading(false);
  };

  return loading ? (
    <img src={src} alt={alt} onLoad={setLoaded} className="image" />
  ) : (
    <div />
  );
};
