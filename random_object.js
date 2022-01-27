let сorporations = {
    'coca cola': ['Кола', 'Фанта', 'Спрайт'],
    'pepsi cola': ['Пепси', 'Миринда', 'Севенап'],
}

let randomKey = Object.keys(сorporations)[Math.floor(Math.random()*Object.keys(сorporations).length)]
let randomValue = сorporations[randomKey][Math.floor(Math.random()*сorporations[randomKey].length)]

const result = {
    [randomKey]: randomValue
}

console.log(result)






