import Head from 'next/head';
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Stack, Typography } from '@mui/material';

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
    const projectid = router.query.projectid //as string

    const handleNewProjectBtn = () => {
      router.push({
        pathname: '/projects/[projectid]/samples/new',
        query: { projectid: projectid },                                         
      })
    }

    return (
    <>
        <Head>
        <title>
            Info Project {projectid} | ZooProcess
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
                Project {projectid} -- projects/[id].js
              </Typography>
              <Card data-testid="projectCard" sx={{ width:'100%' }}>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button onClick={handleNewProjectBtn}>Add new sample</Button>
                  </CardActions>
                  <Divider/>
                  <CardContent >
                    <SamplesTable project={projectid} samples={samples}/>
                  </CardContent>
              </Card>
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
