function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const tog = document.querySelector('.tog');
    sidebar.classList.toggle('show');
    tog.classList.toggle('toggle');
}

var typedH1 = new Typed(".auto-type-h1", {
    strings: ["Aman Mujawar"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: false,
    onComplete: (self) => {
        self.cursor.remove();
    }
});

var typedP = new Typed(".auto-type-p", {
    strings: ["My skills include", "Frontend Developer", "DSA", "OOP's"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    onComplete: (self) => {
        self.cursor.remove();
    }
});
