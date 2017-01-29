
// Jasmine is an assert framework, so you can verify that your expectations are OK.
// See https://jasmine.github.io/
// Below is just an example to get you going!
describe("Describe you tests here ", () => {

    it('and document what this particular feature test does', () => {
        const actualValue = true; // in your code you get this by manipulating you API
        const expectedValue = true; // what you expect to get
        // The assert (but read Jasmine docs for more):
        expect(actualValue).toBe(expectedValue);
    });

});