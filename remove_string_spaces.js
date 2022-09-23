// Simple, remove the spaces from the string, then return the resultant string.
//P = string with sapces
//R = return string without spaces
//E =  assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//P = declare function with string x, split the function with split (' ') and then rejoin the function using join (''), then return x

function noSpace(x){
return x.split(' ').join('')
}
