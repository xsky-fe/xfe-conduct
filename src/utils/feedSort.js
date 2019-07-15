/*
arr 的类型为[
    {
        item: name // string
        len: length // int
    }
]
*/
function findPath(i, j, dp, arr, left, right){
    if (i > 0) {
		if (dp[i][j] === dp[i - 1][j]) {
			right.push(arr[i])
			findPath(i - 1, j, dp, arr, left, right);
		}
		else if (j - arr[i].len >= 0 && dp[i][j] === dp[i - 1][j - arr[i].len] + arr[i].len) {
			left.push(arr[i])
			findPath(i - 1, j - arr[i].len, dp, arr, left, right);
		}
	}
}
export default function feedSort(arr){
    arr.push({len: 0});
    arr.sort((a, b) => {
        return a.len - b.len;
    })
    const len = arr.length - 1;
    const sum = arr.map( el => el.len ).reduce((prev, curr) => {
        return prev + curr
    });
    const tar = parseInt(sum / 2);
    const dp = [];
    for(let i = 0; i <= len; i++){
      dp.push([])
      for(let j = 0; j <= tar; j++){
        dp[i][j] = 0;
      }
    }
    // 找到最优解
    for(let i = 1; i <= len; i++){
        for(let j = 1; j <= tar; j++){
            if(j < arr[i].len){
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i].len] + arr[i].len);
            }
        }
    }
    // dp[len-1, tar-1]为最优解
    // 最优解情况
    const left = [];
    const right = [];
    findPath(len, tar, dp, arr, left, right);
    arr.shift()
    const leftLen = left.map( el => el.len ).reduce((prev, curr) => {
        return prev + curr
    })
    if(leftLen < tar){
        left.push(null)
    } else {
        right.push(null)
    }
    return {left, right};
}