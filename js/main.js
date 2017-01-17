// /g replace every matched property!
var val = 'abcabc'.replace(/b/, "x"); // axcabc
var val = 'abcabc'.replace(/b/g, "x"); // axcaxc

// Alt Text:::----------------------------------
// $$ means $
var val = 'abcabc'.replace(/b/, "$$"); // a$cabc
// $' means the right side of the matched string
var val = 'abcabc'.replace(/b/, "$'"); // acabccabc
// $` means the left side of the matched string
var val = 'abcabc'.replace(/b/, "$`"); // aacabc
// $& means the matched string
var val = 'abcabc'.replace(/b/, "$&"); // abcabc
// $1 means the first matched string
// $99 means the 99th matched string

// characters:::----------------------------------
// | means 'or'
// / means start or end
// \ means transpile
// - means scpoe: [A-Z] means from A to Z
// . matches any single character except `\n`
// \d equals [0-9]
// \D not equals [0-9]: [^0-9]
// \w equals [A-Za-z0-9]: letters, numbers and underline
// \W not equals [A-Za-a0-9]: [^A-Za-z0-9]


// Quantifier:::----------------------------------
// {n} match at least n times
// {n,}
// {n,m} match at least n times, most m times
// * === {0,}
// + === {1,}
// ? === {0,1}

// Attention:
// * no space between numbers and commas
// * * and +: greedy matching
// * Inertia match: add `?` after the matched character
var reg = /a+/;
var reg2 = /a+?/;
var reg3 = /a{2}/;
var str = 'aaab';

str.match(reg); // ["aaa"]
str.match(reg2); // ["a"]
str.match(reg3); // ["aa"]

// anchor/boundry:::----------------------------------
// ^ matches the start position. If it's the first char of [], it will be reverse
// $ matches the end position
// \b matches the boundry of a string: er\b matches "never", but not "verb"
// \B matches the unboundry of a string

var str = "hsadfksdhf3ahjka1akhf7ajghks989";
console.log(str.match(reg));
