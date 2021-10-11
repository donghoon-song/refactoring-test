import { assert, expect } from "chai";
import { printOwing, calculateOutstanding } from "../src/6-1.js";

describe('test printOwing', function() {
    let invoice;
    beforeEach(function() {
        invoice = {
            customer: 'jessica',
            dueDate: new Date(),
            orders: [
                {
                    id:1,
                    amount: 30,
                },
                {
                    id:2,
                    amount: 50,
                },
                {
                    id:1,
                    amount: 10,
                },
            ],
        }
    })
    it('invoice is not an object', function() {
        invoice = 1;
        printOwing(invoice);
        // 이걸 fail로 둬야하는건가?
    })
    it('calculate outstanding', function() {
        // 결과값은 하드코딩이 나을까?
        assert.equal(calculateOutstanding(invoice), 90);
        // 똑같이 계산식을 넣어야 되나? -> 근데 로직이 똑같지 않나?
        const calculatedOutstanding = invoice.orders.reduce((prev, cur) => prev+cur.amount,0)
        assert.equal(calculateOutstanding(invoice), calculatedOutstanding);
    })
})