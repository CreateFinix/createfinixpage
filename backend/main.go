package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Backend funcionando!")
    })

    fmt.Println("Servidor Go rodando na porta 8080...")
    http.ListenAndServe(":8080", nil)
}
