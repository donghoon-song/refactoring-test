export function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding(invoice);
    calculateOutstanding(invoice);
    // 마감일(dueDate)을 기록한다.
    recordDueDate(invoice);
    printDetails(invoice, outstanding);

    function printBanner() {
        console.log("****************");
        console.log("**** 고객 채무 ****");
        console.log("****************");
    }

    function printDetails(invoice, outstanding) {
        // 세부 사항을 출력한다.
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }

    function recordDueDate(invoice) {
        const today = new Date();
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

}

export function calculateOutstanding(invoice) {
    let result = 0;
    // 미해결 채무(outstanding)를 계산
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}