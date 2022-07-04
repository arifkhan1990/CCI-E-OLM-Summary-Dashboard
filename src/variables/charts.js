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