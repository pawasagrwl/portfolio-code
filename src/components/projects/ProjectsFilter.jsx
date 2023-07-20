const selectOptions = [
	'Web Application',
	'Mobile Application',
	'Python Script Application',
	'Others',
];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        if (e.target.value === "All Projects") {
          setSelectProject(null);
        } else {
          setSelectProject(e.target.value);
        }
      }}
      className="
				font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option className="text-sm sm:text-md" value="All Projects">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
