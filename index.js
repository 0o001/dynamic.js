function isOperator(operator) {

    return ['+', '-', '*', '/', '==', '===', '&', '&&', '|', '||', '??'].some((item) => {
        return item === operator
    })

}

function dynamicCalc(num1, num2, operator) {

    if(!isOperator(operator)) {
        throw 'is not operator'
    }
    
    return Function(`return ${+num1} ${operator} ${+num2}`)()

}