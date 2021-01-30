package main

import (
	"testing"
)

func TestHello(t *testing.T) {
	got := "Hello Go!"
	expected := "Hello Go!"

	if got != expected {
		t.Errorf("GOt: %s, Expected: %s", got, expected)
	}
}
