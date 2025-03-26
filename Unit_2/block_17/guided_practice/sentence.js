class Sentence{
    constructor(data){
        this.data = data;
    }

    wordCount(){
        return this.data.split(" ").length;
    }

    hasLetter(letter){
        return this.data.indexOf(letter) !== -1;
    }
    
    numLetters(letter){
        let count = 0;
        for(let i=0; i < this.data.length; i++){
            if(this.data[i] === letter){
                count++;
            }
        }
        return count;
    }

    stats
}

const data = window.prompt("Enter a sentence", "My cat Jack is very cute.");
const sentenceOne = new Sentence(data);

console.log(sentenceOne.wordCount());
console.log(sentenceOne.hasLetter("b"));
console.log(sentenceOne.numLetters("c"));
console.log(sentenceOne.numLetters("y"));