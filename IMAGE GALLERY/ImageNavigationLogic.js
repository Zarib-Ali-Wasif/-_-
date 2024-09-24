console.log("JavaScript file loaded!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  let images = [
    "images/1pcORCkn.jpg",
    "images/5pcsCknBucket.jpg",
    "images/20pcsNuggetsALC.jpg",
    "images/BBQPocBX.jpg",
    "images/1pcORCkn.jpg",
    "images/5pcsCknBucket.jpg",
    "images/20pcsNuggetsALC.jpg",
    "images/BBQPocBX.jpg",
  ];

  let currentIndex = 0;

  // Function to update the main image and highlight the active thumbnail
  function showImage(index) {
    const imgElement = document.getElementById("current-image");
    imgElement.src = images[index];

    // Highlight the active thumbnail
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove("active"));
    thumbnails[index].classList.add("active");
  }

  // Function to handle next/previous button clicks
  function navigateImages(event) {
    const action = event.target.getAttribute("data-action");
    if (action === "next") {
      currentIndex = (currentIndex + 1) % images.length; // Move to next image
    } else if (action === "prev") {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous image
    }
    showImage(currentIndex); // Show the updated image
  }

  // Add event listeners for the Next and Previous buttons
  document.getElementById("prev-btn").addEventListener("click", navigateImages);
  document.getElementById("next-btn").addEventListener("click", navigateImages);

  // Add event listeners for thumbnail images
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      currentIndex = index; // Update the currentIndex to the clicked thumbnail's index
      showImage(currentIndex); // Show the corresponding image
    });
  });

  // Show the first image on page load
  showImage(currentIndex);
});
