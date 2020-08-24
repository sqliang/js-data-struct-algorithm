/**
 * @file 队列
 *
 * @author sqliang
 */

class Queue {
    constructor() {
        this.count = 0;
        this.items = {};
        this.lowerCount = 0;
    }

    // 向队尾中添加一个（或多个）元素
    enqueue(item) {
        this.items[this.count] = item;
        this.count++;
    }

    // 移除队列的第一项，并返回被移除的元素
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowerCount];
        delete this.items[this.lowerCount];
        this.lowerCount++;

        return result;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowerCount = 0;
    }

    // 返回队列中第一个元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowerCount];
    }

    // 检测队列中是否包含元素
    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowerCount;
    }
}
