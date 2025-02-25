const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark";
    }
});

function hideInstructions() {
    document.getElementById("instructions").classList.add("hidden");
}

function convert() {
    let value = parseFloat(document.getElementById("input-value").value);

    if (!isNaN(value)) {
        let metersToFeet = (value * 3.281).toFixed(3);
        let feetToMeters = (value / 3.281).toFixed(3);
        
        let litersToGallons = (value * 0.264).toFixed(3);
        let gallonsToLiters = (value / 0.264).toFixed(3);
        
        let kgToPounds = (value * 2.204).toFixed(3);
        let poundsToKg = (value / 2.204).toFixed(3);
        
        document.getElementById("length-result").innerHTML = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
        document.getElementById("volume-result").innerHTML = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
        document.getElementById("mass-result").innerHTML = `${value} kilograms = ${kgToPounds} pounds | ${value} pounds = ${poundsToKg} kilograms`;
    } else {
        alert("Please enter a valid number!");
    }
}
