// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import BarChart2 from "components/Charts/BarChart2";
import Donut3DChart from "components/Charts/Donut3DChart";
import HichartPieChart from "components/Charts/HichartPieChart";
import HichartLineChart from "components/Charts/HichartLineChart";
import HichartDonutChart from "components/Charts/HichartDonutChart";
import HichartBarChart from "components/Charts/HichartBarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import HiDoubleDonutChart from "components/Charts/HiDoubleDonutChart";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
  CreditIcon,
} from "components/Icons/Icons.js";
import React, {useState, useEffect} from "react";
// Variables
import {
  barChartData2,
  barChartOptions2,
  hiDoubleDonutChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import { max } from "lodash";
import { RiSafariFill } from "react-icons/ri";
import NumberFormat from "react-number-format";
import exporting from 'highcharts/modules/exporting'
import { commenter } from "stylis";

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");


  const { colorMode } = useColorMode();
  const [cardData, setCardData] = useState();
  const [pieChartData, setPieChartData] = useState([['Dhaka',69.29],['CTG', 13.84],['Khulna', 5.22],['Rajshahi', 1.14],['Others', 7.7]]);
  const [pieDonutChartData, setPieDonutChartData] = useState([['Dhaka',69.29],['CTG', 13.84],['Khulna', 5.22],['Rajshahi', 1.14],['Others', 7.7]]);
  var pieD = [];
  var donutPieChartData = [];
  var doubleDonutChartApproveData = [];
  var doubleDonutChartProcessingData = [];
  var rC = ["Jun-29","Jun-30","Jul-01","Jul-02","Jul-03","Jul-04","Jul-05","Jul-06"];
  var rA = [0,0,0,0,474,781,966,0];
  var rP = [0,0,47,257,438,598,1657,0];
  var rS = [0,0,257,1082,965,834,2081,0];

  const [rc, setRc] = useState(rC);
  const [ra, setRa] = useState(rA);
  const [rp, setRp] = useState(rP);
  const [rs, setRs] = useState(rS);
  const [status, setStatus] = useState();
  const [barChartD_approve, setBarChartD_approve] = useState([1051,95,20,7,7,4,1]);
  const [barChartD_processing, setBarChartD_processing] = useState([1659,165,41,10,5,5,3]);
  const [barChartD_reject, setBarChartD_reject] = useState([2710,260,61,17,12,9,4]);
  const [barChartD_submission, setBarChartD_submission] = useState([2710,260,61,17,12,9,4]);
  const [serviceWiseRenewApp , setServiceWiseRenewApp] = useState([
    { "name": "Commercial IRC","id": 1,"y": 2069,
        "displayValue": "31.98 %"},{
        "name": "Industrial IRC (Other Adhoc)",
        "id": 2,
        "y": 1997,
        "displayValue": "30.87 %"},{
        "name": "General ERC",
        "id": 3,
        "y": 1846,
        "displayValue": "28.54 %"},{
        "name": "Multinational ERC",
        "id": 4,
        "y": 209,
        "displayValue": "3.23 %"},{
        "name": "Indenting ERC",
        "id": 5,
        "y": 130,
        "displayValue": "2.01 %"},{
        "name": "Industrial IRC (First Adhoc)",
        "id": 6,
        "y": 124,
        "displayValue": "1.92 %"},{
        "name": "Multinational IRC",
        "id": 7,
        "y": 94,
        "displayValue": "1.45 %"}
]);
  const [serviceWiseRenewPro, setServiceWiseRenewPro] = useState([
    { "name": "Commercial IRC","id": 1,"y": 2069,
        "displayValue": "31.98 %"},{
        "name": "Industrial IRC (Other Adhoc)",
        "id": 2,
        "y": 1997,
        "displayValue": "30.87 %"},{
        "name": "General ERC",
        "id": 3,
        "y": 1846,
        "displayValue": "28.54 %"},{
        "name": "Multinational ERC",
        "id": 4,
        "y": 209,
        "displayValue": "3.23 %"},{
        "name": "Indenting ERC",
        "id": 5,
        "y": 130,
        "displayValue": "2.01 %"},{
        "name": "Industrial IRC (First Adhoc)",
        "id": 6,
        "y": 124,
        "displayValue": "1.92 %"},{
        "name": "Multinational IRC",
        "id": 7,
        "y": 94,
        "displayValue": "1.45 %"}
]);

  
  useEffect(() => {
    const fetchData = async =>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://103.205.180.187:80/ccielive/public/index.php/api/cardData", requestOptions)
      // fetch("https://api.ccie.gov.bd/api/cardData", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setCardData(result.data);

          
          result.officesWiseRenewApp.map((d, k) => {
            // if(k == 0) {
            //   var firstD = {name: d.Regional_office, y: Number(d.SHARE),sliced: true,selected: true};
            //   pieD.push(firstD);
            // }else{
              pieD.push([d.Regional_office,Number(d.SHARE)])
            // }
          });

          result.officesWiseAllApp.map((d, k) => {
              donutPieChartData.push([d.Regional_office,(Number(d.SHARE) + pieD[k][1])/2])
          });

        result.serviceWiseRenewApprove.map((d, k) => {
            doubleDonutChartApproveData.push({'name': d.sub_service_name_en, 'id': k+1, 'y': d.app, 'displayValue': Number(d.SHARE) + ' %'})
        });

        setServiceWiseRenewApp();
        setServiceWiseRenewApp(doubleDonutChartApproveData);

        result.serviceWiseRenewProcessing.map((d, k) => {
          doubleDonutChartProcessingData.push({'name': d.sub_service_name_en, 'id': k+1, 'y': d.app, 'displayValue': Number(d.SHARE) + ' %'});
          // console.log({doubleDonutChartProcessingData});
        });

        setServiceWiseRenewPro();
        setServiceWiseRenewPro(doubleDonutChartProcessingData);

          setPieChartData();
          setPieChartData(pieD);

          setPieDonutChartData();
          setPieDonutChartData(donutPieChartData);

          setBarChartD_approve();
          setBarChartD_processing();
          setBarChartD_reject();
          setBarChartD_submission();

          setBarChartD_approve(result.officeWiseRenewTotalApprove);
          setBarChartD_processing(result.officeWiseRenewTotalProcessing);
          setBarChartD_reject(result.officeWiseRenewTotalReject);
          setBarChartD_submission(result.officesWiseRenewTotalSubmision);

          setRc();
          setRa();
          setRp();
          setRs();
          
           setRc(result.dayWiseRenewDataCat);
           setRa(result.dayWiseRenewApp);
           setRp(result.dayWiseRenewPro);
           setRs(result.dayWiseRenewSub);
        })
        .catch(error => console.log('error', error));
    };
    fetchData();
  },[]);
  console.log({serviceWiseRenewApp});
  const hichartPieChartOptions = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Regional Office wise Renew Application, 2022-2023'
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
      data: pieChartData
    }]
  }

  const hichartDonutOptions = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Regional Offcie wise All Application Approve Percentage, 2021-2022'
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
        innerSize: 100,
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '{point.name} {point.percentage:.1f}%'
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Approve Application',
      data: pieDonutChartData
    }]
  }
  
  var b3 = [0,0,0,0,0,0,0];

  { !barChartD_reject &&
        setBarChartD_reject(b3)
  }

  const hichartBarChartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Office wise Renew Application Service'
    },
    xAxis: {
      categories: ['Dhaka', 'CTG', 'Khulna','Sylhet','Rajshahi', 'Barishal', 'Others'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Service(Renew)',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Submission',
      data: barChartD_submission
    }, {
      name: 'Processing',
      data: barChartD_processing
    }, {
      name: 'Approve',
      data: barChartD_approve
    }, {
      name: 'Reject',
      data: barChartD_reject
    }]
  }

  const hichartLineChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Per day Renew Application Record,2022-2023'
    },
    // subtitle: {
    //   text: 'Source: WorldClimate.com'
    // },
    xAxis: {
      categories: rc
    },
    yAxis: {
      title: {
        text: 'Per Day Renew Record'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Processing',
      data:  rp   //[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    },
    {
      name: 'Submission',
      data: rs  //[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
    {
      name: 'Approve',
      data: ra   //[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }
  ],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }


  // const hiDoubleDonutChartOptions = {
  //   chart: {
  //     type: 'pie'
  //   },
  //   title: {
  //     text: 'Service wise Renew Application Approve && Processing Percentage, 2022-2023'
  //   },
  //   accessibility: {
  //     point: {
  //       valueSuffix: '%'
  //     }
  //   },
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>%'
  //   },
  //   plotOptions: {
  //     pie: {
  //       allowPointSelect: true,
  //       cursor: 'pointer',
  //       innerSize: 100,
  //       depth: 45,
  //       dataLabels: {
  //         enabled: true,
  //         format: '{point.name} {point.percentage:.1f}%'
  //       },
  //       showInLegend: false,
  //     }
  //   },
  //   series: [{
  //     innerSize: 150,
  //     size: 200,
  //     data: serviceWiseRenewPro
  //   }, {
  //     innerSize: 100,
  //     size: 150,
  //     data: serviceWiseRenewApp
  //   }]
  // }

  const hiDoubleDonutChartOptions2 = {
    chart: {
      type: "pie",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        fontSize: "11px",
        fontFamily: "arial, sans-serif, helvetica"
      }
    },
    credits: {
      enabled: false
    },
    subtitle: {
          text: 'Approve',
          align: 'center',
          verticalAlign: 'middle',
          y: 30,
          x: -95,
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            colorx: "#444444"
          }
      },
    title: {
      text: 'Service Wise Renew Application, 2022 - 2023',
      x: -90,
      style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: "#444444"
        }
    },
    tooltip: {
      pointFormat: "{point.y} - ({point.displayValue})"
    },
    labelss: {
      items: [
        {
          html: "",
          style: {
            left: '80px',
            top: '20px'
          }
        },
        {
          html: "",
          style: {
            left: '50%',
            top: '180px'
          }
        }
      ],
      style: {
        fontSize: '18px',
        position: 'relative'
      }
    },
    plotOptions: {
      series: {
        point: {
          events: {}
        }
      },
      pie: {
        size: "100%",
        borderWidth: 0,
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          connectorWidth: 2,
          connectorColor: "black"
        },
        showInLegend: true,
        innerSize: "50%",
        events: {
            afterAnimate: function() {
              var chart = this.chart;
              var legend = chart.legend;
              legend.allItems.forEach(function(item) {
                item.legendItem.on('mouseover', function (e) {
                  var point = item.series.data[item.index];
                  point.setState('hover');
                  var id = point.id;
                  var state = point.state;
                  var index = point.series.index === 0 ? 1 : 0;
                  var series = point.series.chart.series[index];
                  series.data.forEach(function(point) {
                    if (point.id === id) {
                      point.setState('hover');
                    }
                  });
                });
                item.legendItem.on('mouseout', function (e) {
                  var point = item.series.data[item.index];
                  point.setState('');
                  var id = point.id;
                  var state = point.state;
                  var index = point.series.index === 0 ? 1 : 0;
                  var series = point.series.chart.series[index];
                  series.data.forEach(function(point) {
                    if (point.id === id) {
                      point.setState('');
                    }
                  });
                });
              });
            }
         }
      }
    },
    series: [
      {
        type: "pie",
        innerSize: "70%",
        showInLegend: false,
        dataLabels: {
          enabled: true,
          format: '<b>{point.displayValue}</b><br/> <b>{point.y}</b>',
          distance: -25,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 3
          }
        },
        data: serviceWiseRenewPro,
        pieTotal: "828",
        colors: [
          "#F9E79F",
          "#76D7C4",
          "#AED6F1",
          "#AEB6BF",
          "#F5B7B1",
          "#FAE5D3",
          "#D2B4DE"
        ]
      },
      {
        type: "pie",
        size: "60%",
        dataLabels: {
          enabled: true,
          format: '<b>{point.displayValue}</b> <br/> <b>{point.y}</b>',
          distance: -25,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 3
          }
        },
        point: {
          events: {
            legendItemClick: function() {
              var id = this.id;
              var visible = !this.visible;
              var index = this.series.index === 0 ? 1 : 0;
              var series = this.series.chart.series[index];
              console.log({series});
              series.data.forEach(function(point) {
                if (point.id === id) {
                  point.setVisible(visible);
                }
              })
            }
          }
        },
        data: serviceWiseRenewApp,
        pieTotal: "828",
        colors: [
          "#F7DC6F",
          "#52BE80",
          "#5DADE2",
          "#5D6D7E",
          "#EC7063",
          "#EB984E",
          "#A569BD"
        ]
      }
    ],
    exporting: {
      buttons: {
        contextButton: {
          enabled: true
        },
        deflateButton: {
          enabled: false,
          symbolX: 19,
          symbolY: 18,
          _titleKey: "close_button_key"
        },
        expandButton: {
          enabled: true,
          symbolX: 19,
          symbolY: 18,
          _titleKey: "expand_button_key"
        }
      }
    },
    lang: {
      close_button_key: "Close",
      expand_button_key: "Expand",
      configure_button_key: "Configure Portlets"
    },
    legend: {
      useHTML: true,
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: {
        fontSize: "11px",
        fontWeight: "normal"
      }
    }
  }

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Approve Application
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    {cardData? cardData.allAppSub : ''}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +3.48%{" "}
              </Text>
              Since last year
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Renew Submission
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                  {cardData? cardData.renewSub : ''}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.500' fontWeight='bold'>
                +2.82%{" "}
              </Text>
              Since last year
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Renew Approve
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                  {cardData? cardData.renewApprove : ''}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +5.2%{" "}
              </Text>
              Since last year
            </Text>
          </Flex>
        </Card>
        <Card minH='125px'>
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.400'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Total Renew Revenue
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                  <NumberFormat value={cardData?  cardData.renewRevenue : ''} displayType={'text'} thousandSeparator={true} prefix={'৳ '} />
                  {/* {cardData?  cardData.renewRevenue : ''} BDT */}
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='50%'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <CreditIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.400' fontSize='sm'>
              <Text as='span' color='green.400' fontWeight='bold'>
                +8.12%{" "}
              </Text>
              Since last year
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        
        templateColumns={{ sm: "1fr",lg: "1fr" }}
        gap='20px'>
    {rc && ra && rp && rs &&
        <Card
          // bg={
          //   colorMode === "dark"
          //     ? "navy.800"
          //     : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          // }
          mb='20px'
          p='0px'
          maxW={{ sm: "320px", md: "100%" }}>
          {/* <Flex direction='column' p='28px 0px 0px 22px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold' mb='6px'>
              Per day Renew Application Record
            </Text>
          </Flex> */}
          <Box minH='250px'>
            
            <HichartLineChart
              chartOptions={hichartLineChartOptions}
            />
          </Box>
        </Card>
      }
      </Grid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 2fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
        {pieChartData && 
        <Card p='0px' maxW={{ sm: "320px", md: "100%"}} minH='220px'>
          {/* <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Office wise Renew Application Approve Percentage
              </Text>
            </Flex> */}
            <Box minH='250px'>
              <HichartPieChart chartOptions={hichartPieChartOptions} />
            </Box>
        </Card>
        }


        {serviceWiseRenewApp && serviceWiseRenewPro &&
        <Card p='0px' maxW={{ sm: "320px", md: "100%"}} minH='220px'>
          {/* <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Office wise Renew Application Approve Percentage
              </Text>
            </Flex> */}
            <Box minH='250px'>
              <HiDoubleDonutChart chartOptions={hiDoubleDonutChartOptions2} />
            </Box>
        </Card>
         }

        <Card p='0px' maxW={{ sm: "320px", md: "100%"}}>
          {/* <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Office wise Renew Application Approve Percentage
              </Text>
            </Flex> */}
            <Box minH='250px'>
            
            <BarChart2 chartData={barChartData2} chartOptions={barChartOptions2} />
            </Box>
        </Card>

        { barChartD_approve && barChartD_processing && barChartD_reject && barChartD_submission &&
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          {/* <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <Text color={textColor} fontSize='lg' fontWeight='bold'>
            Service wise Application Status
            </Text>
          </Flex> */}
          <Box minH='300px'>
            <HichartBarChart chartOptions={hichartBarChartOptions} />
          </Box>
        </Card>
        }

      {pieDonutChartData &&
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          {/* <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <Text color={textColor} fontSize='lg' fontWeight='bold'>
            Service wise Application Status
            </Text>
          </Flex> */}
          <Box minH='300px'>
            <HichartDonutChart chartOptions={hichartDonutOptions} />
          </Box>
        </Card>
        }
      </Grid>
    </Flex>
  );
}