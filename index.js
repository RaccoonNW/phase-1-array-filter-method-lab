function findMatching(drivers, driver) {
    return drivers.filter(function (name) {
        return name.toLowerCase() === driver.toLowerCase();
    });
}

function fuzzyMatch(drivers, s) {
    return drivers.filter(function (name) {
        return name.startsWith(s)
    });
}

function matchName(drivers, driver) {
    return drivers.filter(function (n) {
        return n.name === driver
    });
}