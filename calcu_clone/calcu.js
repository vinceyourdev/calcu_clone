

const outputData = document.querySelector('#output_value');

function display (num) {
    outputData.value += num;
}

function clr () {
    outputData.value = ''
}

function del () {
    outputData.value = outputData.value.slice(0, -1);
}

function calculate () {
    try {
        outputData.value = eval(outputData.value)
    } catch (err) {
        alert('invalid')
    }
}
