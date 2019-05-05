// All the elements in right part are greater than the elements in left part.

// The left part has “i” elements, and right part has “m - i” elements.

// There are “m + 1” kinds of splits. (i = 0 ~ m)

// When i = 0, the left part has “0” elements, right part has “m” elements.

// When i = m, the left part has “m” elements, right part has “0” elements.

// For array B, we can split it with the same way:

// { B[0], B[1], … , B[j - 1] }	{ B[j], B[j + 1], … , B[n - 1] }
// The left part has “j” elements, and right part has “n - j” elements.

// Put A’s left part and B’s left part into one set. (Let us name this set “LeftPart”)

// Put A’s right part and B’s right part into one set. (Let us name this set”RightPart”)

var findMedianSortedArrays = function(nums1, nums2) {
  let ar = []
  let len = nums1.length + nums2.length
  let half;

  if (len % 2 === 0) {
    half = len / 2
  } else {
    half = Math.ceil(len / 2)
  }
  for (let i = 0, r1 = 0, r2 = 0; i <= len; i++) {
    if (r1 >= nums1.length || nums1[r1] > nums2[r2]) ar[i] = nums2[r2++]
    else ar[i] = nums1[r1++]
    if (!nums1[i] && nums1.length === r1) {
      ar = ar.concat(nums2.slice(r2))
      return median(ar, len)
    }
    if (!nums2[i] && nums2.length === r2) {
      ar = ar.concat(nums1.slice(r1))
      return median(ar, len)
    }
    if (half === i) {
      return median(ar, len)
    }
  }

  function median(arr, len) {
    if (len % 2 === 0) {
      let half = len / 2
      return median = (arr[half - 1] + arr[half]) / 2
    } else {
      let half = Math.ceil(len / 2)
      return median = arr[half - 1]
    }
  }
}

console.log(findMedianSortedArrays([1, 4], [2, 3, 5, 6]))