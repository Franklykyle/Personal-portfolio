const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover: opacity-100 hover:saturate-50 transition duration-500"
        href="https://www.linkedin.com/in/kyle-franklin/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover: opacity-100 hover:saturate-50 transition duration-500"
        href="http://github.com/franklykyle"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github-mark-white.png" />
      </a>
      <a
        className="hover: opacity-100 hover:saturate-50 transition duration-500"
        href="https://drive.google.com/file/d/1SkZvyeOsx0DbKyeYyJiSrhh2tOYG3Z_D/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src="../assets/resume.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
