function task1() {
    function fillArray(length, initialValue) {
        return [...Array(length)].fill(initialValue);
    }

    let array = fillArray(10, 'qwerty');
    console.log(array);
}

function task2() {
    function filterArray(array, ...args) {
        return array.filter(item => !args.includes(item));
    }

    let array = [0, 1, 2, null, undefined, 'qwerty', false];
    let result = filterArray(array, 0, null, undefined, '', false);
    console.log(result);
}

function task3() {
    function calcSum() {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }

    let sum1 = calcSum(0); // 0
    console.log(sum1);
    let sum2 = calcSum(1, 2, 3); // 6
    console.log(sum2);
    let sum3 = calcSum(5, 0, 10, 1, 5); // 21
    console.log(sum3);
}

function task4() {
    function createPipe() {
        const a = ' ===== ';
        const b = ' ===== ';
        return (x) => {
            console.log(a + x + b);
        }
    }

    const pipeFunction = createPipe();
    pipeFunction('some text you like');
// output: ===== 'some text you like' =====
}

function task5() {
    function createFunction(text, func) {
        return func(text);
    }

    function showMessage1(text) {
        console.log(text);
    }

    function showMessage2(text) {
        alert(text);
    }

    createFunction('Hello, World', showMessage1);
    createFunction('Hello, World', showMessage2)

}