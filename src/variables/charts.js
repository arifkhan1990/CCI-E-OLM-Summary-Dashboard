
export const barChartData = [
  {
    name: "Sales",
    data: [15, 25, 28, 10, 25, 20],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
    
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: "#ED8936",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "15px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartData = [
  {
    name: "Submission",
    data: [150, 240, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Approve",
    data: [70, 90, 40, 140, 290, 290, 340, 230, 400],
  },
  {
    name: "Processing",
    data: [65, 120, 40, 90, 220, 270, 300, 210, 300],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jul-03",
      "Jul-02",
      "Jul-01",
      "Jun-30",
      "Jun-29",
      "Jun-28",
      "Jun-27",
      "Jun-26",
      "Jun-25",
      "Jun-24",
      "Jun-23",
      "Jun-22",
    ],
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: null,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#71DC71","#DCCD71"],
  },
  colors: ["#fff", "#71DC71","#DCCD71"],
};

export const barChartData2 = [
  {
    name: 'Submission',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Approve',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Processing',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }
]

export const barChartOptions2 = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['']
    },
    xaxis: {
      categories: ['IRC', 'ERC', 'EP', 'IP', 'ERC (Indenting Service)', 'Other Services', 'Clearance Permit (CP)', 'Extension of Permits', 'Re-Registration'],
    },
    yaxis: {
      title: {
        text: 'Service wise Application Status'
      }
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.3,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#D6EAF8", "#71DC71","#DCCD71"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ""
        }
      }
    },
    colors: ["#D6EAF8", "#71DC71","#DCCD71"],
};

export const hichartPieChartData = [
  {
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }
]

export const hichartPieChartOptions = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
  title: {
    text: 'Regional Offcie wise Renew Application Approve Percentage, 2021-2022'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>%'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name} {point.percentage:.1f}%'
      },
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Renew Application Approve Percentage',
    data: [
      {
        name: 'Dhaka',
        y: 69.29,
        sliced: true,
        selected: true
      },
      ['CTG', 13.84],
      ['Khulna', 5.22],
      ['Rajshahi', 1.14],
      ['Others', 7.7]
    ]
  }]
}

export const hichartDonutOptions = {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: 'Contents of Highsoft\'s weekly fruit delivery'
  },
  // subtitle: {
  //   text: '3D donut in Highcharts'
  // },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45
    },
    showInLegend: true
  },
  series: [{
    name: 'Delivered amount',
    data: [
      ['Bananas', 8],
      ['Kiwi', 3],
      ['Mixed nuts', 1],
      ['Oranges', 6],
      ['Apples', 8],
      ['Pears', 4],
      ['Clementines', 4],
      ['Reddish (bag)', 1],
      ['Grapes (bunch)', 1]
    ]
  }]
}