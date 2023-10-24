import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { SamplesTable } from 'src/sections/samples/samples-table';
import { useRouter } from 'next/router';
 


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

const Page = () => {
    const router = useRouter()
    const id = router.query.id //as string

    return (
    <>
        <Head>
        <title>
            Project {id} | ZooProcess
        </title>
        </Head>
        <Box
        component="main"
        sx={{
            flexGrow: 1,
            py: 8
        }}
        >
        <Container maxWidth="1400px" >
            <Stack spacing={3}>
            <Typography variant="h4">
              Project {id} -- projects/[id].js
            </Typography>
            <SamplesTable project={id} samples={samples}/>
            </Stack>
        </Container>
        </Box>
    </>
    );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
