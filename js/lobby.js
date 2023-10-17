const rtpChange = document.querySelector(".rtp_version");
const languageChange = document.querySelector(".language");
const currencyChange = document.querySelector(".currency");
const balanceSet = document.querySelector(".add");
const popSubmit = document.querySelectorAll(".ok_btn");
const popClose = document.querySelectorAll(".close_btn");
//--- currency-field 輸入金額加comma
const currencyInput = document.querySelector("#currency-field");
currencyInput.addEventListener("keyup", (e) => {
    formatCurrency(e);
});
currencyInput.addEventListener("blur", (e) => {
    formatCurrency(e, "blur");
});
function formatNumber(e) {
    // format number 1000000 to 1,234,567
    // let n = e.target.value
    return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input_val = input.target.value;

    // don't validate empty input
    if (input_val === "") { return; }

    // original length
    var original_len = input_val.length;

    // initial caret position 
    // var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = left_side + "." + right_side; //---可加$

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = input_val; //---可加$

        // final formatting
        if (blur === "blur") {
            input_val += ".00";
        }
    }

    // send updated string to input
    // input.val(input_val);
    input.target.value = input_val
}

// --balanceSet
balanceSet.addEventListener("click", balanceSetting);
function balanceSetting() {
    const balanceSubmit = document.querySelector(".balance_submit");
    const balanceClose = document.querySelector(".balance_close");
    const currentCurrency = document.querySelector("#current-currency");
    document.querySelector(".balance_pop").style.display = "flex";
    currencyInput.value = currentCurrency.textContent;
    balanceSubmit.addEventListener("click", () => {
        currentCurrency.innerText = currencyInput.value; //更新額度
        document.querySelector(".balance_pop").style.display = "none";

    });
    balanceClose.addEventListener("click", () => {
        document.querySelector(".balance_pop").style.display = "none";
    });
}
// --language change
languageChange.addEventListener("click", (e) => {
    let allOptions = document.querySelectorAll(".language_pop ul li");
    let languageOptionMb = document.querySelectorAll(".lang_sub ul li span");
    if (window.innerWidth >= 768) {
        document.querySelector(".language_pop").style.display = "flex";
        [].forEach.call(allOptions, el => {
            el.addEventListener("click", checkSelected);
        });
        popSubmit[0].addEventListener("click", () => {
            document.querySelector(".language_pop").style.display = "none";
        });
        popClose[0].addEventListener("click", () => {
            document.querySelector(".language_pop").style.display = "none";
        });
        function checkSelected() {
            [].forEach.call(allOptions, el => {
                if (el !== this) {
                    el.classList.remove("language_selected");
                } else {
                    el.classList.add("language_selected");
                }
            });
        }
    } else {
        slideToggle(dropList[0], 200);
        slideUp(dropList[1], 200);
        slideUp(dropList[2], 200);
        // ---選擇selected變色
        [].forEach.call(languageOptionMb, el => {
            el.addEventListener("click", function () {
                [].forEach.call(languageOptionMb, el => {
                    if (el !== this) {
                        el.classList.remove("selected");
                    } else {
                        el.classList.add("selected");
                    }
                });
            });
        });
    }
});

// --- currency
currencyChange.addEventListener("click", currencyFun);

function currencyFun() {
    let allOptions = document.querySelectorAll(".currency_pop ul li span");
    let currencyOptionsMb = document.querySelectorAll(".currency_sub ul li span");
    if (window.innerWidth >= 768) {
        document.querySelector(".currency_pop").style.display = "flex";
        [].forEach.call(allOptions, el => {
            el.addEventListener("click", checkSelected);
        });
        popSubmit[1].addEventListener("click", () => {
            document.querySelector(".currency_pop").style.display = "none";
        });
        popClose[1].addEventListener("click", () => {
            document.querySelector(".currency_pop").style.display = "none";
        });
    } else {
        slideToggle(dropList[1], 200);
        slideUp(dropList[0], 200);
        slideUp(dropList[2], 200);
        // ---選擇selected變色
        [].forEach.call(currencyOptionsMb, el => {
            el.addEventListener("click", function () {
                [].forEach.call(currencyOptionsMb, el => {
                    if (el !== this) {
                        el.classList.remove("selected");
                    } else {
                        el.classList.add("selected");
                    }
                });
            });
        });
    }
    function checkSelected() {
        [].forEach.call(allOptions, el => {
            if (el !== this) {
                el.classList.remove("selected");
            } else {
                el.classList.add("selected");
            }
        });
    }
}
// --RTP
rtpChange.addEventListener("click", rtpVersion);
function rtpVersion() {
    let allOptions = document.querySelectorAll(".rtp_pop ul li span");
    let allOptionsMb = document.querySelectorAll(".rtp_sub ul li span");
    if (window.innerWidth >= 768) {
        [].forEach.call(allOptions, el => {
            el.addEventListener("click", checkSelected);
        });
        document.querySelector(".rtp_pop").style.display = "flex";
        popSubmit[2].addEventListener("click", () => {
            document.querySelector(".rtp_pop").style.display = "none";
        });
        popClose[2].addEventListener("click", () => {
            document.querySelector(".rtp_pop").style.display = "none";
        });
    } else {
        slideToggle(dropList[2], 200);
        slideUp(dropList[0], 200);
        slideUp(dropList[1], 200);
        [].forEach.call(allOptionsMb, function (el) {
            el.addEventListener("click", checkSelectedMb);
        });

    }
    function checkSelected() {
        [].forEach.call(allOptions, el => {
            if (el !== this) {
                el.classList.remove("selected");
            } else {
                el.classList.add("selected");
            }
        });
    }
    function checkSelectedMb() {
        [].forEach.call(allOptionsMb, el => {
            if (el !== this) {
                el.classList.remove("selected");
            } else {
                el.classList.add("selected");
            }
        });
    }
}

// --filter game
const filterGameBtn = document.querySelectorAll(".filter_game_btn li span");
[].forEach.call(filterGameBtn, el => {
    el.addEventListener("click", function (e) {
        [].forEach.call(filterGameBtn, el => {
            if (el !== this) {
                el.classList.remove("selected");
            } else {
                el.classList.add("selected");
            }
        })
        let t = el.dataset.name;
        let games = document.querySelectorAll(".each_game");
        for (let i = 0; i < games.length; i++) {
            games[i].style.display = "none"
            games[i].classList.remove("show_game");
            if (games[i].dataset.tag == t || games[i].dataset.tag2 == t) {
                games[i].classList.add("show_game");
                setTimeout(() => {
                    games[i].style.display = "grid"
                }, 300)
            } else if (t === "all") {
                games[i].classList.add("show_game");
                setTimeout(() => {
                    games[i].style.display = "grid"
                }, 300)
            }
        }
    })
})


// ---mobile Version
// menu show
const dropList = document.querySelectorAll(".sub_menu_list");
const menuBtn = document.querySelector(".mb_menu");
menuBtn.addEventListener("click", () => {
    document.querySelector(".function_btn").classList.toggle("show_menu");
    dropList[0].style.display = "none";
    dropList[1].style.display = "none";
    dropList[2].style.display = "none";
});

// sliding droplist
function slideUp(target, duration) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideToggle = (target, duration) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        dropList.forEach(function (e) {
            e.style.display = "none";
        })
    } else {
        document.querySelector(".rtp_pop").style.display = "none";
        document.querySelector(".language_pop").style.display = "none";
        document.querySelector(".currency_pop").style.display = "none";
    }

});
