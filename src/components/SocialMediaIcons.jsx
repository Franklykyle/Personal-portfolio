
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
        </div>
    )
}

export default SocialMediaIcons;