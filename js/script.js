Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Členové výborů ve volebních obdobích'
    },
    subtitle: {
        text: 'Celkový počet poslanců ve výborech (včetně dočasných členů)'
    },
    credits: {
        text: 'Zdroj: <a href="http://www.psp.cz/sqw/hp.sqw?k=194">Poslanecká sněmovna</a>'
    },
    xAxis: {
        categories: [
            '1992-96',
            '1996-98',
            '1998-02',
            '2002-06',
            '2006-10',
            '2010-13',
            '2013-17',
            '2017-'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Počet poslanců'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Poslanců',
        data: [245, 290, 296, 317, 389, 447, 418, 357]

    }]
});