//alert('test')

function askQuestion() {
    var p = prompt('question?')
    if (p != null) {
        document.getElementById('question').innerHTML = 'what is ' + p
    }
}