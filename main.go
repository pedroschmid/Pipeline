package main

import "fmt"

func Hello(message string) string {
	return message
}

func main() {
	fmt.Println(Hello("Hello Go!"))
}
