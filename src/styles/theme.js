export const mixins = {
  transition: (time = 0, property = "all", easing = "ease-in") => `{
        transition: ${1.5 + time}s ${property}  ${easing};
  `,
};
