
function shuffle(a) {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
    return a
}
// ^Shuffles through the questions

class magicJeopardy {
    constructor (element, options={}) {

    this.categories = []
    this.questions = {}

    this.currentQuestion = null
    this.score = 0

    this.qstnContElement = element.querySelector(".qstnCont")
    this.scoreTotalElement = element.querySelector(".scoreTotal")
    this.formElement = element.querySelector("form")
    this.inputElement = element.querySelector("input[name=answer]")
    this.qstBoxElement = element.querySelector(".qstBox")
    this.clueElement = element.querySelector(".clue")
    this.resultElement = element.querySelector("result")
    this.rightAnswerTextElement = element.querySelector(".rightAnswerElement")
    this.correctElement = element.querySelector(".correct")
    this.wrongElement = element.querySelector(".wrong")
    }
}

const game = new magicJeopardy(document.querySelector(".game"), {})






//Sources used so far
    //https://css-tricks.com/perfect-full-page-background-image/
    //https://www.w3schools.com/cssref/
    //https://www.youtube.com/watch?v=fYMBkayHmUo
    //https://fontmeme.com/jeopardy-font/
    //https://www.youtube.com/watch?v=I8BRAgMrxXM
    //https://www.youtube.com/watch?v=vYEkEMfoi1c
    //https://www.w3schools.com/tags/tag_input.asp
    //https://www.w3schools.com/tags/att_button_type.asp
    //https://stackoverflow.com/questions/1397592/difference-between-id-and-name-attributes-in-html
    //https://www.w3schools.com/tags/tag_form.asp
    //https://www.geeksforgeeks.org/what-is-the-use-of-asterisk-selector-in-css/#:~:text=The%20asterisk%20(*)%20is%20known,the%20elements%20on%20the%20page.
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    //https://developer.mozilla.org/en-US/docs/Web/API/Element
    //
    //prev  notes
