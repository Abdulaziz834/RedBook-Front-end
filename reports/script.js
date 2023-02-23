new Chart(document.querySelector("canvas#month-total-debts"), {
    type: 'bar',
    data: {
        labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan",],
        datasets: [
            {
                label: 'Income debts for a day',
                data: [1453000, 2632000, 1094000, 3150000, 1230000, 890000, 671000, 4100000, 1542000, 991000, 1100000, 1200000, 1350000, 1453000, 2632000, 1094000, 3150000, 1230000, 890000, 671000, 6000000, 1542000, 991000, 1100000, 1200000, 1350000],
                borderWidth: 1,
                // backgroundColor: Utils.CHART_COLORS.blue,
            },
            {
                label: "Outcome debts for a day",
                data: [253000, 32000, 234000, 315000, 123000, 89000, 167100, 410000, 154200, 991000, 116000, 121000, 235000, 145300, 263200, 694000, 315000, 123000, 89000, 671000, 62000, 154000, 412000, 110000, 129000, 135000],
                borderWidth: 1,
            }
        ]
    },
    options: {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                display: false
            }
        }
    }
});