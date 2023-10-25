import Head from 'next/head';
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProjectsTable } from 'src/sections/projects/projects-table';
import { useRouter } from 'next/router';
// import { DashboardLayout } from '../../layouts/dashboard/layout';

// import { ProjectsTable } from '../../sections/projects/projects-table';
 

const projects = [
    {
      id:1,
      drive:'Tara',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
      qcState:''
    },
    {
      id:2,
      drive:'LOV',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },
    {
      id:4,
      drive:'Archive LOV',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },
    {
      id:5,
      drive:'Archive Tara',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },    {
      id:6,
      drive:'LOV',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },
    {
      id:3,
      drive:'Archive LOV',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },
    {
      id:7,
      drive:'Archive LOV',
      name:"zooscan_sn201_exports02_filtered",
      sample:63,
      scan:120,
      updateAt:1554670800000,
      createdAt: 1554670800000,
    },
  ]


const Page = () => {

// function Page() {
  const router = useRouter()

  const handleNewProjectBtn = () => {
    router.push({
      pathname: '/projects/new',
      // query: { pid: params.id },                                         
    })
  }

  return (
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
                Projects index
              </Typography>
              <Card 
                  data-testid="projectCard" 
                  sx={{ width:'100%' }}
                >
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button onClick={handleNewProjectBtn}>Add new project</Button>
                </CardActions>
                <Divider/>
                <CardContent >
                  <ProjectsTable projects={projects}/>
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
