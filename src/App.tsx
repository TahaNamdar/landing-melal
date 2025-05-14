import "./App.css";
import { LandingPage } from "./landing/landing";

function App() {
  return (
    <div className="relative h-full w-full bg-accent overflow-hidden">
      <LandingPage />

      {/* Decorative SVG elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden xl:block">
        {/* Blob 1 */}
        <svg
          viewBox="0 0 200 200"
          className="absolute -top-10 -left-10 w-96 h-96 opacity-20 text-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.4,-64.3C56.5,-56.6,64.7,-43.6,69.2,-29.7C73.7,-15.8,74.5,-1.1,69.2,10.1C63.9,21.3,52.5,29.1,41,38.3C29.5,47.4,17.8,57.9,2.8,54.4C-12.2,50.9,-24.5,33.4,-37.9,21.6C-51.3,9.8,-65.8,3.7,-70.2,-6.4C-74.6,-16.5,-68.9,-33.1,-56.8,-41.5C-44.7,-49.9,-26.2,-50.2,-9.5,-43.6C7.2,-37.1,14.3,-23.7,22.3,-13.8C30.3,-3.9,39.1,2.6,44.4,-64.3Z"
            transform="translate(100 100)"
          />
        </svg>{" "}
        <svg
          viewBox="0 0 200 200"
          className="absolute -top-30 -right-130 w-[1000px] h-[500px] opacity-10 text-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M45.7,-65.2C58.8,-55.8,69,-41.3,73.9,-25.3C78.8,-9.3,78.4,8.2,71.9,23.4C65.4,38.6,52.8,51.5,37.4,60.7C22,69.9,3.8,75.4,-13.9,72.7C-31.6,70,-48.9,59.1,-60.8,44.3C-72.7,29.5,-79.2,10.8,-77.3,-7.4C-75.5,-25.6,-65.3,-43.3,-51.1,-52.3C-36.9,-61.3,-18.5,-61.6,-0.3,-61.3C17.9,-61,35.8,-60.1,45.7,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
        {/* Blob 2 */}
        <svg
          viewBox="0 0 200 200"
          className="absolute bottom-10 right-10 w-64 h-64 opacity-15 text-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.4,-64.3C56.5,-56.6,64.7,-43.6,69.2,-29.7C73.7,-15.8,74.5,-1.1,69.2,10.1C63.9,21.3,52.5,29.1,41,38.3C29.5,47.4,17.8,57.9,2.8,54.4C-12.2,50.9,-24.5,33.4,-37.9,21.6C-51.3,9.8,-65.8,3.7,-70.2,-6.4C-74.6,-16.5,-68.9,-33.1,-56.8,-41.5C-44.7,-49.9,-26.2,-50.2,-9.5,-43.6C7.2,-37.1,14.3,-23.7,22.3,-13.8C30.3,-3.9,39.1,2.6,44.4,-64.3Z"
            transform="translate(100 100)"
          />
        </svg>
        {/* Abstract waves */}
        <svg
          className="absolute -bottom-10 left-0 w-full h-32 opacity-10 text-primary"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
