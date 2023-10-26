import Head from 'next/head';
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';


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
                    Sub-Samples {subsampleid}
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
  