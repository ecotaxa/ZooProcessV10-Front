import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { SamplesTable } from 'src/sections/samples/samples-table';
import { useRouter } from 'next/router';
import { SubSamplesTable } from '../../../../sections/sub-samples/sub-samples-table';
 


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
  // var id_samples = samples.length

const Page = () => {
    const router = useRouter()
    const projectid = router.query.id //as string
    const sampleid = router.query.sampleid //as string

    return (
    <>
        <Head>
        <title>
            Project {sampleid} | ZooProcess
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
              Sample {sampleid} -- projects/[id={projectid}]/samples/[id]
            </Typography>
            <SubSamplesTable project={projectid} sample={sampleid} subsamples={samples}/>
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
