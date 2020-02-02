//////////////////////////// Counter ///////////////////////////



let secFunc = setInterval(function(){
    counter = document.querySelector('#counter');
    counterNum = parseInt(counter.innerText);

   if (counterNum < 42) {
        let newNum = counterNum + 1;
        counter.innerText = newNum;
   } else {
        counter.innerText ="bye";
   }

}, 1000)


///////////// add one //////////////
const plus = document.querySelector('#plus');
plus.addEventListener('click', addOne);
function addOne() {
    counter.innerText = counterNum + 1;
}


///////////// minus one //////////////
const minus = document.querySelector('#minus');
minus.addEventListener('click', minusOne);
function minusOne() {
    counter.innerText = counterNum - 1;
}




/////////////////////////////////// Comment ///////////////////////////////

document.addEventListener("DOMContentLoaded",() => {

///////comment form
    const commentForm = document.querySelector('#comment-form');

////// where comments will be displayed
    const commentDiv = document.querySelector('#list');

    const createNewComment = event => {
        event.preventDefault();

        const userComment = document.getElementById('comment-input');
        const comment = document.createElement('li');
        comment.innerText = userComment.value;

        commentDiv.append(comment);
    }

    commentForm.addEventListener('submit',createNewComment );


});