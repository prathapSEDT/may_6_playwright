import { test, expect, Locator } from '@playwright/test';
import WebLib from '../utilities/ui/WebLib';

test('has title', async () => {
    let s = '00111';
    //0 00111=1+3=4
    //00 111=2+3=5
    //001 11=2+2=4
    let arr: Array<any> = []
    for (let i: number = 1; i < s.length; i++) {
        let left: string = s.substring(0, i)
        let right: string = s.substring(i)

        let leftCount = left.split("").filter((e) => {
            return e === '0'
        }).length

        let rightCount = right.split("").filter((e) => {
            return e === '1'
        }).length
        arr.push(leftCount + rightCount)
    }
    arr.sort()
    console.log(arr[arr.length - 1])
});
