// Valid Parentheses

function isValid(str){
    let stack = []
    let pairs ={
        ")":"(",
        "}":"{",
        "]":"[",
    }
    for (let ch of str){
        if(ch==='(' || ch==='{' || ch==='['){
            stack.push(ch)
        }else{
            let top = stack.pop()

            if(top!==pairs[ch]){
                return false
            }
        }
    }
    return stack.length===0;
}
