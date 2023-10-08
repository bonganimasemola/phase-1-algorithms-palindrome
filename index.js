function isPalindrome(word) {
    let re = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(re, '');
    let len = word.length;
    //Create a for loop
    for (let i = 0; i < len/2; i++) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   isPalindrome("A mad cat in a bad hat with a smeared bat");


/* 
  Add your pseudocode here
 // first guess is this is some kind of loop
  (i=0, i=word.legth), i++)
  //Lowercase the string and use the regular expression to remove unwanted characters
  let re = /[^A-Za-z0-9]/g
    
*/

/*
i guessed that this was some kind loop given that we would need to examine each elemnt within the string 

1. The first part to figure find way to look through a string without being sensitive to the case of the alphabet (google recommended a regular expression) 
 let re = /[^A-Za-z0-9]/g; 
 word = word.toLowerCase().replace(re, '');
 2. Created a for loop: when the characters from each part match, the for loop will go on
  it will return false when the characters don't match anymore, false is returned and we exit the for loop
   }
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
