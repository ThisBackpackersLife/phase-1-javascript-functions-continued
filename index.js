// code your solution here
const saturdayFun = activity => activity ? 'This Saturday, I want to bathe my dog!' : 'This Saturday, I want to roller-skate!';

const mondayWork = activity => activity ? "This Monday, I will work from home." : "This Monday, I will go to the office.";

function wrapAdjective(character) {
    return function inner(adjective = '*') {
        const part1 = `You are ${character}${adjective}${character}!`
        return part1
    }
}


wrapAdjective("*")("special");