import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Badge, Box, ChakraProvider, Heading, Image, LinkBox, LinkOverlay, Stat, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { AddIcon, StarIcon } from '@chakra-ui/icons'

function Home({ Component, pageProps }) {

    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }

  return (
    <ChakraProvider>
      <Wrap>
        <WrapItem>
          <Avatar size='xl' name='Logo' src='https://raichu-uploads.s3.amazonaws.com/logo_americanas-com-loja-online_wPPyZK.png' />{' '}
          <Text fontSize='3xl'>Americanas - Loja Online</Text>
        </WrapItem>
      </Wrap>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Accordion defaultIndex={[0]} allowMultiple>
        
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Box position="fixed">
            <Stat>
              <Image src=""/>
              <StatLabel>Sent</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>
            <Box display="flex">
              <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                  13 days ago
                </Box>
                <Heading size='md' my='2'>
                  <LinkOverlay href='#'>
                    New Year, New Beginnings: Smashing Workshops & Audits
                  </LinkOverlay>
                </Heading>
                <Text>
                  Catch up on what’s been cookin’ at Smashing and explore some of the most
                  popular community resources.
                </Text>
              </LinkBox>
              <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                  13 days ago
                </Box>
                <Heading size='md' my='2'>
                  <LinkOverlay href='#'>
                    New Year, New Beginnings: Smashing Workshops & Audits
                  </LinkOverlay>
                </Heading>
                <Text>
                  Catch up on what’s been cookin’ at Smashing and explore some of the most
                  popular community resources.
                </Text>
              </LinkBox>
            </Box>
          </Box>
          <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
    </ChakraProvider>
  )
}

export default Home