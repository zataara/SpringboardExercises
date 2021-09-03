
const { MarkovMachine } = require('./markov');


describe('testing the Markov Machine', function () {

    let mm;

    test('testing makeChains() function', function() {
        mm = new MarkovMachine('the cat in the hat');
        expect(mm.chains.keys()).toContain('the');
        expect(mm.chains.keys()).toContain('cat');
        expect(mm.chains.keys()).toContain('in');
        expect(mm.chains.keys()).toContain('hat');
    });

    test('testing makeChains() function', function() {
        mm = new MarkovMachine('the cat hat');
        expect(mm.chains.keys()).toContain('the');
        expect(mm.chains.keys()).toContain('cat');
        expect(mm.chains.keys()).toContain('hat');
    });

    test('testing makeChains() function', function() {
        mm = new MarkovMachine('the quick brown fox');
        expect(mm.chains.keys()).toContain('the');
        expect(mm.chains.keys()).toContain('quick');
        expect(mm.chains.keys()).toContain('brown');
        expect(mm.chains.keys()).toContain('fox');


    });




})


