import React, { useEffect, useState } from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';


const Comparison = ({ organPath="/heart.svg", oceanPath="/currents.png" }) => {

  const [clipedImage, setClipedImage] = useState(null);

  useEffect(() => {
    fetch(organPath).then((response) => {
      console.log(response);
      // get svg
      return response.text();
    }).then((svg) => {
      console.log(svg);
      const svgEl = new DOMParser().parseFromString(svg, "image/svg+xml");
      // get paths
      const paths = svgEl.querySelectorAll("path");

      const path = paths[0];
      if (!path) {
        return;
      }

      const d = path.getAttribute("d");
      if (!d) {
        return;
      }

      const clipPath = <clipPath path={d} />;

      const img = <img src={oceanPath} style={{ clipPath: `path("${d}")` }} />;
      setClipedImage(img);
    });
  }, [organPath, oceanPath]);



  return (
    <div className={"flex flex-col items-center w-full"}>
      <img src={organPath} className={"w-1/2"} />
      {clipedImage}

    </div>
  );
};

export default Comparison;
