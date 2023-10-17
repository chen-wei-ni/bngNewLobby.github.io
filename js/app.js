const eyes = document.querySelector(".show_password img");
const password = document.getElementById("password");
const terms = document.querySelector(".terms_conditions_btn");
const termsCloseBtn = document.querySelector(".terms_close");
eyes.addEventListener("click", function (e) {
    if (password.type == "password") {
        password.type = "text";
        e.currentTarget.src = "./images/open.svg";
    } else {
        password.type = "password";
        e.currentTarget.src = "./images/close.svg";
    }
});
terms.addEventListener("click", () => {
    document.querySelector(".terms_conditions").classList.add("term_show");
    document.querySelector(".terms_conditions ul").style.display = "block";
    termsCloseBtn.style.display = "block";
});
termsCloseBtn.addEventListener("click", () => {
    document.querySelector(".terms_conditions").classList.remove("term_show");
    document.querySelector(".terms_conditions ul").style.display = "none";
    termsCloseBtn.style.display = "none";
})

