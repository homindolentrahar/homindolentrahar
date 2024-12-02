---
title: "Pipeline Concurrency Pattern in Go"
desc: "Lorem ipsum dolor sit amet dsohf ahdsoif ewoirhwe asohidfhn 0oweih iasdfoh  eioahf aisod hf oiwehf onbheaopawoefh aoehf iewh  asoifhepiahef"
thumbnailUrl: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
category: {
  slug: "study",
  title: "Study"
}
keywords: ["go", "backend", "concurrency"]
publishedDate: 2019-09-01
---

## Overview
> *Series of process where we do something to the data and yield that processed data to another process or stage in the pipeline*

### The Code
```go
func main(){
	// INput
	nums := []int{1, 2, 3, 4}
	// Stage 1 - To Channel
	dataChannel := sliceToChannel(nums)
	// Stage 2 - Square the numbers
	finalChannel := sq(dataChannel)
	// Stage 3 - Output the values
	for n := range finalChannel {
		fmt.Println(n)
	}
}
```
- Stage One
```go
func sliceToChannel(nums []int) <-chan int{
	out := make(chan int)
	go func(){
		for _, n := range nums{
			out <- n
		}
		close(out)
	}()
	
	return out
}
```
- Stage Two
```go
func sq(in <-chan int) <-chan int{
	out := make(chan int)
	go func(){
		for n := range in{
			out <- n * n
		}
		close(out)
	}()
	
	return out
}
```
### References
- [https://www.youtube.com/watch?v=qyM8Pi1KiiM&t=1740s](https://www.youtube.com/watch?v=qyM8Pi1KiiM&t=1740s)