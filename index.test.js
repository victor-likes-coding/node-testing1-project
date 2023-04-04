const utils = require('./index');

describe('[Exercise 1] trimProperties', () => {
	let input;
	beforeEach(() => {
		input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
	});
	test('[1] returns an object with the properties trimmed', () => {
		// EXAMPLE
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimProperties(input);
		expect(actual).toEqual(expected);
	});
	test('[2] returns a copy, leaving the original object intact', () => {
		const actual = utils.trimProperties(input);
		expect(actual).not.toBe(input);
	});
});

describe('[Exercise 2] trimPropertiesMutation', () => {
	let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
	beforeEach(() => {
		input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
	});

	test('[3] returns an object with the properties trimmed', () => {
		const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
		const actual = utils.trimPropertiesMutation(input);
		expect(actual).toEqual(expected);
	});
	test('[4] the object returned is the exact same one we passed in', () => {
		const actual = utils.trimPropertiesMutation(input);
		expect(actual).toBe(input);
	});
});

describe('[Exercise 3] findLargestInteger', () => {
	test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
		const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
		const expected = 3;
		const actual = utils.findLargestInteger(input);
		expect(actual).toBe(expected);
	});
});

describe('[Exercise 4] Counter', () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
		const expected = 3;
		const actual = counter.countDown();
		expect(actual).toBe(expected);
	});
	test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
		counter.countDown();
		const expected = 2;
		const actual = counter.countDown();
		expect(actual).toBe(expected);
	});
	test('[8] the count eventually reaches zero but does not go below zero', () => {
		counter.countDown();
		counter.countDown();
		counter.countDown();
		const expected = 0;
		let actual = counter.countDown();
		expect(actual).toBe(expected);

		actual = counter.countDown();
		expect(actual).toBe(expected);
	});
});

describe('[Exercise 5] Seasons', () => {
	let seasons;
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	test('[9] the FIRST call of seasons.next returns "summer"', () => {
		const expected = 'summer';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
	test('[10] the SECOND call of seasons.next returns "fall"', () => {
		seasons.cycle(1);
		const expected = 'fall';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
	test('[11] the THIRD call of seasons.next returns "winter"', () => {
		seasons.cycle(2);

		const expected = 'winter';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
	test('[12] the FOURTH call of seasons.next returns "spring"', () => {
		seasons.cycle(3);

		const expected = 'spring';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
	test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
		seasons.cycle(4);
		const expected = 'summer';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
	test('[14] the 40th call of seasons.next returns "spring"', () => {
		seasons.cycle(39);
		const expected = 'spring';
		const actual = seasons.next();
		expect(actual).toBe(expected);
	});
});

describe('[Exercise 6] Car', () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
	});
	test('[15] driving the car returns the updated odometer', () => {
		const expected = 10;
		const actual = focus.drive(10);
		expect(actual).toBe(expected);
	});
	test('[16] driving the car uses gas', () => {
		focus.drive(10);
		// 10 miles / 30 mpg = .33 gallons
		const expected = 20 - 0.33;
		const actual = focus.gas;
		expect(actual).toBeCloseTo(expected);
	});
	test('[17] refueling allows to keep driving', () => {
		const totalMiles = focus.tank * focus.mpg;
		focus.drive(totalMiles);
		expect(() => {
			focus.drive(10);
		}).toThrow('Out of gas');

		focus.refuel(10);
		focus.drive(30);
		expect(focus.odometer).toBe(totalMiles + 30);
		expect(focus.gas).toBe(9);
	});
	test('[18] adding fuel to a full tank has no effect', () => {
		focus.refuel(10);
		expect(focus.gas).toBe(20);
	});
});

describe('[Exercise 7] isEvenNumberAsync', () => {
	test('[19] resolves true if passed an even number', () => {
		expect(utils.isEvenNumberAsync(2)).resolves.toBe(true);
	});
	test('[20] resolves false if passed an odd number', () => {
		expect(utils.isEvenNumberAsync(3)).resolves.toBe(false);
	});
});
