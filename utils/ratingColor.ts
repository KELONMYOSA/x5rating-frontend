export default function ratingColor(rating: number) {
    let hex
    let k

    if (rating >= 4) {
        k = rating - 4
        hex = getColorBetween(k, 140, 204, 0, 0, 204, 0)
    }
    if (3 <= rating < 4) {
        k = rating - 3
            hex = getColorBetween(k, 255, 200, 0, 140, 204, 0)
    }
    if (rating < 3) {
        k = (rating - 1) / 2
            hex = getColorBetween(k, 255, 0, 0, 255, 200, 0)
    }

    return hex
}

function getColorBetween(k, r1, g1, b1, r2, g2, b2) {
    const red = r1 * (1 - k) + r2 * k;
    const green = g1 * (1 - k) + g2 * k;
    const blue = b1 * (1 - k) + b2 * k;

    return rgbToHex(Math.round(red), Math.round(green), Math.round(blue))
}

function rgbToHex(r: number, g: number, b: number): string {
    return (
        '#' +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    )
}