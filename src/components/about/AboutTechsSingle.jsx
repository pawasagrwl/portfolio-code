// in your AboutTechsSingle.jsx

const AboutTechsSingle = ({ title, image }) => {
  return (
    <>
      <img
        src={image}
        className="tech-img w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
        alt={title}
      />
    </>
  );
};

export default AboutTechsSingle;
