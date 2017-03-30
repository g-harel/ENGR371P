const data = require('./data');

const averageCardLevel = (rarity) => {
    return data
        .reduce((a, m) => a.concat(m[5]), [])
        .filter((c) => c[2] === 3)
        .reduce((a, c, i, o) => a + c[1]/o.length, 0);
};

console.log(averageCardLevel(3));
