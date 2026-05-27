// palindrome
function isPalindrome(num){
    if(num<0){
        return false
    }

    let str = num.toString()
    let left = 0
    let right =str.length-1
    while(left<right){
        if(str[left]!=str[right]){
            return false
        }
        left++
        right--
    }

    return true
    
}
