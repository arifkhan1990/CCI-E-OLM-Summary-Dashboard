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
  hichartPieChartOptions,
  hichartDonutOptions,
  hichartLineChartOptions,
  hichartBarChartOptions
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";

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

  useEffect(() => {
    const fetchData = async =>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'no-cors'
      };

      fetch("http://103.205.180.187:80/ccielive/public/index.php/api/cardData", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setCardData(result);
        })
        .catch(error => console.log('error', error));
    };
    fetchData();
  },[]);
  console.log({cardData});
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
                  Total Submission
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    53,897
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
                  Total Renew
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    72,503
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
                    43,200
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
                    1,117,300,0 BDT
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
