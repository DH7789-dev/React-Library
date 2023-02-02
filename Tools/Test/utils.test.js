const {sum, isTypeOf} = require("../../../Component/utils/Utils");


describe('Test function 1 + 2', () => {


    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });


    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });


});

describe('Test function isTypeOf', () => {


    describe('isTypeOf Pass', () => {


        it('Test Type String ', () => {
            expect(isTypeOf("string","test")).toBe(true);
        });

        it('Test Type boolean ', () => {
            expect(isTypeOf("boolean",false)).toBe(true);
        });

        it('Test Type number ', () => {
            expect(isTypeOf("number",22)).toBe(true);
        });

        it('Test Type underfined ', () => {
            var variable;
            expect(isTypeOf("undefined",variable)).toBe(true);
        });

        it('Test Type Object ', () => {
            var variable = {id:1, name:"test",number:10};
            expect(isTypeOf("object",variable)).toBe(true);
        });

    });

    describe('isTypeOf No Pass', () => {


        it('Test Type String ', () => {
            expect(isTypeOf("string",false)).toBe(false);
        });

        it('Test Type boolean ', () => {
            expect(isTypeOf("boolean",22)).toBe(false);
        });

        it('Test Type number ', () => {
            expect(isTypeOf("number","test")).toBe(false);
        });

        it('Test Type underfined ', () => {
            var variable = "test";
            expect(isTypeOf("undefined",variable)).toBe(false);
        });

        it('Test Type Object ', () => {
            var variable = 1;
            expect(isTypeOf("object",variable)).toBe(false);
        });

    });



});