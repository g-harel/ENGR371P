const data = require('./data');

const mean = (nums) => {
    return nums.reduce((a, n) => a + n, 0)/nums.length;
};

const median = (nums) => {
    nums.sort((a, b) => b - a);
    const medianIndex = nums.length/2;
    if (medianIndex%2 === 0) {
        return (nums[medianIndex - 1] + nums[medianIndex])/2;
    } else {
        return nums[Math.floor(medianIndex)];
    }
};

const variance = (nums) => {
    const average = mean(nums);
    return mean(nums.map((n) => (average - n) ** 2));
};

const standardDeviation = (nums) => {
    return Math.sqrt(variance(nums));
};

const getlevelsOfCardsOfRarity = (matches, rarity) => {
    return matches
        .reduce((a, m) => a.concat(m[5]), [])
        .filter((c) => c[2] === rarity)
        .map((c) => c[1]);
};

const cardFrequency = (matches) => {
    return matches
        .reduce((a, m) => a.concat(m[5]), [])
        .reduce((a, c) => {
            let index = a.findIndex((e) => e[0] === c[0]);
            if (index < 0) {
                a.push([c[0], 1]);
            } else {
                ++a[index][1];
            }
            return a;
        }, [])
        .sort((a, b) => b[1] - a[1]);
};

// card frequency
const levels = cardFrequency(data).map((c) => c[1]);
// some cards are missing, total number of cards is 70
while(levels.length < 70) {
    levels.push(0);
}
console.log(`
    Card frequency:
        sample mean: ${mean(levels).toFixed(5)}
        sample median: ${median(levels).toFixed(5)}
        sample variance: ${variance(levels).toFixed(5)}
        sample standard deviation: ${standardDeviation(levels).toFixed(5)}
`);

console.log('===================================================')

// card levels per rarity
const r = [] && ['common', 'rare', 'epic', 'legendary'];
for (var i = 0; i < r.length; i++) {
    const levels = getlevelsOfCardsOfRarity(data, i);
    console.log(`
    Card level for rarity ${r[i]}:
        sample mean: ${mean(levels).toFixed(5)}
        sample median: ${median(levels).toFixed(5)}
        sample variance: ${variance(levels).toFixed(5)}
        sample standard deviation: ${standardDeviation(levels).toFixed(5)}
    `);
}
