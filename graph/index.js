const container = document.querySelector('.container');

const data = [['zap',33],['fireball',19],['skeleton army',18],['log',16],['hog rider',16],['minions',14],['elite barbarians',14],['arrows',13],['mega minion',13],['inferno tower',11],['miner',10],['giant',10],['musketeer',10],['ice wizard',9],['ice golem',9],['minion horde',9],['tombstone',9],['princess',9],['electro wizard',8],['ice spirit',8],['graveyard',7],['archers',7],['elixir collector',7],['skeletons',7],['wizard',6],['freeze',6],['goblin gang',6],['barbarians',6],['executioner',5],['knight',5],['goblin barrel',5],['balloon',5],['bowler',5],['lumberjack',4],['royal giant',4],['furnace',4],['fire spirits',4],['inferno dragon',4],['mini pekka',4],['lava hound',3],['rocket',3],['lightning',3],['cannon',3],['poison',3],['tornado',3],['valkyrie',3],['baby dragon',2],['pekka',2],['golem',2],['bomber',2],['mirror',2],['prince',2],['spear goblins',1],['guards',1],['goblins',1],['goblin hut',1],['rage',1],['three musketeers',1],['dark prince',1],['tesla',1],['battle ram',0],['clone',0],['giant skeleton',0],['xbow',0],['bomb tower',0],['sparky',0],['mortar',0],['dart goblin',0],['barbarian hut',0],['witch',0]];

const graph = (container, data, maxAmount, graphHeight, angle, split1, split2, offset) => {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div style="margin: 0 0 140px 0;">
            <div style="background-color:#999;font-size:0;">
                ${data.map((c) => (`
                    <div style="height:${graphHeight}px;width:${1/(split1||0.7)}%;display:inline-block;border:1px solid white;box-sizing:border-box;">
                        <div style="height:${100-c[1]/maxAmount*100}%;background-color:white;"></div>
                    </div>
                `)).join('')}
            </div>
            <div style="margin:5px 0 0 ${offset||3}px;width:101%;">
                ${data.map((c) => (`
                    <div style="width:${1/(split2||0.95)}%;display:inline-block;font-size:14px;white-space:nowrap;">
                        <div style="transform: rotate(${angle||70}deg);">${c[0]}  (${c[1]})</div>
                    </div>
                `)).join('')}
            </div>
        </div>
    `;
    container.appendChild(wrapper);
};

// graphing the card appearences
graph(container, data, 33, 270);

const data2 = data
    .reduce((a, c) => {
        let index = a.findIndex((e) => e[0] === c[1]);
        if (index < 0) {
            a.push([c[1], 1]);
        } else {
            ++a[index][1];
        }
        return a;
    }, [])
    .sort((a, b) => b[0] - a[0]);

graph(container, data2, 10, 270, 30, 0.18, 0.192, 20);