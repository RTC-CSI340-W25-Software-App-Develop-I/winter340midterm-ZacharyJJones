//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
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
		image: "./images/avatar1.png",
		star: 1,
		review:
			"The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
	},
];
/////////////////////////////////////////////////////////////////////

// Midterm Deliverable #1: Create a function that will render a review
function renderReview(review) {
	/* Output template
  <div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div>
  */
	const innerDiv = document.createElement("div");

	const userName = document.createElement("p");
	userName.textContent = review.username;

	const starRating = document.createElement("p");
	starRating.textContent =
		"".padStart(review.star, "★") + "".padStart(5 - review.star, "☆");

	const reviewText = document.createElement("p");
	reviewText.textContent = review.review;

	innerDiv.append(userName, starRating, reviewText);

	const reviewContainer = document.createElement("div");
	reviewContainer.className = "review_container";

	const img = document.createElement("img");
	img.src = review.image;

	reviewContainer.append(img, innerDiv);

	// place reviews in <section class="reviews"> tag
	const reviewListArea = document.querySelector(".reviews");
	reviewListArea.append(reviewContainer);

	// and the rating field
	const locationStarRating = document.querySelector(".starRating");
	locationStarRating.textContent =
		"Star Rating: " + calculateStarAverage(reviews);
}

//1. Append the reviews to the DOM
reviews.forEach((x) => renderReview(x));

//2. Append new reviews to the DOM from the form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const newReview = {
		username: e.target.username.value,
		image: e.target.image.value,
		star: e.target.star.value,
		review: e.target.review.value,
	};

	reviews.push(newReview);
	renderReview(newReview);

	// would be nice to clear the input fields afterwards
});
