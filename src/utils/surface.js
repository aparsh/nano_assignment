exports.shapes = {
    Cuboctahedral: "Cuboctahedral",
    Spherical: "Spherical"
}

// exports.cubo_octahedral_total = (k) => {
//     let ans = (10 * (k ** 3) + 15 * (k ** 2) + 11 * k + 3) / 3;
//     return ans;
// }

// exports.cubo_octahedral_surface = (k) => {
//     let ans = 10 * (k ** 2) + 2;
//     return ans;
// }

// exports.spherical_total = (k) => {
//     let ans = (10 * (k ** 3) - 15 * (k ** 2) + 11 * k - 3) / 3;
//     return ans;
// }

// exports.spherical_surface = (k) => {
//     let ans = 10 * (k ** 2) - 20 * k + 12;
//     return ans;
// }

exports.get_spherical_surface = (k) => {
    let ans = (10 * (k ** 2) - 20 * k + 12) / ((10 * (k ** 3) - 15 * (k ** 2) + 11 * k - 3) / 3);
    ans = ans*100
    if (ans > 100) ans = 100
    return ans
}
exports.get_cubo_octahedral_surface = (k) => {
    let ans = (10 * (k ** 2) + 2) / ((10 * (k ** 3) + 15 * (k ** 2) + 11 * k + 3) / 3);
    ans = ans*100
    return ans
}

