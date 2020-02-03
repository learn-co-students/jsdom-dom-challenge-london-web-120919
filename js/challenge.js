// As a user, I should see the timer increment every second once the page has loaded. 
// document.addEventListener("DOMContentLoaded", function(){
//     const countUp = document.querySelector("#counter").innerText

// })

document.addEventListener("DOMContentLoaded", function () {
    // COUNTER /////
    const countUp = document.querySelector("#counter")
    let count = setInterval(function () {
        countUp.innerText++;
    }, 1000);

    // DECREMENT NUMBER
    const decrement = document.querySelector("#minus")
    decrement.addEventListener("click", function(e){
        if (countUp.innerText > 0){
        e.target = countUp.innerText--
        }
    })

    // INCREMENT NUMBER ///
    const increment = document.querySelector("#plus")
    increment.addEventListener("click", function(e){
        e.target = countUp.innerText++
    })

/// LIKE BUTTON
    const allLikes = document.querySelector(".likes")
    let countLikes = 0;

    const findNumber = number => {
        const arrayLi = [...allLikes.childNodes] 
    }

    const heartButton = document.querySelector("#heart")
    heartButton.addEventListener("click", function(e){
        if (allLikes.childNodes.length === 0 || !document.querySelector(`[data-seconds='${countUp.innerText}']`)){
            // debugger
            ++countLikes
            const li = document.createElement("li")
            li.dataset.seconds = countUp.innerText
            li.innerText = `${countUp.innerText} has been liked ${countLikes} time`
            allLikes.appendChild(li)            
        } else {
            let foundLi = document.querySelector(`[data-seconds='${countUp.innerText}']`)
            // debugger
            let amt = parseInt(foundLi.innerText.split(" ")[4])+1
            foundLi.innerText = `${countUp.innerText} has been liked ${amt} time`
        }
        countLikes = 0;
    })

    //PAUSE BUTTON

    let pauseButton = document.querySelector("#pause")
    pauseButton.addEventListener("click", function(e){
        if (pauseButton.innerText === "resume"){
            count = setInterval(function () {
                countUp.innerText++;
            }, 1000);
            pauseButton.innerText = "pause"
        } else {
            clearInterval(count);
            pauseButton.innerText = "resume"
        }
    })

// FORM AND COMMENTS 

    const form = document.querySelector("#comment-form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        const addComment = document.querySelector("#comment-input").value
        const comments = document.querySelector("#list")
        const p = document.createElement("p")
        p.innerText = addComment
        comments.appendChild(p)
        e.target.reset()

    })
    // LAST 
})



// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. 


// I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."