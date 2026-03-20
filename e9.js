// PB:76 :--Write a function 'ArrayToObject' which takes in an array of arrays,
// and returns an object with each pair of elements in the array as a key
// value pair and store the result in one arraytoobject.txt file.
//     Input = [['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output = {
//             Country: ' India ', State: ' Gujarat ', City:
// ‘Ahmedabad’
//         }
var fs = require("fs")
function inputcall(input) {
    ans = {}
    for (i in input) {
        ans[input[i][0]] = input[i][1]
    }
    console.log(ans)
    return ans;
}
I = inputcall([['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']])
fs.writeFileSync("arrayobjectFile.txt", JSON.stringify(I))