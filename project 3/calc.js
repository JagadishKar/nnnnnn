document.querySelector('input[value="AC"]').onclick = function () {
    document.querySelector('input[name="display"]').value = '';
};

document.querySelector('input[value="%"]').onclick = function () {
    document.querySelector('input[name="display"]').value += '%';
};


document.querySelector('input[value="DE"]').onclick = function () {
    document.querySelector('input[name="display"]').value = document.querySelector('input[name="display"]').value.toString().slice(0, -1);
};


document.querySelector('input[value="/"]').onclick = function () {
    document.querySelector('input[name="display"]').value += '/';
};


document.querySelectorAll('input[type="button"]').forEach(function (button) {
    if (!isNaN(parseInt(button.value)) || button.value === '.') {
        button.onclick = function () {
            document.querySelector('input[name="display"]').value += button.value;
        };
    }
});

document.querySelector('input[value="="]').onclick = function () {
    document.querySelector('input[name="display"]').value = eval(document.querySelector('input[name="display"]').value);
};