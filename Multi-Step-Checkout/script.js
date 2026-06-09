const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("submit");

let currentStep = 0;

function updateForm() {

    steps.forEach(step => step.classList.remove("active"));
    progressSteps.forEach(step => step.classList.remove("active"));

    steps[currentStep].classList.add("active");

    for(let i = 0; i <= currentStep; i++){
        progressSteps[i].classList.add("active");
    }

    prevBtn.style.display =
        currentStep === 0 ? "none" : "inline-block";

    nextBtn.style.display =
        currentStep === steps.length - 1 ? "none" : "inline-block";

    submitBtn.style.display =
        currentStep === steps.length - 1 ? "inline-block" : "none";
}

nextBtn.addEventListener("click", () => {
    if(currentStep < steps.length - 1){
        currentStep++;
        updateForm();
    }
});

prevBtn.addEventListener("click", () => {
    if(currentStep > 0){
        currentStep--;
        updateForm();
    }
});

document.getElementById("checkoutForm")
.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
});

updateForm();