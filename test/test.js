import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
	{
		username: "Rose",
		image: "./images/rose.png",
		star: 5,
		review: "Great coffee and ambiance",
	},
	{
		username: "butterfly2222",
		image: "./images/avatar2.png",
		star: 3,
		review: "Coffee was okay, took way to long to make.",
	},
	{
		username: "Sandy Tuna",
		image: "./images/avitar1.png",
		star: 1,
		review:
			"The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
	},
];

describe("Mock Review Test", () => {
	it("Average is correctly calculated with mock review set", () => {
		assert.equal(3, calculateStarAverage(mockReviews));
	});
});

describe("Average of same number", () => {
	const testValue = 4;
	const testArrayLength = 260;

	it("Many of the same number averaged should be that number", () => {
		const testArray = [];
		for (let i = 0; i < testArrayLength; i++) {
			testArray.push({ star: testValue });
		}
		assert.equal(testValue, calculateStarAverage(testArray));
	});
});

// Made this test to check behavior between webpage and calculateStarAverage. Not sure where the problem is.
describe("Regression: Webpage displays large number", () => {
	const testArray = [
		{ star: 5 },
		{ star: 3 },
		{ star: 1 },
		{ star: 2 },
		{ star: 2 },
		{ star: 2 },
	];

	it("Non-averaged number seen on webpage with this input", () => {
		assert.equal(1537, calculateStarAverage(testArray));
	});
});
