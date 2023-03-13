const height = document.getElementById("height")
const age = document.getElementById("age")
const weight = document.getElementById("weight")
const female = document.getElementById("weiblich")
const male = document.getElementById("male")
const select = document.getElementById("selection")
const basekcl = document.getElementById("basekcl")
const basekj = document.getElementById("basekj")
const totalkcl = document.getElementById("totalkcl")
const totalkj = document.getElementById("totalkj")

const calc = () => {

    if (female.checked) {
        let grundumsatzkcl = 655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value)
        basekcl.innerHTML = grundumsatzkcl.toFixed(0)

        let grundumsatzkj = grundumsatzkcl * 4.184
        basekj.innerHTML = grundumsatzkj.toFixed(0)

        if (select.value === "0.95") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.2") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.5") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.7") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.9") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "2.2") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

    } else {
        let grundumsatzkcl = 664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)
        basekcl.innerHTML = grundumsatzkcl.toFixed(0)

        let grundumsatzkj = grundumsatzkcl * 4.184
        basekj.innerHTML = grundumsatzkj.toFixed(0)

        if (select.value === "0.95") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.2") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.5") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.7") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "1.9") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }

        else if (select.value === "2.2") {
            totalkcl.innerHTML = (grundumsatzkcl * select.value).toFixed(0)
            totalkj.innerHTML = (grundumsatzkj * select.value).toFixed(0)
        }
    }
}
