import posed from "react-pose";

export const SlideLeftContainter = posed.div({
  open: { x: 20, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    delay: 100,
    transition: {
      x: { type: "spring", stiffness: 500, damping: 40 },
      default: { duration: 300 }
    }
  }
});

export const SlideUpContainer = posed.div({
  open: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: { type: "spring", stiffness: 500, damping: 40 },
      default: { duration: 300 }
    }
  }
});
