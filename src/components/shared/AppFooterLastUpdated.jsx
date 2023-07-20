import buildDate from "../../build-date.json";

function AppFooterLastUpdated() {
  const date = new Date(buildDate.buildDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-us", options);

  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <a
          href="https://github.com/pawasagrwl/portfolio-code"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Last Updated: {formattedDate}.
        </a>
      </div>
    </div>
  );
}

export default AppFooterLastUpdated;
