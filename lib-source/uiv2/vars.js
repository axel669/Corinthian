const rgb = (r, g, b) => `rgba(${r}, ${g}, ${b})`;
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

const hoverColor = rgba(0, 0, 0, 0.1);
const activeColor = rgba(0, 0, 0, 0.2);
const shadow = null;

export default Object.freeze({
    rgb, rgba,

    hoverColor,
    activeColor,
    shadow
});
