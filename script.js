// Function to validate form
function validateForm() {
    // Get form elements
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    message.innerHTML = "";
    
    // Validate User ID and Password
    if (!userID || !validateUserID(userID)) {
        message.innerHTML = '<p style="color:red;">Please enter a valid User ID (e.g., ab123).</p>';
        return;
    }
    
    if (!password || password.length < 6) {
        message.innerHTML = '<p style="color:red;">Password should be at least 6 characters long.</p>';
        return;
    }
    
    message.innerHTML = '<p style="color:green;">Login successful!</p>';

    const radios = document.querySelectorAll('input[name="joinAs"]');
    let selected = false;

    radios.forEach((radio) => {
        if (radio.checked) {
            selected = true;
        }
    });

    if (!selected) {
        alert('Please select an option to join as Admin or User.');
        return false;
    }

    alert('Form is valid. Proceeding...');
    return true;
}

function validateUserID(userID) {
    const re = /^[a-zA-Z]+\d+$/;
    return re.test(userID);
}

// Function to validate signup form
function validateSignup() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const radios = document.querySelectorAll('input[name="role"]');
    
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password === "" || password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    let roleSelected = false;
    radios.forEach((radio) => {
        if (radio.checked) {
            roleSelected = true;
        }
    });

    if (!roleSelected) {
        alert("Please select a role.");
        return false;
    }

    alert("Form submitted successfully!");
    return true; 
}

// Function to update bed count
function updateBedCount(bedElement) {
    const bedCountElement = bedElement.querySelector('.bed-count');
    let currentCount = parseInt(bedCountElement.textContent, 10);
    
    if (currentCount > 0) {
        bedCountElement.textContent = currentCount - 1;
    } else {
        alert("No rooms available, Click ok to get added to wishlist");
    }
}

// Event listener for all book buttons
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', function() {
        const bedElement = this.closest('.bed');
        updateBedCount(bedElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.getAttribute('data-row');
            const quantityElement = document.querySelector(`.quantity[data-row="${row}"]`);
            let currentQuantity = parseInt(quantityElement.textContent, 10);

            if (this.checked) {
                // Decrease quantity by 1 when checked
                if (currentQuantity > 0) {
                    quantityElement.textContent = currentQuantity - 1;
                }
            } else {
                // Increase quantity by 1 when unchecked
                quantityElement.textContent = currentQuantity + 1;
            }
        });
    });

    const bookNowButton = document.querySelector('.book_med');
    
    bookNowButton.addEventListener('click', () => {
        alert('Medicine booked successfully!');
    });
});

// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const bookNowButton = document.querySelector('.book_med');
    
    bookNowButton.addEventListener('click', () => {
        alert('Medicine booked successfully!');
    });
});

// Function to alert that patient has been discharged
function dischargePatient() {
    const userID = document.getElementById('userID').value;

    if (userID) {
        alert(`Patient with User ID: ${userID} has been successfully discharged.`);
    } else {
        alert('Please enter a valid User ID.');
    }
}

// Add event listener to the Discharge button
document.querySelector('input[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault(); // Prevents form submission
    dischargePatient();
});
