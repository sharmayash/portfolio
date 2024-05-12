// import "./scrollDownButton.css";

const ScrollDownButton = () => {
  return (
    <div id="scroll-down-arrow" className="w-12">
      <span
        className={`w-3 h-3 block my-2 mx-auto -rotate-45 border-l-2 border-b-2 border-solid border-foreground animate-scroll-button delay-100`}
      />
      <span
        className={`w-3 h-3 block my-2 mx-auto -rotate-45 border-l-2 border-b-2 border-solid border-foreground animate-scroll-button delay-300`}
      />
      <span
        className={`w-3 h-3 block my-2 mx-auto -rotate-45 border-l-2 border-b-2 border-solid border-foreground animate-scroll-button delay-500`}
      />
    </div>
  );
};

export default ScrollDownButton;
