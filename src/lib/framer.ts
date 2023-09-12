export const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};
