let ownCapital = document.getElementById('ownCapital')
let borrowedCapital = document.getElementById('borrowedCapital')
let bankRatio = document.getElementById('bankRatio')
let profit = document.getElementById('profit')
let duration = document.getElementById('duration')
let inputButton = document.getElementById('input-button')

let monthlyInstallmentContainer = document.getElementById('monthlyInstallment-container')
let selfProfitContainer = document.getElementById('selfProfit-container')
let bankProfitContainer = document.getElementById('bankProfit-container')

let musyarakahTable = document.getElementById('musyarakah-table')

inputButton.addEventListener("click", function() {
    musyarakahTable.innerText = ''
    let oc = Number(ownCapital.value)
    let bc = Number(borrowedCapital.value)
    let br = Number(bankRatio.value)
    let p = Number(profit.value)
    let d = Number(duration.value)

    let monthlyInstallment, selfProfit, bankProfit
    monthlyInstallment = bc/d
    bankProfit = (bc/(oc+bc))*p*(br/100)
    selfProfit = p-bankProfit

    monthlyInstallmentContainer.innerText = (Math.round(monthlyInstallment)).toString()
    selfProfitContainer.innerText = (Math.round(selfProfit)).toString()
    bankProfitContainer.innerText = (Math.round(bankProfit)).toString()

    let tableRow = document.createElement("tr")
    let tableHead = document.createElement("th")
    let tableHeadText = document.createTextNode("Month")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Installment to Pay (per Month)")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Self Profit")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Bank's Profit")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Remaining Installment")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    musyarakahTable.appendChild(tableRow)

    tableRow = document.createElement("tr")
    let tableData = document.createElement("td")
    let tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode("")
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)
    tableData = document.createElement("td")
    tableDataValue = document.createTextNode(Math.round(bc).toString())
    tableData.appendChild(tableDataValue)
    tableRow.appendChild(tableData)

    musyarakahTable.appendChild(tableRow)

    let sumSelfProfit = 0
    let sumBankProfit = 0
    let loopBC = bc

    for (let n = 1; n <= d; n++) {
        tableRow = document.createElement("tr")

        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(n.toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)

        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(Math.round(monthlyInstallment).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)

        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(Math.round(selfProfit).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)

        tableData = document.createElement("td")
        tableDataValue = document.createTextNode(Math.round(bankProfit).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)

        tableData = document.createElement("td")
        loopBC = loopBC - monthlyInstallment
        tableDataValue = document.createTextNode(Math.round(bc).toString())
        tableData.appendChild(tableDataValue)
        tableRow.appendChild(tableData)

        musyarakahTable.appendChild(tableRow)

        sumSelfProfit = sumSelfProfit + selfProfit
        sumBankProfit = sumBankProfit + bankProfit
    }

    tableRow = document.createElement("tr")
    
    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("Total")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode(Math.round(bc).toString())
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode(Math.round(sumSelfProfit).toString())
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode(Math.round(sumBankProfit).toString())
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    tableHead = document.createElement("th")
    tableHeadText = document.createTextNode("-")
    tableHead.appendChild(tableHeadText)
    tableRow.appendChild(tableHead)

    musyarakahTable.appendChild(tableRow)
})