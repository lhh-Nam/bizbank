export function getShadowStyle({ color, bgColor, gradient, disable, size, custom } = {}) {
    if (!color && !custom) { return; }
    const boxShadow = custom || `${size || '0px 4px 16px 0px'} ${color}`;
    const style = { boxShadow: boxShadow, WebkitBoxShadow: boxShadow, MozBoxShadow: boxShadow };
    if (bgColor) {
        if (gradient) {
            let gradientDirection = gradient.direction || 'to bottom';
            style.backgroundImage = `linear-gradient(${gradientDirection}, ${bgColor})`;
        } else {
            style.backgroundColor = bgColor;
        }
    }
    if (disable) { style.opacity = 0.6; }
    return style;
}