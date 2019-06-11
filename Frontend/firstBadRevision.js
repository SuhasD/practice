// linear search O(n)
function firstBadVersion(n) {
    for (let i = 1; i < n; i++) {
        if (isBadVersion(i)) {
            return i;
        }
    }
    return n;
}

// Binary search O(log n)

function firstBadVersion(n) {
    var left = 1;
    var right = n;
    while (left < right) {
        var mid = left + (right - left) / 2;
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
