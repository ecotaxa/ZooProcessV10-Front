import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProjectsTable } from 'src/sections/projects/projects-table';
import { MyForm } from 'src/components/myForm';
import { inputFormElements } from 'src/services/formElements';
import { useState } from 'react';
import { scannerForm } from '../../services/formElements';
 




const testData = {
    "instrument": "Zooscan",
    "serial": "sn01",
    "optical_density_xposition": 0.340,
    "optical_density_yposition": 4.040,
    "xoffset_large":5247,
    "yoffset_large":4016,
    "xsize_large":30000,
    "ysize_large":50000
}


const Page = () => {

    const form = []
        form['forms']=scannerForm
        form['value']=testData
        form['title']='Scanner'
        form['subtitle']=''



    // const [stringifiedData,setData] = useState(JSON.stringify(testData, null, 2))
    const [stringifiedData,setData] = useState("")
    // var stringifiedData = "" ;


    const onChange = (value) => {
        console.log("App onChange:", value)
        // const stringifiedData = useMemo(() => JSON.stringify(value, null, 2), [value]);
        // stringifiedData = JSON.stringify(value, null, 2);
        setData(JSON.stringify(value, null, 2))
        console.log("App onChange:", stringifiedData)
    }

    return (
        <>
        <Head>
            <title>
            Scanner | ZooProcess
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
                Scanner
                </Typography>
                <MyForm {...form} onChange={onChange}/>
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
