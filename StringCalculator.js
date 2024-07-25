class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n", 2);
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts[1];
        }

        const numberArray = numbers.split(delimiter);
        let total = 0;
        let negatives = [];

        numberArray.forEach(num => {
            if (num) {
                const n = parseInt(num, 10);
                if (n < 0) {
                    negatives.push(n);
                }
                total += n;
            }
        });

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return total;
    }
}

module.exports = StringCalculator;
