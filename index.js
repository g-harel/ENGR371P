const data = require('./data');

const averageCardLevel = (matches, rarity) => {
    let average = matches
        .reduce((a, m) => a.concat(m[5]), [])
        .filter((c) => c[2] === rarity)
        .reduce((a, c, i, o) => a + c[1]/o.length, 0)
        .toFixed(3);
    return `Average level of cards of rarity: ${rarity} is ${average}`;
};

const cardFrequency = (matches) => {
    let frequency = matches
        .reduce((a, m) => a.concat(m[5]), [])
        .reduce((a, c) => {
            if (!a[c[0]]) {
                a[c[0]] = 1;
            } else {
                ++a[c[0]];
            }
            return a;
        }, {});
    let prettyFrequency = Object.keys(frequency)
        .sort()
        .sort((a, b) => frequency[b] - frequency[a])
        .map((c) => `${(c + '                ').substr(0,15)} ${frequency[c]}`);
    return `${prettyFrequency.length} out of 70 cards found:\n${prettyFrequency.join('\n')}`;
};

console.log(averageCardLevel(data, 0));
console.log(averageCardLevel(data, 1));
console.log(averageCardLevel(data, 2));
console.log(averageCardLevel(data, 3));
console.log(cardFrequency(data));
