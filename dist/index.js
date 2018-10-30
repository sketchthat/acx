"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const private_1 = require("./private");
const public_1 = require("./public");
class ACX {
    constructor(accessKey, secret) {
        this.privateClass = new private_1.Private(accessKey, secret);
        this.publicClass = new public_1.Public();
    }
    public() {
        return this.publicClass;
    }
    private() {
        return this.privateClass;
    }
}
exports.ACX = ACX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBb0M7QUFDcEMscUNBQWtDO0FBRWxDO0lBSUUsWUFDRSxTQUFrQixFQUNsQixNQUFlO1FBRWYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFuQkQsa0JBbUJDIn0=