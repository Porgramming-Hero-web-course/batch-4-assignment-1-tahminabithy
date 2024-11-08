{
    const countWordOccurences = (sentence: string, word: string) => {
        let wordsArray = sentence.toLowerCase().split(' ');
        let count: number = 0;
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i] == word.toLowerCase()) {
                count++;
            }
        }
        return count;
    }
    const output = countWordOccurences("I love typescript", "Typescript");
    console.log(output);

}

