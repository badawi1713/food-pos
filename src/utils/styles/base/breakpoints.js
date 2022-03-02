const size = {
    'xs': "0px",
    'sm': "640px",
    'md': "768px",
    'lg': "1024px",
    'xl': "1280px",
    '2xl': "1536px",
};

const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    '2xl': `(min-width: ${size['2xl']})`,
};

export {
    size,
    device
}