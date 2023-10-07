import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn">
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <p className="font-inter font-medium text-sm mt-3 mb-1 text-gray-700">
        Made With 💜 By Ali Moghrabi
      </p>
      <h2 className="desc">
        Simplify your reading with Sumz, an open-source article Summarizer that
        transforms lengthy articles into clear and conscise summaries
      </h2>
    </header>
  );
};

export default Hero;
