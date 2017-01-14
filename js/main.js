var x = 'abcabcd'.replace(/b/g, "$$");
console.log(x);

// /g replace every matched property!
var val = 'abdabcd'.replace(/b/, "x"); // axdabcd
var val = 'abdabcd'.replace(/b/g, "x"); // axdaxcd

// Alt Text:::
// $$ means $
// $' means the right side of the matched string
// $` means the left side of the matched string
// $& means the matched string
// $1 means the first matched string
// $99 means the 99th matched string
