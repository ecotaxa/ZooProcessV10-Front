import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';


const Page = () => {
    const router = useRouter()
    const projectid = router.query.projectid //as string
    const sampleid = router.query.sampleid //as string
    const subsampleid = router.query.subsampleid //as string


    return (
        <>
            <Head>
            <title>
                Sub-Samples {subsampleid} | ZooProcess
            </title>
            </Head>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
                <Typography>
                    Sub-Samples {projectid}/{sampleid}/{subsampleid}
                </Typography>
            </Box>
        </>
    )

}

Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default Page;
  