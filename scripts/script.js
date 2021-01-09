const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const overlay = document.getElementsByClassName("overlay");
const span = document.getElementsByClassName("close")[0];
const queryString = window.location.search;
const imageUrl = urlParam("image");

function urlParam(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
}

if (queryString) {
  showModal(imageUrl + ".jpg");
}

for (let i = 0; i < overlay.length; i++) {
  overlay[i].addEventListener("click", function (e) {
    handleClick(e);
  });
}

function handleClick(event) {
  const targetUrl = event.target.getAttribute("data-id");
  window.location.href = "?image=" + targetUrl;
}

function showModal(imageId) {
  modalImage.src = "./images/" + imageId;
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
