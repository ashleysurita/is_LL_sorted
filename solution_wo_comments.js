class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function isLLSortedRecursive(head){
    if(!head) return false
    if(!head.next) return true
    
    while(head && head.next){
        if(head.value > head.next.value) return false
        return isLLSortedRecursive(head.next)
    }
    
    return false
}

// Tests
const LL1 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))
const LL2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
const LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(6, new ListNode(7))))))
const LL5 = new ListNode(11, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(6, new ListNode(7))))))
const LL6 = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(0))))

console.log(isLLSortedRecursive(LL1), 'expect true')
console.log(isLLSortedRecursive(LL2), 'expect true')
console.log(isLLSortedRecursive(LL3), 'expect false')
console.log(isLLSortedRecursive(new ListNode(1)), 'expect true')
console.log(isLLSortedRecursive(LL5), 'expect false')
console.log(isLLSortedRecursive(LL6), 'expect false')
