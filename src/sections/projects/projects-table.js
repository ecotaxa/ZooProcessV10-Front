import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid"
import { useState } from "react";
// import routeTo from "../services/routeTo";
import { useRouter } from 'next/router'
import { format } from 'date-fns';


export function ProjectsTable(props) {
    const {projects=[]} = props
    const apiRef = useGridApiRef();
    const router = useRouter()

    let headers=[
        { field: 'id', headerName: 'ID', type: 'number', headerAlign: 'right', width: 50 },
        { field: 'drive', headerName: 'Drive', type: 'string', headerAlign: 'left', width: 150},
        { field: 'name', headerName: 'Name', type: 'string', headerAlign: 'left', width: 360 },
        { field: 'sample', headerName: 'Sample', type: 'number', headerAlign: 'left', width: 90},
        { field: 'scan', headerName: 'Scan', type: 'number', headerAlign: 'left', width: 50},
        { field: 'createdAt', headerName: 'Created', type: 'dateTime', headerAlign: 'left', width: 200,
                valueFormatter: params => new Date(params?.value).toLocaleString()
        },
        { field: 'updateAt', headerName: 'Updated', type: 'dateTime',headerAlign: 'left', width: 220, 
            // valueGetter: (date) => {format(date, 'dd/MM/yyyy')},
            valueFormatter: params => new Date(params?.value).toLocaleString()
        },
        { 
            field: 'Action',
            headerName: 'Detail',
            headerAlign: 'left',
            width: 100,
            renderCell: (params) => {
                return (
                    <div>
                        <Button 
                            data-testid="action_btn"
                            variant="contained" size="small" color="primary" disableRipple
                            onClick={() => 
                                router.push({
                                    pathname: '/projects/[pid]',
                                    query: { pid: params.id },                                         
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

    const [rows, setRows] = useState(projects)

    return (
        // <Card sx={{ width:'90%' }}>
        //     <CardActions sx={{ justifyContent: 'flex-end' }}>
                //         <Button>Add new project</Button>
            //     </CardActions>
            //     <Divider/>
            //     <CardContent>
            <DataGrid      
                sx={{ width:'100%' }} // width fonctionne
                // style={{height: '100%', width: '100%'}} // width fonctionne height non
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