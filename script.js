const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        const isAlreadyOpen = currentItem.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(function (item) {
            item.classList.remove("active");

            const button = item.querySelector(".faq-question");
            button.setAttribute("aria-expanded", "false");
            button.querySelector(".icon").textContent = "+";
        });

        if (!isAlreadyOpen) {
            currentItem.classList.add("active");
            question.setAttribute("aria-expanded", "true");
            question.querySelector(".icon").textContent = "−";
        }});
});