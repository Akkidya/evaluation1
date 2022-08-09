//palindrome
function checkPalindrome(string){
    for ( let i = string.length; i>0; i--){
        if(string[i] = string.charAt(string.length)-1){
            console.log("the word is a palindrome");
        }else{
            console.log("the word is not a palindrome");
        }
    }
}
checkPalindrome('Akash');