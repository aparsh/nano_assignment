exports.applications = {
    OPTICAL: "Optical",
    Electrical: "Electrical",
    MAGNETIC: "Magnetic",
    STRENGTH: "Strength",
    CUSTOM: "Custom"
}

exports.getMinParticles = (type) => {
    switch (type) {
        case "Optical":
            return 40
        case "Electrical":
            return 10
        case "Magnetic":
            return 1
        case "Strength":
            return 1
        default:
            return 1
    }
}

exports.getMaxParticles = (type) => {
    switch (type) {
        case "Optical":
            return 100
        case "Electrical":
            return 20
        case "Magnetic":
            return 10
        case "Strength":
            return 50
        default:
            return 100
    }
}

