var summa = document.getElementById('summaIn')
var muddat = document.getElementById('muddatIn')
var start = document.getElementById('startIn')
var foiz = document.querySelector('select')
var table = document.querySelector('table tbody')
function qiymat(a,b){
    var aVal = document.getElementById(a)
    var bVal = document.getElementById(b)
    bVal.value = aVal.value
}

function hisobla(){
    console.log(summa.value,muddat.value,start.value,foiz.value)
    var oy = muddat.value*12
    var asosiy = summa.value-start.value   //90
    var foizOy = asosiy*(foiz.value/100)/oy // 90*0.22/120
    var qarzSum = asosiy/oy
    var foizSum = qarzSum+foizOy
    var tolovSum = qarzSum+foizSum
    var sum = asosiy
    for(var i=1;i<=oy;i++){
        sum -= qarzSum+foizOy
        var tr = `
            <tr>
                <td>${i}</td>
                <td>${parseInt(qarzSum+foizOy)} so'm</td>
                <td>${parseInt(qarzSum)} so'm</td>
                <td>${parseInt(foizOy)} so'm</td>
                <td>${parseInt(sum)} so'm</td>
            </tr>`
        table.innerHTML += tr
        foizOy = sum*(foiz.value/100)/oy
    }
}

// 22% --- 1.22