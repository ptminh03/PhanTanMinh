// Method 1: using a loop from 1 to n to calculate the sum
// Complexity: O(n)
function sum_to_n_a(n: number): number {
    if (n < 0) {
        return -1
    }

    let result: number = 0
	for (let i: number = 1; i <= n; i++) {
        result += i
    }

    return result
}

// Method 2: using the mathematical formula for arithmetic series with common difference d = 1, u(1) = 1, u(n) = n -> n * (u(n)+u(1)) / 2
// Complexity: O(1)
function sum_to_n_b(n: number): number {
	return n < 0 ? -1 : (n * (n + 1)) / 2
}

// Method 3: using recursion
// Complexity: O(n)
function sum_to_n_c(n: number): number {
	return n < 0 ? -1 : n === 0 ? 0 : n + sum_to_n_c(n - 1)
}
