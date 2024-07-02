import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Link } from '@chakra-ui/react';

// 👨🏽‍💻 Article Component: we use Chakra UI to create a card composition
//  and consume the article keys we brought from the App.jsx and the global state.

const ArticleComponent = ({ article }) => {
  return (
    <div className='articleCardClass'>
      {/* we define card component */}
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        className='articleCard'
        boxShadow='xl'
      >
        {/* 🧷 Images container */}
        <div className='img-cntr'>
        <div className='imageContainer'>
        <Link href={article.url} isExternal>
          <Image
            objectFit='cover'
            w='100%'
            h='100%'
            src={article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/800x400'}
            alt='Article Image'
            className='hoverImage'
          />
        </Link>
        </div>
        </div>
        
        {/* 🪐 Card information */}
        <Stack>
          <CardBody>
            {/* ⚓ Card header */}
            <Heading size='md'>{article.title}</Heading>
            <div>
              <h5>{article.author}</h5>
              <h4><b>/</b></h4>
              <h5>{article.publishedAt}</h5>
            </div>
        {/* ⚓ Card body */}
            <Text py='2'>
              {article.description}
            </Text>
          </CardBody>
          
          {/* 🪑 Card footer */}
          <CardFooter justifyContent='center' textAlign='center'>
            <Link href={article.url} isExternal>
              <Button variant='solid' colorScheme='blue'>
                View Article 🔍
              </Button>
            </Link>
          </CardFooter>

        </Stack>
      </Card>
    </div>
  );
}

export default ArticleComponent;
