import { test } from '@playwright/test'


function isNumericChar(c: string): boolean {
    return /^\d$/.test(c);
}

test("string-to-integer-atoi", async () => {
    let s = "42"
    let temp = ""
    for (let i = 0; i <= s.length - 1; i++) {
        let substr = s.substring(i, i + 1)
        let nextchar = s.substring(i + 1, i + 2)
        if ((isNumericChar(substr) && nextchar === "-")) {
            break
        }
        if (substr === ' ' || substr === '0') {
            continue
        }
        if (substr === '+' || substr === '-' || (isNumericChar(substr) && isNumericChar(nextchar))) {
            temp = temp + substr
        } else if ((isNumericChar(substr) && !isNumericChar(nextchar))) {
            temp = temp + substr
        } else if (nextchar.length == 0) {
            temp = temp + substr
            break
        } else {
            break
        }
    }
    console.log(temp)
})