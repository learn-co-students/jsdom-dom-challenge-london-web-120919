// an individual number of the counter.I should see count of the number of 'likes'
// associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume'
// is clicked, it should restart the counter and re - enable the buttons.

let likeCount = 0;
const likes = document.querySelector(".likes");

let timer;

// As a user, I should see the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", function () {
    resumeCount();
});

const pause = document.querySelector("#pause");
pause.addEventListener("click", function (e) {
    if (pause.innerText == "pause") {
        console.log("Pausing..")
        pauseCount();
    } else {
        console.log("Resuming..")
        resumeCount();
    }
});

const counter = document.querySelector("#counter");

function resumeCount() {
    timer = setInterval(function () {
        counter.innerText++;
        likeCount = 0;
    }, 1000);
    pause.innerText = "pause";
}

function pauseCount() {
    clearInterval(timer);
    pause.innerText = "resume";
}
// As a user, I can manually increment and
// decrement the counter using the plus and minus buttons.

const minus = document.querySelector("#minus");
minus.addEventListener("click", function (e) {
    counter.innerText--;
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", function (e) {
    counter.innerText++;
});

// As a user, I can 'like'
const heart = document.querySelector("#heart");
heart.addEventListener("click", function (e) {
    // increment likes
    likeCount++;
    // Create a Like Wrapper
    let likeWrapper = document.createElement("li");
    likeWrapper.innerText = counter.innerText + " has been liked " + likeCount + " times";
    likes.appendChild(likeWrapper);
});

// As a user, I can leave comments"

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function (e) {

    // get the comment text
    let comment = document.querySelector("#comment-input");
    let commentText = comment.value;

    // make sure the comment has some text, if not - end method.
    if (commentText == "") {
        return;
    }
    // prevent the form from submitting.
    e.preventDefault();
    console.log("Leaving a comment...");

    // reset the value in the comment box to empty string.
    comment.value = "";
    // reference the list of comments
    let list = document.querySelector("#list");

    // Crete a comment paragraph
    let commentWrapper = document.createElement("div");
    let aComment = document.createElement("p");
    aComment.innerHTML = commentText;
    let hr = document.createElement("hr");

    commentWrapper.append(aComment);
    commentWrapper.append(hr);

    // add the new comment the page
    list.appendChild(commentWrapper);

    return false;
});