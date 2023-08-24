const proofreadButton = document.getElementById("proofreadButton");
const inputText = document.getElementById("inputText");
const proofreadResult = document.getElementById("proofreadResult");

proofreadButton.addEventListener("click", async () => {
    const text = inputText.value;

    // Call your GPT-4 API here and get the proofread version
    // Update the proofreadResult with the response

    // For now, let's just display the input text for demonstration
    proofreadResult.textContent = text;
});
