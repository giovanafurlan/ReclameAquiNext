import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Badge, Box, ChakraProvider, Heading, Image, LinkBox, LinkOverlay, Progress, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { ChatIcon, CheckCircleIcon, CloseIcon, StarIcon } from '@chakra-ui/icons'

function Home() {

    const indice = {
      imageUrl: 'https://cdn.picpng.com/medal/medal-web-31797.png',
      imageAlt: 'Medal of good rating',
      ra: 'RA1000',
      rating: '8.7/10',
      formattedDate: '01/08/2021 - 31/01/2022'
    }

    const total = {
      complaint: '3000',
      answered: '3001',
    }

    const progresso = {
      answered: '98.9',
      back: '81',
      solution: '91.6',
      score: '7.95'
    }

    const more = {
      not: '280',
      total: '14878',
    }

  return (
    <ChakraProvider>
      {/* <Wrap>
        <WrapItem>
          <Avatar size='xl' name='Logo' src='https://raichu-uploads.s3.amazonaws.com/logo_americanas-com-loja-online_wPPyZK.png' />{' '}
          <Text fontSize='3xl'>Americanas - Loja Online</Text>
        </WrapItem>
      </Wrap> */}
      <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' fontWeight={600}>
                Reputação
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Tabs isFitted>
            <TabList mb='1em' fontSize="10px">
              <Tab>Seis Meses</Tab>
              <Tab>12 meses</Tab>
              <Tab>2021</Tab>
              <Tab>2020</Tab>
              <Tab>Geral</Tab>
            </TabList>
              <TabPanels>
              {/* Seis Meses */}
                <TabPanel pl="0" pr="0" pt="0">
                  <AccordionPanel pb={4} p="0">
                    <Box>
                      <Stat backgroundColor="#def0d2" p="10px">
                        <Image src={indice.imageUrl} alt={indice.imageAlt} w={20} h={20} float="left" p="10px"/>
                        <StatLabel fontWeight={600}>{indice.ra}</StatLabel>
                        <StatNumber>{indice.rating}</StatNumber>
                        <StatHelpText>
                          <StatArrow type='increase' />
                          {indice.formattedDate}
                        </StatHelpText>
                      </Stat>
                    <Box display="flex" p="10px" justifyContent="space-around">
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Reclamações
                        </Box>
                        <Text fontWeight="600">
                        <ChatIcon mr="15px"/>
                          {total.complaint}
                        </Text>
                      </LinkBox>
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Respondidas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          {total.answered}
                        </Text>
                      </LinkBox>
                    </Box>
                    <Stack m="2vw" w="75vw" >
                      <Text fontSize='md'>Reclamações respondidas</Text>
                      <Progress colorScheme='green' size='md' value={progresso.answered} borderRadius={40} float="left"/>
                      <Text fontSize='md' fontWeight={600}>98.9%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Voltariam a fazer negócio</Text>
                      <Progress colorScheme='green' size='md' value={progresso.back} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>81%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Índice de solução</Text>
                      <Progress colorScheme='green' size='md' value={progresso.solution} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>91.6%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Nota do consumidor</Text>
                      <Progress colorScheme='green' size='md' value={progresso.score} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>7.95</Text>
                    </Stack>
                    <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Não Respondidas
                        </Box>
                        <Text fontWeight="600">
                        <CloseIcon mr="15px"/>
                          280
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.not} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Avaliadas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          14878
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.total} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                    </Box>
                  </Box>
                </AccordionPanel>
              </TabPanel>
              {/* 12 meses */}
              <TabPanel pl="0" pr="0" pt="0">
                  <AccordionPanel pb={4} p="0">
                    <Box>
                      <Stat backgroundColor="#def0d2" p="10px">
                        <Image src={indice.imageUrl} alt={indice.imageAlt} w={20} h={20} float="left" p="10px"/>
                        <StatLabel fontWeight={600}>{indice.ra}</StatLabel>
                        <StatNumber>{indice.rating}</StatNumber>
                        <StatHelpText>
                          <StatArrow type='increase' />
                          {indice.formattedDate}
                        </StatHelpText>
                      </Stat>
                    <Box display="flex" p="10px" justifyContent="space-around">
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Reclamações
                        </Box>
                        <Text fontWeight="600">
                        <ChatIcon mr="15px"/>
                          {total.complaint}
                        </Text>
                      </LinkBox>
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Respondidas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          {total.answered}
                        </Text>
                      </LinkBox>
                    </Box>
                    <Stack m="2vw" w="75vw" >
                      <Text fontSize='md'>Reclamações respondidas</Text>
                      <Progress colorScheme='green' size='md' value={progresso.answered} borderRadius={40} float="left"/>
                      <Text fontSize='md' fontWeight={600}>98.9%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Voltariam a fazer negócio</Text>
                      <Progress colorScheme='green' size='md' value={progresso.back} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>81%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Índice de solução</Text>
                      <Progress colorScheme='green' size='md' value={progresso.solution} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>91.6%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Nota do consumidor</Text>
                      <Progress colorScheme='green' size='md' value={progresso.score} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>7.95</Text>
                    </Stack>
                    <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Não Respondidas
                        </Box>
                        <Text fontWeight="600">
                        <CloseIcon mr="15px"/>
                          280
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.not} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Avaliadas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          14878
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.total} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                    </Box>
                  </Box>
                </AccordionPanel>
              </TabPanel>
              {/* 2021 */}
              <TabPanel pl="0" pr="0" pt="0">
                  <AccordionPanel pb={4} p="0">
                    <Box>
                      <Stat backgroundColor="#def0d2" p="10px">
                        <Image src={indice.imageUrl} alt={indice.imageAlt} w={20} h={20} float="left" p="10px"/>
                        <StatLabel fontWeight={600}>{indice.ra}</StatLabel>
                        <StatNumber>{indice.rating}</StatNumber>
                        <StatHelpText>
                          <StatArrow type='increase' />
                          {indice.formattedDate}
                        </StatHelpText>
                      </Stat>
                    <Box display="flex" p="10px" justifyContent="space-around">
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Reclamações
                        </Box>
                        <Text fontWeight="600">
                        <ChatIcon mr="15px"/>
                          {total.complaint}
                        </Text>
                      </LinkBox>
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Respondidas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          {total.answered}
                        </Text>
                      </LinkBox>
                    </Box>
                    <Stack m="2vw" w="75vw" >
                      <Text fontSize='md'>Reclamações respondidas</Text>
                      <Progress colorScheme='green' size='md' value={progresso.answered} borderRadius={40} float="left"/>
                      <Text fontSize='md' fontWeight={600}>98.9%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Voltariam a fazer negócio</Text>
                      <Progress colorScheme='green' size='md' value={progresso.back} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>81%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Índice de solução</Text>
                      <Progress colorScheme='green' size='md' value={progresso.solution} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>91.6%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Nota do consumidor</Text>
                      <Progress colorScheme='green' size='md' value={progresso.score} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>7.95</Text>
                    </Stack>
                    <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Não Respondidas
                        </Box>
                        <Text fontWeight="600">
                        <CloseIcon mr="15px"/>
                          280
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.not} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Avaliadas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          14878
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.total} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                    </Box>
                  </Box>
                </AccordionPanel>
              </TabPanel>
              {/* 2020 */}
              <TabPanel pl="0" pr="0" pt="0">
                  <AccordionPanel pb={4} p="0">
                    <Box>
                      <Stat backgroundColor="#def0d2" p="10px">
                        <Image src={indice.imageUrl} alt={indice.imageAlt} w={20} h={20} float="left" p="10px"/>
                        <StatLabel fontWeight={600}>{indice.ra}</StatLabel>
                        <StatNumber>{indice.rating}</StatNumber>
                        <StatHelpText>
                          <StatArrow type='increase' />
                          {indice.formattedDate}
                        </StatHelpText>
                      </Stat>
                    <Box display="flex" p="10px" justifyContent="space-around">
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Reclamações
                        </Box>
                        <Text fontWeight="600">
                        <ChatIcon mr="15px"/>
                          {total.complaint}
                        </Text>
                      </LinkBox>
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Respondidas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          {total.answered}
                        </Text>
                      </LinkBox>
                    </Box>
                    <Stack m="2vw" w="75vw" >
                      <Text fontSize='md'>Reclamações respondidas</Text>
                      <Progress colorScheme='green' size='md' value={progresso.answered} borderRadius={40} float="left"/>
                      <Text fontSize='md' fontWeight={600}>98.9%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Voltariam a fazer negócio</Text>
                      <Progress colorScheme='green' size='md' value={progresso.back} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>81%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Índice de solução</Text>
                      <Progress colorScheme='green' size='md' value={progresso.solution} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>91.6%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Nota do consumidor</Text>
                      <Progress colorScheme='green' size='md' value={progresso.score} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>7.95</Text>
                    </Stack>
                    <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Não Respondidas
                        </Box>
                        <Text fontWeight="600">
                        <CloseIcon mr="15px"/>
                          280
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.not} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Avaliadas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          14878
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.total} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                    </Box>
                  </Box>
                </AccordionPanel>
              </TabPanel>
              {/* Geral */}
              <TabPanel pl="0" pr="0" pt="0">
                  <AccordionPanel pb={4} p="0">
                    <Box>
                      <Stat backgroundColor="#def0d2" p="10px">
                        <Image src={indice.imageUrl} alt={indice.imageAlt} w={20} h={20} float="left" p="10px"/>
                        <StatLabel fontWeight={600}>{indice.ra}</StatLabel>
                        <StatNumber>{indice.rating}</StatNumber>
                        <StatHelpText>
                          <StatArrow type='increase' />
                          {indice.formattedDate}
                        </StatHelpText>
                      </Stat>
                    <Box display="flex" p="10px" justifyContent="space-around">
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Reclamações
                        </Box>
                        <Text fontWeight="600">
                        <ChatIcon mr="15px"/>
                          {total.complaint}
                        </Text>
                      </LinkBox>
                      <LinkBox as='article' p='4' borderWidth='1px' rounded='md'>
                        <Box as='time'>
                          Respondidas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          {total.answered}
                        </Text>
                      </LinkBox>
                    </Box>
                    <Stack m="2vw" w="75vw" >
                      <Text fontSize='md'>Reclamações respondidas</Text>
                      <Progress colorScheme='green' size='md' value={progresso.answered} borderRadius={40} float="left"/>
                      <Text fontSize='md' fontWeight={600}>98.9%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Voltariam a fazer negócio</Text>
                      <Progress colorScheme='green' size='md' value={progresso.back} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>81%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Índice de solução</Text>
                      <Progress colorScheme='green' size='md' value={progresso.solution} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>91.6%</Text>
                    </Stack>
                    <Stack m="2vw" w="75vw">
                      <Text fontSize='md'>Nota do consumidor</Text>
                      <Progress colorScheme='green' size='md' value={progresso.score} float="left" borderRadius={40}/>
                      <Text fontSize='md' fontWeight={600}>7.95</Text>
                    </Stack>
                    <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Não Respondidas
                        </Box>
                        <Text fontWeight="600">
                        <CloseIcon mr="15px"/>
                          280
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.not} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                      <LinkBox as='article' w='xs' p='4' rounded='md'>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                          Avaliadas
                        </Box>
                        <Text fontWeight="600">
                          <CheckCircleIcon mr="15px"/>
                          14878
                        </Text>
                        <Stack alignItems="center">
                          <Progress colorScheme='green' size='md' value={more.total} borderRadius={40} w="20"/>
                        </Stack>
                      </LinkBox>
                    </Box>
                  </Box>
                </AccordionPanel>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </AccordionItem>
      </Accordion>
    </Box>
    </ChakraProvider>
  )
}

export default Home