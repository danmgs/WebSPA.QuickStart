'use strict';

Date.prototype.formatMMDDYYYY = function () {
    return (this.getMonth() + 1) +
    "/" + this.getDate() +
    "/" + this.getFullYear() +
    "_" + this.getMilliseconds();
}