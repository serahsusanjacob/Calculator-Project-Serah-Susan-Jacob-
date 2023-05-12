var screen = document.getElementById('screen');

function btnclk(value) {
    screen.value += value;
    if (screen.value == i) {
        i = math.sqrt(-1, 2);
    }



}

function clrscrn() {
    screen.value = "";


}

function res() {
    var result = eval(screen.value)
    screen.value = result;

}

function sqr(value) {
    screen.value = screen.value * screen.value;
}

function cmplx() {
    screen.value
}

function cube(value) {
    screen.value = screen.value * screen.value * screen.value;
}