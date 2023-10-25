import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid"
import { useState } from "react";
// import routeTo from "../services/routeTo";
import { useRouter } from 'next/router'


export function SamplesTable(props) {
    const {project,samples=[]} = props
    const apiRef = useGridApiRef();
    const router = useRouter()

    let headers=[
        { field: 'id', headerName: 'ID', type: 'number', headerAlign: 'left', width: 70 },
        { field: 'name', headerName: 'Name', type: 'string', headerAlign: 'left', width: 360 },

        // {field: 'expiration_date', headerName: 'Expiration date', type: 'dateTime',headerAlign: 'left', width: 220 },
        { 
            field: 'Action',
            headerName: 'Action',
            headerAlign: 'left',
            width: 100,
            renderCell: (params) => {
                return (
                    <div>
                        <Button 
                            data-testid="action_btn"
                            variant="contained" 
                            size="small" 
                            color="primary" 
                            disableRipple
                            onClick={() => 
                                router.push({
                                    pathname: '/projects/[projectId]/samples/[sampleId]',
                                    query: { 
                                        projectId: project, 
                                        sampleId: params.id },                                         
                                })
                            }
                        >
                            Details
                        </Button>
                    </div>
                )
            },
        },
    ]

    const [rows, setRows] = useState(samples)

    return (
        // <Card>
        //     <CardActions sx={{ justifyContent: 'flex-end' }}>
        //         <Button>Add new sample</Button>
        //     </CardActions>
        //     <Divider/>
        //     <CardContent>
        //     <Typography variant="h5">
        //       Project {project}
        //     </Typography>
            <DataGrid      
                // style={{height: '100%', width: '100%'}} 
                autoHeight 
                // pageSize={5} 
                // checkboxSelection={false} 
                // hideFooterSelectedRowCount

                data-testid="projectlist"
                apiRef={apiRef}
                rows={rows} 
                columns={headers}
                // onRowClick={(event)=>handleEvent(event)}
                onRow
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
        //     </CardContent>
        // </Card>
    )

}