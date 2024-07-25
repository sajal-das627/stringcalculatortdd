const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("5")).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
        expect(calculator.add("3,5")).toBe(8);
    });

    test('should return the sum of multiple numbers', () => {
        expect(calculator.add("1,2,3")).toBe(6);
        expect(calculator.add("2,3,4,5")).toBe(14);
    });

    test('should handle new lines between numbers', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1\n2\n3")).toBe(6);
    });

    test('should support different delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
        expect(calculator.add("//|\n1|2|3")).toBe(6);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => calculator.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    test('should handle custom delimiter and negative numbers together', () => {
        expect(() => calculator.add("//;\n1;-2;3;-4")).toThrow("Negative numbers not allowed: -2, -4");
    });
});
