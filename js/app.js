const { reviewData } = window;

console.log({ reviewData }, "App Data");

window.addEventListener("DOMContentLoaded", function () {
  showCards();
  const newReview = document.querySelector("#new-review");
  newReview.addEventListener("submit", function (e) {
    const name = newReview.elements.name.value;
    const date = newReview.elements.reviewDate.value;
    let rating = newReview.elements.stars.value;
    rating = ratingConvert(rating);
    const review = newReview.elements.review.value;
    const reviewInput = {
      name: name,
      date: date,
      rating: rating,
      review: review
    };
    console.log(reviewInput);
    window.reviewData.push(reviewInput);
    const newCard = createCard(reviewInput);
    const reviewCards = document.querySelector(".reviews");

    reviewCards.appendChild(newCard);
    newReview.reset();
    e.preventDefault();
  });
});

function showCards() {
  reviewData.forEach((review) => {
    generateReviews(review);
  });
}

function generateReviews(review) {
  const reviewCards = document.querySelector(".reviews");
  const reviewCard = createCard(review);
  reviewCards.appendChild(reviewCard);
}

function createCard(review) {
  const card = document.createElement("article");
  card.classList.add("card");
  const reviewName = document.createElement("h3");
  reviewName.classList.add("name");
  reviewName.innerText = review.name;
  const reviewDate = document.createElement("date");
  reviewDate.classList.add("date");
  reviewDate.innerText = review.date;
  const reviewRating = document.createElement("p");
  reviewRating.innerText = review.rating;
  const reviewPara = document.createElement("p");
  reviewPara.classList.add("review");
  reviewPara.innerText = review.review;

  card.appendChild(reviewName);
  card.appendChild(reviewDate);
  card.appendChild(reviewRating);
  card.appendChild(reviewPara);
  return card;
}

function ratingConvert(rating) {
  if (rating === "1") {
    rating = "★";
  } else if (rating === "2") {
    rating = "★★";
  } else if (rating === "3") {
    rating = "★★★";
  } else if (rating === "4") {
    rating = "★★★★";
  } else if (rating === "5") {
    rating = "★★★★★";
  }
  return rating;
}
