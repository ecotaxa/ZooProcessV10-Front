import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProjectsTable } from 'src/sections/projects/projects-table';
import { MyForm } from 'src/components/myForm';
import { inputFormElements } from 'src/services/formElements';
import { useState } from 'react';
import { useRouter } from 'next/router';
 




const testData = {
    "sample_id": "b",
    "scientific_program": "dyfamed_wp2_2023_biotom_sn001",
    "latitude_ns": 1,
    "station_id": "dyfamed",
    "bottom_depth": "2400",
    "sampling_date": "2022-11-13T00:13:40.000Z",
    "sampling_date": "2023-10-09T09:13:40.000Z",
    "Latitude_degree": "43",
    "longitude_degree": "7",
    "latitude_minute": "25",
    "longitude_minute": "51",
    "longitude_ew": 1,
    "tow_type": "1",
    "net_sampling_type": "WP2",
    "net_mesh": "200",
    "net_opening_surface": "0.25",
    "minimum_depth": "1",
    "maximum_depth": "1",
    "quality_flag_for_depth_measurement": "2",
    "ship_speed": "99999",
    "cable_speed": "99999",
    "cable_length": "99999",
    "cable_angle_from_vertical": "45",
    "sampling_duration": "5"
}

const forms = [
    // sampleid_formElements, 
    inputFormElements, 
    // inputFormElements_tow_type_vertical, 
    // fraction_inputFormElments
]


const Page = () => {

    const router = useRouter()

    
    const form = []
        form['forms']=forms
        form['value']=testData
        form['title']='Sample metadata'
        form['subtitle']='Fill all the mandatory fields.'



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
