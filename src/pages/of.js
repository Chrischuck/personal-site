import React from "react";
import "../styles/of.css";

const OnlyFans = () => {
  const [showImg, setShowImg] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowImg(true);
    }, 2500);
  }, []);

  if (showImg) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <img src={"/nudes.png"} style={{ maxHeight: 400, borderRadius: 5 }} />
      </div>
    );
  }

  return (
    <div style={{ width: 200, margin: "auto", marginTop: "40vh" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1900 400"
        style={{ animation: "2s linear infinite pulse_animation" }}
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: ".a{fill:none}.b{fill:#00aeef}.c{fill:#008ccf}",
            }}
          />
        </defs>
        <rect className="a" width={400} height={400} />
        <path
          className="b"
          d="M137.5,75a125,125,0,1,0,125,125A125,125,0,0,0,137.5,75Zm0,162.5A37.5,37.5,0,1,1,175,200,37.45,37.45,0,0,1,137.5,237.5Z"
        />
        <path
          className="c"
          d="M278,168.75c31.76,9.14,69.25,0,69.25,0-10.88,47.5-45.38,77.25-95.13,80.87A124.73,124.73,0,0,1,137.5,325L175,205.81C213.55,83.3,233.31,75,324.73,75H387.5C377,121.25,340.81,156.58,278,168.75Z"
        />
        <rect className="a" x={500} width={1400} height={400} />
        <path
          className="b"
          d="M618.68,78C548.83,78,514,129.54,514,199.83,514,270.93,548.3,322,618.68,322c69.88,0,105-51,105-122.12C723.7,128.34,690,78,618.68,78Zm0,203.66c-40,0-47-41.82-47-81.86,0-40.34,6.61-81.53,47-81.53S666,159.19,666,199.83C666,240.72,659.47,281.69,618.68,281.69ZM857.4,132.39c-22.72,0-39.74,9.65-54.35,26.84L801.78,152a16.77,16.77,0,0,0-16.52-13.89h-32.2V307.86a8.38,8.38,0,0,0,8.39,8.39h44.62V199.62a16.29,16.29,0,0,1,2.89-9.45q13.44-18.87,28-18.86c13.88,0,16.77,10.05,16.77,23.82V307.86a8.39,8.39,0,0,0,8.39,8.39h44.62V186.08C906.72,150.85,887.26,132.39,857.4,132.39Zm149.15,147.33a18.46,18.46,0,0,1-2.86.29q-9.08,0-9.06-11.06V61.59L949.1,66.5a8.39,8.39,0,0,0-7.49,8.34V271c0,33.69,19,51,49,51a82.61,82.61,0,0,0,32.21-6l-8.68-31.37A6.7,6.7,0,0,0,1006.55,279.72ZM1145,138.09a8.38,8.38,0,0,0-8.15,6.42l-33.35,137.85L1073,144.67a8.39,8.39,0,0,0-8.19-6.58h-49.63L1066,304.37a16.78,16.78,0,0,0,16,11.88h5.69c-10.86,26.15-27.23,33.27-57.37,37.25l4.53,29.52a8.35,8.35,0,0,0,9,7.11c47-4.71,78.1-27.16,92.53-73.54l56.7-178.5Z"
        />
        <path
          className="c"
          d="M1215.43,92.13V316.25h46.63a8.39,8.39,0,0,0,8.39-8.39V224h51a12.57,12.57,0,0,0,12.51-11.23l3-28h-66.48V123h67a12.57,12.57,0,0,0,12.45-10.77L1354,83.74H1223.82A8.39,8.39,0,0,0,1215.43,92.13Zm308.1,164.4V138.09h-32.22a16.78,16.78,0,0,0-16.45,13.48l-.32,1.62c-11.19-13.86-21.66-20.8-39.78-20.8-48.88,0-74.15,43.76-74.15,94.28,0,50.34,18.56,95.28,68.78,95.28,21.67,0,36.16-11.18,47.84-27.17,4.92,9.29,12.38,15.48,21.22,19.78a23.53,23.53,0,0,0,32-12.4l7.45-18.45C1526,277.7,1523.53,270.21,1523.53,256.53Zm-56.15,11.78c-6.81,9.82-12.72,14.73-23.22,14.73-25.51,0-28.53-30.43-28.53-56s5.31-56,30.87-56c7.88,0,12.46,2.33,19.47,9.72a16.69,16.69,0,0,1,4.54,11.46v66.4A17.22,17.22,0,0,1,1467.38,268.31ZM1637.79,139.1q-13.24,6.72-24.66,20.13l-1.26-7.25a16.78,16.78,0,0,0-16.53-13.89h-32.2V307.86a8.39,8.39,0,0,0,8.39,8.39h44.62V199.62a16.29,16.29,0,0,1,2.89-9.45q13.44-18.87,28-18.86c13.88,0,16.78,10.05,16.78,23.82V307.86a8.39,8.39,0,0,0,8.39,8.39h44.62V186.07C1716.81,132.19,1669.68,123,1637.79,139.1Zm172.52,59.38c-7.44-3.23-12.34-6.14-12.72-13.77-.35-6.92,5.18-12.9,12.06-13.8q23.67-3.09,46.95,9.42a8.26,8.26,0,0,0,10.73-2.94l15.12-23.19c-18.38-15-41.91-21.81-65.43-21.81-37.35,0-72.81,18.54-72.81,54.35,0,49,54.75,54.33,77.17,63.58,8.73,3.61,12.84,7.2,13.08,16.12a16.61,16.61,0,0,1-13.82,16.6q-28.29,4.65-53.67-12.36a8.24,8.24,0,0,0-10.67,1.53l-20.8,23.23C1755.29,313.78,1783.21,322,1810,322c40.25,0,79.18-18.9,79.18-58.71C1889.16,213.9,1841.89,212.22,1810.31,198.48Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 188"
        style={{ position: "absolute", width: 0, height: 0, opacity: 0 }}
      >
        <clipPath
          clipPathUnits="objectBoundingBox"
          id="hexagon-clippath"
          transform="scale(0.005 0.005319148936170213)"
        >
          <path d="M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z" />
        </clipPath>
      </svg>
    </div>
  );
};

export default OnlyFans;
