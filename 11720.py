import sys

input = sys.stdin.readline
N = int(input())
num = input().rstrip('\n')
result = 0
for i in num:
  result += int(i)
print(result)