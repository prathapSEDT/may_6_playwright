import { test } from '@playwright/test'
test("longest-palindromic-substring", async () => {
    let s = "abab"
    let left = 0
    let arr: Array<any> = []
    while (left < s.length) {
        let i = 0
        let right = left + 1
        while (i < s.length) {
            let temp = s.substring(left, right)
            if (temp.length > 1 && (temp[0] === temp[temp.length - 1])) {
                arr.push(temp)
            }
            right++
            i++
        }
        left++
    }
    // return arr
    console.log(arr)

})