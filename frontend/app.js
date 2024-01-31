const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const textarea = document.querySelector("textarea")
    const para = textarea.value

    if (!para) {
        alert("Please provide something...")
        return;
    }

    const baseURL = 'https://qrcode-q2gl.onrender.com'
    const output = document.getElementById('output')

    // generate: POST baseURL/generate, data
    // Respone => svg element


    fetch(`${baseURL}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            para
        })
    }).then((response) => {
        return response.json()
    })
    .then((data) =>{
        console.log(data)
        output.innerHTML = data.svg
    })
    .catch((err) => {
        console.log(err)
    })
    
})