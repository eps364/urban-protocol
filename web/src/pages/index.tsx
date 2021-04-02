import React from 'react';
import { NextPage } from 'next';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <p>Sistema de abertura e acompanhamento de protocolo.</p>

      <Box my={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Abrir Protocolo
        </Typography>
        <Button color="primary">
          <Link href="/protocol" color="primary">
            Gostaria de abrir um protocolo, clique aqui!
          </Link>
        </Button>
      </Box>

      <Box my={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Consultar Protocolo
        </Typography>
        <Link color="primary" href="#contained-buttons">
          <a>Gostaria de consultar um protocolo, consulte aqui!</a>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
