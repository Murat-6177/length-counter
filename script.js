
const calculateCharacter = () =>{

    let tweet ="Aye, fight and you may die. Run and you'll live -- at least a while. And dying in your beds many years from now, would you be willing to trade all the days from this day to that for one chance, just one chance to come back here and tell our enemies that they may take our lives, but they'll never take our freedom!!!"
let tweetCount = tweet.length;   //  2.madde

let tweetLeft = 150 - tweetCount;
console.log(`You have written ${tweetCount} characters, you have ${ tweetLeft} characters remaining. `)
// Run your program by clicking the button to see your results!

tweet = prompt("Enter a tweet:");
tweetCount = tweet.length;
tweetLeft = 150 - tweetCount;

console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);
alert(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
