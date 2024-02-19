import "./scrollDownButton.css";

const ScrollDownButton = () => {
  return (
    <div id="scroll-down-arrow">
      {["arrow-one", "arrow-two", "arrow-three"].map((arrow) => (
        <span key={arrow} className={arrow} />
      ))}
    </div>
  );
};

export default ScrollDownButton;
