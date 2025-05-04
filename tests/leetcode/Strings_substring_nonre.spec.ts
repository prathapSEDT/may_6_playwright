import { test } from '@playwright/test'
test("longest-substring-without-repeating-characters", async () => {
    let s: string = "pwpwkew"
    let temp: string = ""
    let i: number = 0
    let j: number = 1
    while (i <= s.length - 1) {
        let left: string = s.substring(i, j)
        let right: string = s.substring(j, j + 1)
        if ((left != right)
            &&
            (!temp.includes(left))
        ) {
            temp = temp + left
            i++
            j++
        }
        else if (j != s.length &&
            (!temp.includes(left))) {
            i++
            j++
            temp = ""
        } else {
            //i = j
            i++
            j++
        }

    }
    console.log(temp)
})