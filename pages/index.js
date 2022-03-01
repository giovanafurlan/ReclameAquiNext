import { Avatar, Box, Button, ChakraProvider, Image, Input, Link, LinkBox, Progress, Stack, Stat, StatArrow,StatNumber, Text } from '@chakra-ui/react'
import { ChatIcon, CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

function Home() {

  const driver={
        imageUrl: 'https://cdn.picpng.com/medal/medal-web-31797.png',
        imageAlt: 'Logo',
        logoURL: 'https://raichu-uploads.s3.amazonaws.com/company_142ed4d8-665f-4124-b401-796783e932a7.png',
        nomeLogo: 'Americanas Marketplace',

        URL: 'https://www.reclameaqui.com.br/empresa/americanas-com-loja-online/',
        ra_descricao: 'A Americanas é uma das maiores varejistas do Brasil e, no Marketplace, comercializa em sua loja online, itens de empresas parceiras.',
        score: '8.7/10',
        periodo: '01/08/2021 - 31/01/2022',
        reclamacoes: '3000',
        respondidas: '3001',
        porc_respondidas: '98.9',
        porc_negocio: '81',
        porc_solucao: '91.6',
        porc_nota: '7.95',
        nao_respondidas: '280',
        avaliadas: '14878',
  }

  function Buscar(){

  }

  return (
    <ChakraProvider>
      <Box borderWidth='1px' borderRadius='lg' overflow='hidden' m="2vw">
        <Box flex='1' textAlign='left' fontWeight={600} fontSize="20px" m="1vw">
          <Text>Reclame Aqui</Text>
          <Box display="flex">
            <Input
              value={driver.URL}
              placeholder='Here is a sample placeholder'
              size='md'/>
              <Button
              colorScheme='green'
              type='submit'
              ml="1vw"
              onClick={Buscar()}
            >
              Buscar
            </Button>
          </Box>
        </Box>
          <Box flex='1' textAlign='left' fontWeight={600} fontSize="20px" m="1vw" mt="3vw">
                  Reputação
          </Box>
            <Box ml="1vw" mt="1vw" display="flex">
                <Avatar name='Logo' size="lg" src={driver.logoURL} />
                <Box flexDirection="column" ml="1vw">
                  <Link fontSize='lg' fontWeight={600} href={driver.URL} target="_blank">{driver.nomeLogo}</Link>
                  <Text fontSize='md' fontWeight={600}>Sobre</Text>
                  <Text fontSize='md' mb="1vw">{driver.ra_descricao}</Text>
                </Box>
              </Box>
              <Box>
                <Stat backgroundColor="#def0d2" p="10px">
                  <StatNumber ml="2vw">{driver.score}</StatNumber>
                    <StatArrow type='increase' ml="2vw"/>
                          {driver.periodo}
                </Stat>
                <Box display="flex" p="10px" justifyContent="space-around">
                <LinkBox as='article'  w='xs' p='4' borderWidth='1px' rounded='md' textAlign="center">
                  <Box fontSize="18px">
                    Reclamações
                  </Box>
                  <Text fontWeight="600">
                  <ChatIcon mr="15px"/>
                    {driver.reclamacoes}
                  </Text>
                </LinkBox>
                <LinkBox as='article' w='xs' p='4' borderWidth='1px' rounded='md' textAlign="center">
                  <Box fontSize="18px">
                    Respondidas
                  </Box>
                  <Text fontWeight="600">
                    <CheckCircleIcon mr="15px"/>
                    {driver.respondidas}
                  </Text>
                </LinkBox>
              </Box>
              <Stack m="2vw" w="75vw" >
                <Text fontSize='lg'>Reclamações respondidas</Text>
                <Progress colorScheme='green' size='lg' value={driver.porc_respondidas} borderRadius={40}/>
                <Text fontSize='lg' fontWeight={600}>98.9%</Text>
              </Stack>
              <Stack m="2vw" w="75vw">
                <Text fontSize='lg'>Voltariam a fazer negócio</Text>
                <Progress colorScheme='green' size='lg' value={driver.porc_negocio} float="left" borderRadius={40}/>
                <Text fontSize='lg' fontWeight={600}>81%</Text>
              </Stack>
              <Stack m="2vw" w="75vw">
                <Text fontSize='lg'>Índice de solução</Text>
                <Progress colorScheme='green' size='lg' value={driver.porc_solucao} float="left" borderRadius={40}/>
                <Text fontSize='lg' fontWeight={600}>91.6%</Text>
              </Stack>
              <Stack m="2vw" w="75vw">
                <Text fontSize='lg'>Nota do consumidor</Text>
                <Progress colorScheme='green' size='lg' value={driver.porc_nota} float="left" borderRadius={40}/>
                <Text fontSize='lg' fontWeight={600}>7.95</Text>
              </Stack>
              <Box display="flex" p="10px" textAlign="center" justifyContent="space-around">
                <LinkBox as='article' w='xs' p='4' borderWidth='1px' rounded='md'>
                  <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC' fontSize="18px" textAlign="center">
                    Não Respondidas
                  </Box>
                  <Text fontWeight="600">
                  <CloseIcon mr="15px"/>
                    280
                  </Text>
                  <Stack alignItems="center">
                    <Progress colorScheme='green' size='lg' value={driver.nao_respondidas} borderRadius={40} w="20"/>
                  </Stack>
                </LinkBox>
                <LinkBox as='article' w='xs' p='4' rounded='md' borderWidth='1px' rounded='md'>
                  <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC' fontSize="18px">
                    Avaliadas
                  </Box>
                  <Text fontWeight="600">
                    <CheckCircleIcon mr="15px"/>
                    14878
                  </Text>
                  <Stack alignItems="center">
                    <Progress colorScheme='green' size='lg' value={driver.avaliadas} borderRadius={40} w="20"/>
                  </Stack>
                </LinkBox>
              </Box>
            </Box>
          </Box>
        </ChakraProvider>
  )
}

export default Home