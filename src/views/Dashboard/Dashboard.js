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
  barChartData,
  barChartOptions,
  barChartData2,
  barChartOptions2,
  lineChartData,
  lineChartOptions,
  hichartPieChartData,
  hichartDonutOptions,
  hichartBarChartOptions
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import { max } from "lodash";

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
  const [pieChartData, setPieChartData] = useState();
  const [rc, setRc] = useState();
  const [ra, setRa] = useState();
  const [rp, setRp] = useState();
  const [rs, setRs] = useState();

  var pieD = [];
  var donutPieChartData = [];
  var rC = ["Jun-29","Jun-30","Jul-01","Jul-02","Jul-03","Jul-04","Jul-05","Jul-06"];
  var rA = [0,0,0,0,474,781,966,0];
  var rP = [0,0,47,257,438,598,1657,0];
  var rS = [0,0,257,1082,965,834,2081,0];

  const [barChartD_approve, setBarChartD_approve] = useState([]);
  const [barChartD_processing, setBarChartD_processing] = useState([]);
  const [barChartD_reject, setBarChartD_reject] = useState([]);
  const [barChartD_submission, setBarChartD_submission] = useState([]);
  
  useEffect(() => {
    const fetchData = async =>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      // fetch("http://103.205.180.187:80/ccielive/public/index.php/api/cardData", requestOptions)
      fetch("https://api.ccie.gov.bd/api/cardData", requestOptions)
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
          setBarChartD_approve(result.officeWiseRenewTotalApprove);
          setBarChartD_processing(result.officeWiseRenewTotalProcessing);
          setBarChartD_reject(result.officeWiseRenewTotalReject);
          setBarChartD_submission(result.officesWiseRenewTotalSubmision);

           setRc(result.dayWiseRenewDataCat);
           setRa(result.dayWiseRenewApp);
           setRp(result.dayWiseRenewPro);
           setRs(result.dayWiseRenewSub);
          // result.officeWiseRenewTotalApprove.map((d, k) => {
          //   console.log(d.total_approve)
          //   barChartD_approve.push([d.total_approve, k]);
          // })

          // result.officeWiseRenewTotalProcessing.map((d, k) => {
          //   barChartD_processing.push(d.total_processing)
          // })

          // result.officeWiseRenewTotalReject.map((d, k) => {
          //   barChartD_reject.push(d.total_reject)
          // })

          // for(let i = 0; i < max(barChartD_approve.length, barChartD_processing.length, barChartD_reject.length); i++) {
          //   barChartD_submission.push(barChartD_processing[i] && barChartD_processing[i]  + barChartD_approve[i] && barChartD_approve[i] + barChartD_reject[i] && barChartD_reject[i]);
          // }

          setPieChartData(pieD);
        })
        .catch(error => console.log('error', error));
    };
    fetchData();
  },[]);

  console.log({cardData});
  // console.log({pieChartData});
  console.log({barChartD_approve});
  console.log({barChartD_processing});
  console.log({barChartD_reject});
  console.log({barChartD_submission});
  console.log(rc);
  console.log(ra);
  console.log({rp});
  console.log({rs});
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
      data: pieD
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
      data: donutPieChartData
    }]
  }
  
  var b1 = [1051,95,20,7,7,4,1];
  var b2 = [1659,165,41,10,5,5,3];
  var b3 = [0,0,0,0,0,0,0];
  var b4 = [2710,260,61,17,12,9,4];
//  b1 = barChartD_approve;
//  b2 = barChartD_processing;
//  b3 = barChartD_reject;
//  b4 = barChartD_submission;
 console.log({b1});
 console.log({b2});
 console.log({b3});
 console.log({b4});
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
      data: b4
    }, {
      name: 'Processing',
      data: b2
    }, {
      name: 'Approve',
      data: b1
    }, {
      name: 'Reject',
      data: b3
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
      categories: rC
      // categories: [
      //   "Jul-03",
      //   "Jul-02",
      //   "Jul-01",
      //   "Jun-30",
      //   "Jun-29",
      //   "Jun-28",
      //   "Jun-27",
      //   "Jun-26",
      //   "Jun-25",
      //   "Jun-24",
      //   "Jun-23",
      //   "Jun-22",
      // ],
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
      data:  rP   //[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    },
    {
      name: 'Submission',
      data: rS  //[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
    {
      name: 'Approve',
      data: rA   //[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
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
                  {cardData?  cardData.renewRevenue : ''} BDT
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
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
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
      </Grid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 2fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
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
      </Grid>
    </Flex>
  );
}