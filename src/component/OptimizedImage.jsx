import { useState, useEffect } from "react";

const OptimizedImage = ({ placeholderSrc, src, ...props }) => {
  //https://blog.logrocket.com/progressive-image-loading-react-tutorial/

  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
    console.log(imgSrc)
  }, [src]);

  const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded"
  const propClass = props.className ? props.className : ""

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass} ${propClass}`}
    />
  );
};

export default OptimizedImage