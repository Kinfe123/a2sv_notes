package main

import (
	"encoding/json"
	// "fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// Define a struct to represent the job data
type Job struct {
	Role       string `json:"Role"`
	Company     string `json:"company"`
	Location    string `json:"Location"`
	Application string `json:"application_link"`
	Date 		string `json:"date_posted"`
}

func main() {
	http.HandleFunc("/jobs", handleJobs)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleJobs(w http.ResponseWriter, r *http.Request) {
	// Read the JSON file containing job data
	filePath := "jobs.json"
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		log.Printf("Failed to read file: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Parse the JSON data into a slice of Job structs
	var jobs []Job
	err = json.Unmarshal(data, &jobs)
	if err != nil {
		log.Printf("Failed to parse JSON: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Convert the jobs slice to JSON
	response, err := json.Marshal(jobs)
	if err != nil {
		log.Printf("Failed to convert to JSON: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to application/json
	w.Header().Set("Content-Type", "application/json")

	// Write the JSON response
	_, err = w.Write(response)
	if err != nil {
		log.Printf("Failed to write response: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	return 
}