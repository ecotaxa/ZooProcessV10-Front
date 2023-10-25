import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProjectsTable } from 'src/sections/projects/projects-table';
import { MyForm } from 'src/components/myForm';
import { inputFormElements } from 'src/services/formElements';
import { useState } from 'react';
import { projectForm } from '../../services/formElements';
import { useRouter } from 'next/router';
 




const testData = {
    "project_id": null,
    "name": "Zooscan_",
    "thematic": null,
    "acronym": "acronym",
    "description": "dyfamed",
    "ecotaxa_project_title":"ecotaxa_project_title",
    "ecotaxa_project":1234
}


const Page = () => {
    const router = useRouter()
    
    const form = []
        form['forms']=projectForm
        form['value']=testData
        form['title']='New Project'
        form['subtitle']='Fill metadata about your new project'



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

    const onCancel = () => {
        router.push({
            pathname: '/projects/',
            // query: { pid: params.id },                                         
        })
    }

    return (
        <>
        <Head>
            <title>
            Metadata | ZooProcess
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
                Metadata
                </Typography>
                <MyForm {...form} onChange={onChange} onCancel={onCancel}/>
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
