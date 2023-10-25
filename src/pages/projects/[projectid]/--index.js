import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { SamplesTable } from 'src/sections/samples/samples-table';
 


var samples = [
    {
      id:1,
      name:"Sample 1"
    },
    {
      id:2,
      name:"Sample 2"
    }
  ]
  var id_samples = samples.length

const Page = () => (
  <>
    <Head>
      <title>
        Projects | ZooProcess
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Samples
          </Typography>
          <SamplesTable samples={samples}/>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
