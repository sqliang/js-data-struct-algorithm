/**
 * @file 双端队列实现
 * @description 双端队列是一种允许同时从前端和后端添加和移除元素的特殊队列
 *              比如：一个刚买了票的人如果需要再问一些简单的信息，可以直接回到队伍的头部。
 *              在队尾的人如果赶时间，可以直接离开队伍
 *              再比如：存储一系列的撤销操作
 *
 * @author sqliang
 */

class DeQueque {
    constructor() {
        this.count = 0;
        this.lowerCount = 0;
        this.items = {};
    }

    // 可以考虑使用负键来实现，保持最低的计算成本
    addFront(item) {
        if (this.isEmpty()) {
            this.addBack(item);
        }
        else if (this.lowerCount > 0) {
            this.lowerCount--;
            this.items[this.lowerCount] = item;
        }
        else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowerCount = 0;
            this.items[0] = item;
        }
    }

    addBack(item) {
        this.items[this.count] = item;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowerCount];
        delete this.items[this.lowerCount];
        this.lowerCount++;

        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowerCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowerCount = 0;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowerCount;
    }
}

