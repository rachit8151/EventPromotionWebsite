document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("regForm");
    const alertBox = document.getElementById("customAlert");
    const alertText = document.getElementById("alertText");
    const sound = document.getElementById("successSound");

    function showAlert(message, type = "success") {
        alertText.innerText = message;
        alertBox.classList.remove("hidden", "error");

        if (type === "error") {
            alertBox.classList.add("error");
        }

        setTimeout(() => {
            alertBox.classList.add("hidden");
        }, 3000);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let college = document.getElementById("college").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !college) {
            showAlert("All fields are required!", "error");
            return;
        }

        if (!emailPattern.test(email)) {
            showAlert("Please enter a valid email address!", "error");
            return;
        }

        showAlert("Registration Successful 🎉");

        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }

        form.reset();
    });

    const eventScroll = document.getElementById("eventScroll");

    if (eventScroll) {
        eventScroll.addEventListener(
            "wheel",
            function (e) {
                e.preventDefault();
                eventScroll.scrollLeft += e.deltaY;
            },
            { passive: false }
        );
    }

    const daySelect = document.getElementById("daySelect");
    const day1 = document.getElementById("day1");
    const day2 = document.getElementById("day2");

    if (daySelect && day1 && day2) {
        daySelect.addEventListener("change", function () {
            if (this.value === "day1") {
                day1.classList.remove("hidden");
                day2.classList.add("hidden");
            } else {
                day2.classList.remove("hidden");
                day1.classList.add("hidden");
            }
        });
    }

});
