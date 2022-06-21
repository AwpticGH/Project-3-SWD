const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
    this.classList.toggle('change')
    sidebar.classList.toggle('change')
    bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
    this.classList.remove('change')
    sidebar.classList.remove('change')
    burger.classList.remove('change')
})

// Konsul
const loginPanel = document.getElementById("login-panel");
const navLogin = document.getElementById("nav-login");

navLogin.addEventListener("click", function() {
    if (!unfocused.includes(document.querySelector("#search-box"))) {
        for (var i = 0; i < unfocused.length; i++) {
            if (unfocused[i].style.filter == "brightness(0.5)") {
                unfocused[i].style.filter = "brightness(1)";
            }
        }
        unfocused.push(document.querySelector("#search-box"));
    }

    if (loginPanel.style.display == "block") {
        focusOnClicked();
        loginPanel.style.display = "none";
        loginPanel.classList.remove("active");
    }
    else {
        if (searchBox.classList.contains("active")) {
            searchBox.classList.remove("active");
        }
        loginPanel.style.display = "block";
        loginPanel.classList.add("active");
        focusOnClicked();
    }
})