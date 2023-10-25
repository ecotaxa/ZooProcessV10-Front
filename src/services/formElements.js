
export const sampleid_formElements=[
{
    title:"Sample ID",
    section:
    [
        { tag:"TextField", name:"project", 
        placeholder:"Project", label:'Project',
            variant:"outlined", disabled:true, 
            xs:12, sm:12, size:"regular", fullWidth:true,
            value:'dyfamed_wp2_2023_biotom_sn001'
        },
        { tag:"TextField", name:"sample_id", type:"text",
            placeholder:"Enter Sample ID, (no extension or space character allowed)", label:'Sample ID',
            variant:"outlined", required:true, 
            xs:12, sm:12, size:"regular", fullWidth:true,
            helperText:"no extension or space character allowed",
            regex:"^[a-zA-Z0-9_]+$", error:true
        }
    ]
}
]

export const inputFormElements=[
{
    title:"Scientific Program",
    section:
    [
        { tag:"TextField", name:"scientific_program", type:"text",
            placeholder:"Scientific Program", label:'Scientific Program',
            variant:"outlined", required:true, 
            xs:12, sm:12, fullWidth:true, size:"regular",
            minLength:3
        },
        { tag:"TextField", name:"station_id", type:"text",
            placeholder:"Station Id", label:'Station Id',
            variant:"outlined", required:true, 
            xs:12, sm:12, fullWidth:true,
            minLength:3
        },
        { tag:"TextField", name:"bottom_depth", type:"number", 
            placeholder:"Bottom depth (m)", label:'Bottom depth',
            variant:"outlined", required:true, 
            xs:12, sm:6, fullWidth:true,
            minValue:0, helperText:'value greather than zero',
            endAdornment:{pos:'end', text:'m'},
        },
        { tag:"DateField", name:"sampling_date", type:"date", 
            placeholder:"Enter Sampling Date", label:'Sampling Date', 
            variant:"outlined", shrink: true, required:true,
            fullWidth:true, xs:12, sm:6
        }
    ]
},
{
    title:"Latitude & Longitude",
    section:[ 

    { tag:"TextField",name:"Latitude_degree", type:"number", 
        placeholder:"Enter Latitude (degree)", label:'Latitude (degree)',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:4.5,
        minValue:0,maxValue:90, 
        endAdornment:{pos:'end', text:'deg'},
        helperText:"de 0 à 90°"
    },
    { tag:"TextField",name:"latitude_minute", type:"number",
        placeholder:"Enter Latitude (minute)", label:'Latitude (minute',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:4.5,
        minValue:0,maxValue:60, helperText:"de 0 à 59",
        endAdornment:{pos:'end', text:'min'}
    },
    { tag:"Select",name:"latitude_ns", type:"select", 
        placeholder:"N/S", label:'Latitude (N/S)',
        variant:"outlined",  required:true,
        fullWidth:true, xs:12, sm:3, sx:{m:0,minWith:150},
        choice:[
            {id:1,value:"North"},
            {id:2,value:"South"}
        ]
    },
    { tag:"TextField",name:"longitude_degree", type:"number", 
        placeholder:"Enter Longitude (degree)", label:'Longitude (degree)',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:4.5,
        minValue:0,maxValue:180, helperText:"de 0 à 180°",
        endAdornment:{pos:'end', text:'°'}
    },
    { tag:"TextField",name:"longitude_minute", type:"number", 
        placeholder:"Enter Longitude (minute)" , label:'Longitude (minute)',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:4.5,
        minValue:0,maxValue:59.999999, helperText:"de 0 à 59",
        endAdornment:{pos:'end', text:"'"},
        // value:59
    },
    { tag:"Select",name:"longitude_ew", type:"select", 
        placeholder:"E/O", label:'Longitude (N/S)',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:3, sx:{m:0,minWith:150},
        choice:[
            {id:1,value:"East"},
            {id:2,value:"West"}
        ]
    },
]
},
{
    title:"Tow / Net",
    section:[ 
        { tag:"Select", name:"tow_type", type:"select", 
            placeholder:"Choose Tow type", label:'Tow type',
            variant:"outlined", required:true, 
            fullWidth:true, xs:12, sm:12, sx:{m:0,minWith:150},
            choice:[
                {id:1,value:"Oblique"},
                {id:2,value:"Horizontal"},
                {id:3,value:"Vertical"},
                {id:0, value:"Other sampling method"}
            ]
        },
        { tag:"TextField", name:"net_sampling_type", 
            placeholder:"WP2, JB, Regent, Omori, Multinet...", label:'Net sampling type',
            variant:"outlined", fullWidth:true, required:true, 
            xs:12, sm:12
        },
        { tag:"TextField", name:"net_mesh", type:"number", 
            placeholder:"Enter Net mesh (µm)", label:'Net mesh',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:12,
            endAdornment:{pos:'end', text:'µm'},
            minValue:0, helperText:'value greather than zero',
        },
        { tag:"TextField", name:"net_opening_surface", type:"number", 
            placeholder:"Enter Net opening surface (m²)", label:'Net opening surface',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:12, 
            endAdornment:{pos:'end', text:'m²'},
            minValue:0, helperText:'value greather than zero',
        },
    ]
},
{
    title:"Measurement",
    section:[ 
        { tag:"TextField", name:"maximum_depth", type:"number", 
            placeholder:"Enter Maximun depth (m)", label:'Maximun depth',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:6, 
            endAdornment:{pos:'end', text:'m'},
            minValue:0, helperText:'value greather than zero',
        },
        { tag:"TextField", name:"minimum_depth", type:"number", 
            placeholder:"Enter Minimum depth (m)", label:'Minimum depth',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:6, 
            endAdornment:{pos:'end', text:'m'},
            minValue:0, helperText:'value greather than zero',
        },
        { tag:"Select", type:'select', name:"quality_flag_for_depth_measurement", 
            placeholder:"Choose Quality depth measurement", label:'Quality flag for depth measurement of the net',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:12,
            choice:[
                {id:1, value:"MEASURED by a depth sensor"},
                {id:2, value:"CALCULATED from cable length and angle"},
                {id:3, value:"ESTIMATED from cable length"}
            ]
        },
        { tag:"TextField", name:"ship_speed", type:"number", 
            placeholder:"Enter Ship speed (knots) - 9999 if not documented", label:'Ship Speed',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:6, 
            endAdornment:{pos:'end', text:'knots'},
            minValue:0, helperText:'value greather than zero'
        },
        { tag:"TextField", name:"cable_speed", type:"number", 
            placeholder:"Enter Net sampling type - 9999 if not documented", label:'Cable speed',
            variant:"outlined", required:true, 
            xs:12, sm:6, fullWidth:true,
            endAdornment:{pos:'end', text:'m/s'},
            minValue:0, helperText:'value greather than or equal to zero'
        },
        { tag:"TextField", name:"cable_angle_from_vertical", type:"number", 
            placeholder:"Enter Net sampling type - 9999 if not documented", label:'Cable angle from verticale',
            variant:"outlined", fullWidth:true, required:true,
            xs:12, sm:6,
            minValue:0, helperText:'value greather than zero',
        },
        { tag:"TextField", name:"cable_length",  type:"number", 
            placeholder:"Enter cable length - 9999 if not documented", label:'Cable length',
            variant:"outlined", fullWidth:true, required:true, xs:12, sm:6, 
            endAdornment:{pos:'end', text:'m'},
            minValue:0, helperText:'value greather than zero',
        },
        { tag:"TextField", name:"sampling_duration", type:"number", 
            placeholder:"Enter sampling duration (minutes) - 9999 if not documented", label:'Sampling duration',
            variant:"outlined", required:true, 
            xs:12, sm:12, fullWidth:true,
            endAdornment:{pos:'end', text:'min'},
            minValue:0, helperText:'value greather than zero',
        }   
    ]
}
]

export const inputFormElements_tow_type_vertical=[
{
    title:"The tow type",
    subTiltle:'The towtype is "Vertical". The starting latitude and longitude are utilised.',
    section:
    [
    { tag:"TextField", name:"ending_latitude_degree", type:"number", 
        placeholder:"Enter Ending Latitude (degree)", label:'Latitude (degree)',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:4.5,
        minValue:0, maxValue:90, helperText:"de 0 à 90°",
        endAdornment:{pos:'end', text:'deg'},
    },
    { tag:"TextField", name:"ending_latitude_minute", type:"number",
        placeholder:"Enter Ending Latitude (minute)", label:'Latitude (minute',
        variant:"outlined", required:true, 
        xs:12, sm:4.5, fullWidth:true,
        minValue:0, maxValue:60, helperText:"de 0 à 60",
        endAdornment:{pos:'end', text:'min'}
    },
    { tag:"Select", name:"ending_latitude_ns", type:"select", 
        placeholder:"N/S", label:'Latitude (N/S)',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:3, sx:{m:0,minWith:150},
        choice:[
            {id:1,value:"North"},
            {id:2,value:"South"}
        ]
    },
    { tag:"TextField", name:"ending_longitude_degree", type:"number", 
        placeholder:"Enter Ending Longitude (degree)", label:'Longitude (degree)',
        variant:"outlined", required:true, 
        xs:12, sm:4.5, fullWidth:true, 
        minValue:0, maxValue:180, helperText:"de 0 à 180°",
        endAdornment:{pos:'end', text:'°'}
    },
    { tag:"TextField", name:"ending_longitude_minute", type:"number", 
        placeholder:"Enter Ending Longitude (minute", label:'Longitude (minute',
        variant:"outlined", required:true, 
        xs:12, sm:4.5, fullWidth:true, 
        minValue:0, maxValue:180, helperText:"de 0 à 180°",
        endAdornment:{pos:'end', text:'°'}
    },
    { tag:"Select", name:"ending_longitude_ew", type:"select", 
        placeholder:"E/O", label:'Longitude (N/S)',
        variant:"outlined", required:true, 
        xs:12, sm:3, sx:{m:0,minWith:150}, fullWidth:true,
        choice:[
            {id:1,value:"East"},
            {id:2,value:"West"}
        ]
    },
    ]
},
{
    title:"Ship",
    section:
    [
    { tag:"TextField", name:"ship", 
        placeholder:"Ship Name", label:'Ship',
        variant:"outlined", required:true, 
        xs:12, sm:12, size:"regular", fullWidth:true,
    },
    { tag:"TextField", name:"ctd_reference", 
        placeholder:"CTD reference (filename)", label:'CTD reference',
        variant:"outlined", required:true, 
        xs:12, sm:12, fullWidth:true
    },
]
},
{
    title:"Sample",
    section:
    [
    { tag:"TextField", name:"number_of_tow", type:"number", 
        placeholder:"Number of tow in the same sample", label:'Number of tow in the same sample',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6,
        minValue:0, helperText:'value greather than zero'
    },
    { tag:"TextField", name:"filtered_volume", type:"number", 
        placeholder:"Total filtered volume (m3). (sum of the nets). 99999 if unknown)", label:'Total filtered',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6,
        endAdornment:{pos:'end', text:'m3'},
        minValue:0, helperText:'value greather than zero',
    },
    { tag:"Select", name:"quality_flag_filtered_volume", type:"select", 
        placeholder:"Quality Flag of the filtered volume of the net", label:'Quality Flag of the filtered volume of the net',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12, sx:{m:0, minWith:300},
        choice:[
            {id:1, value:"RECORDED volume (flowmeter)"},
            {id:2, value:"West"}
        ]
    },
    { tag:"TextField", name:"sample_comment", type:"text", 
        placeholder:"Add sample comment", label:'Add sample comment',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:12
    },

    { tag:"TextField", name:"number_of_jars", type:"number", 
        placeholder:"Nb of jars for the sample, 9999 if not documented", label:'Nb of jars for the sample, 9999 if not documented',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12,
        minValue:0, helperText:'value greather than zero',
    },
    { tag:"TextField", name:"barcode", type:"number", placeholder:"Barcode", label:'Barcode',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { tag:"TextField", name:"other_reference", type:"text", placeholder:"Other reference (NaN if non applicable)", label:'Other reference',
        variant:"outlined", fullWidth:true, required:false, xs:12, sm:6
    },

    { label:'JAR airtighness',
        name:"jar_airtighness", placeholder:"JAR airtighness",
        tag:"Select",  type:"select", 
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12, sx:{m:0, minWith:300},
        choice:[
            {id:1, value:"JAR airtighness OK"},
            {id:2, value:"JAR airtighness NOK"},
        ]
    },
    { tag:"Select", name:"sample_richness", type:"select", 
        placeholder:"Sample richness", label:'Sample richness',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12, sx:{m:0, minWith:300},
        choice:[
            {id:1, value:"NORMAL richness"},
            {id:2, value:"VERY RICH sample"},
            {id:2, value:"NO PLANKTON (almost) in sample"}
        ]
    },
    { tag:"Select", name:"sample_conditioning", type:"select", 
        placeholder:"Sample conditioning", label:'Sample conditioning',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12, sx:{m:0, minWith:300},
        choice:[
            {id:1, value:"GOOD conditionning"},
            {id:2, value:"DRYED (no remaining liquid)"},
            {id:2, value:"ROTTEN (loss of fixative)"}
        ]
    },
    { tag:"Select", name:"sample_content", type:"select", 
        placeholder:"Sample content", label:'Sample content',
        variant:"outlined", fullWidth:true, required:true, 
        xs:12, sm:12, sx:{m:0, minWith:300},
        choice:[
            {id:1, value:"NO disturbing elements"},
            {id:2, value:"ONE or FEW very large objects present in the jar"},
            {id:3, value:"SOUP (phytoplankton - organic matter - clay/mud/mineral)"}
        ]
    },
    ]
}
]

export const fraction_inputFormElments=[
{
    title:"Fraction",
    section:
    [

    { tag:"TextField", name:"scan_id", type:"text", placeholder:"Scan ID", label:'Scan ID',
        variant:"outlined", disabled:true,
        xs:12, sm:6, fullWidth:true, value:1
    },
    { tag:"TextField", name:"fraction_id", type:"text", 
        placeholder:"Fraction ID", label:'Fraction ID',
        variant:"outlined", required:false, disabled:true,
        xs:12, sm:6, fullWidth:true, value:1
    },

    { tag:"TextField", name:"fraction_min_mesh", type:"number", 
        placeholder:"Fraction min mesh (um)", label:'min mesh',
        variant:"outlined", required:true, 
        xs:12, sm:6, fullWidth:true,
        endAdornment:{pos:'end', text:'µm'},
        minValue:0, helperText:'value greather than or equal to zero'
    },
    { tag:"TextField", name:"fraction_max_mesh", type:"number", 
        placeholder:"Fraction max mesh (um)", label:'max mesh',
        variant:"outlined", required:true,
        xs:12, sm:6, fullWidth:true,
        endAdornment:{pos:'end', text:'µm'},
        minValue:0, helperText:'value greather than or equal to zero'
    },
    { tag:"TextField", name:"other_reference", type:"number", 
        placeholder:"Fraction spliting ratio x (1/x)", label:'Spliting ratio',
        variant:"outlined", required:true, 
        xs:12, sm:12, fullWidth:true,
        endAdornment:{pos:'end', text:'1/x'},
        minValue:0, helperText:'value greather than or equal to zero'
    },    
    { tag:"TextField", name:"other_reference", type:"text", 
        placeholder:"Remark on fraction (no special char !)", label:'Remark on fraction',
        variant:"outlined", required:true, 
        xs:12, sm:6, fullWidth:true,
        helperText:"no special char !",
        regex:"^[a-zA-Z0-9_ %&°]+$", error:true
    },
    { tag:"TextField", name:"submethod", type:"text", 
        placeholder:"SubMethod", label:'SubMethod',
        variant:"outlined", required:true, 
        xs:12, sm:6, fullWidth:true
    },

    { tag:"TextField", name:"scanning_operator", type:"text", 
        placeholder:"Scanning operator", label:'Scanning operator',
        variant:"outlined", required:true, 
        xs:12, sm:12, fullWidth:true
    },
    ]
}
]



export const userFormElements=[

    { name:"firstname", placeholder:"Enter first name", label:'First Name',
        variant:"outlined", fullWidth:true, required:false, xs:12, sm:6, size:"small"
    },
    { name:"lastname", placeholder:"Enter last name", label:'Last Name',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"email", type:"email", placeholder:"Enter email", label:'Email',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"phone", type:"number", placeholder:"Enter phone number", label:'Phone',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"street", placeholder:"Enter street", label:'Street',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"city", placeholder:"Enter City", label:'City',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"state", placeholder:"Enter State", label:'State',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"country", placeholder:"Enter Country name", label:'Country',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:6
    },
    { name:"pincode", type:"number", placeholder:"Enter pincode number", label:'Pincode',
        variant:"outlined", fullWidth:true, required:true, xs:12, sm:12
    },

]


export const projectElements= [
    {
        title:"Project Metadata",
        section:
        [
            { name:"name", placeholder:"Project name", label:'Project Name',
            tag:"TextField", type:"text",
            variant:"outlined", fullWidth:true, required:true, 
            minLength:"zooscan_".length,
            xs:12, sm:6, size:"small"
            },
            { name:"thematic", placeholder:"Project thematic (tara, archives_lov, ...)", label:'Project Thematic',
            tag:"Select",  type:"select", 
            variant:"outlined", fullWidth:true, required:true, 
            xs:12, sm:6, size:"small",
            choice:[
                {id:1, value:"archives_lov"},
                {id:2, value:"archives_monitoring"},
                {id:3, value:"archives_tara"},
                {id:4, value:"lov"},
                {id:5, value:"microplastik"},
                {id:6, value:"monitoring"},
                {id:7, value:"tara"},
            ]
            },
            { name:"acronym", placeholder:"Project acronym (a quick name for you)", label:'Project Acronym',
            tag:"TextField", type:"text",
            variant:"outlined", fullWidth:true, required:true, 
            xs:12, sm:6, size:"small"
            },
            { name:"description", placeholder:"Project description", label:'Project description',
            tag:"TextArea", type:"text",
            variant:"outlined", fullWidth:true, 
            required:false, disabled:false,
            xs:12, sm:12, //size:"small",
            minRows:4,
            maxRows:4,
            }
        ]
    }
]


export const projectEcotaxaElements= [
    {
        title:"Ecotaxa",
        section:
        [
            { name:"ecotaxa_project_name", placeholder:"Ecoxata Project name", label:'Ecoxata Project name',
            tag:"TextField", type:"text",
            variant:"outlined", fullWidth:true, 
            required:true, xs:12, sm:12, size:"small"
            },
            { name:"ecotaxa_project_title", placeholder:"Ecoxata Project title", label:'Ecotaxa Project Title',
            required:false, disabled:true,
            tag:"TextField", type:"text",
            variant:"outlined", fullWidth:true, 
            xs:12, sm:12, size:"small"
            },
            { name:"ecotaxa_project", placeholder:"Ecoxa Project id", label:'Ecotaxa Project ID',
            tag:"TextField", type:"text",
            required:false, disabled:true,
            variant:"outlined", fullWidth:true, 
            xs:12, sm:12, size:"small"
            },
        ]
    }
]

export const projectForm=[
    projectElements,
    projectEcotaxaElements
]

export const scannerElements= [
    {
        title:"Scanner Metadata",
        section:
        [
            { name:"instrument", placeholder:"Instrument", label:'Intrument',
            tag:"TextField", type:"text",
            required:false, disabled:true,
            variant:"outlined", fullWidth:true, 
            xs:12, sm:6, size:"small"
            },
            { name:"serial", placeholder:"Instrument serial number", label:'Serial number',
            tag:"TextField", type:"text",
            required:false, disabled:true,
            variant:"outlined", fullWidth:true, 
            xs:12, sm:6, size:"small"
            },
        ]
    }
]

export const scannerCalibrationElements= [
    {
        title:"Scanner Calibration",
        section:
        [
            // { name:"optical_density_xposition", placeholder:"Optical density Xposition", label:'Optical density Xposition',
            // tag:"TextField", type:"number",
            // required:false, disabled:true,
            // variant:"outlined", fullWidth:false, 
            // xs:12, sm:6, size:"small"
            // },
            // { name:"optical_density_yposition", placeholder:"Optical density Yposition", label:'Optical density Yposition',
            // tag:"TextField", type:"number",
            // required:false, disabled:true,
            // variant:"outlined", fullWidth:false, 
            // xs:12, sm:6, size:"small"
            // },
            { name:"xoffset_large", placeholder:"XOffset (Large)", label:'XOffset',
            tag:"TextField", type:"number",
            required:false, disabled:true,
            variant:"outlined", fullWidth:false, 
            xs:12, sm:6, size:"small"
            },
            { name:"yoffset_large", placeholder:"YOffset (Large)", label:'YOffset',
            tag:"TextField", type:"number",
            required:false, disabled:true,
            variant:"outlined", fullWidth:false, 
            xs:12, sm:6, size:"small"
            },
            { name:"xsize_large", placeholder:"XSize (Large)", label:'XSize',
            tag:"TextField", type:"number",
            required:false, disabled:true,
            variant:"outlined", fullWidth:false, 
            xs:12, sm:6, size:"small"
            },
            { name:"ysize_large", placeholder:"YSize (Large)", label:'YSize',
            tag:"TextField", type:"number",
            required:false, disabled:true,
            variant:"outlined", fullWidth:false, 
            xs:12, sm:6, size:"small"
            },
        ]
    }
]

export const scannerForm=[
    scannerElements,
    scannerCalibrationElements
]

/*
Dialog.create("Project  : "+proj+"              Image  : "+titrered);
Dialog.addString("Sample Id ",SampleId);
Dialog.addString("Zooscan Operator ",Scanop);
Dialog.addString("Ship ",Ship);
Dialog.addString("Scientific program ",Scientificprog);
Dialog.addString("Station Id (''NaN'' if unknown) ",StationId);
Dialog.addString("Sampling date (YYYYMMDD-HHMM) ",Date);
Dialog.addNumber("Latitude    (DD.MM for North,   -DD.MM for South) ",Latitude);
Dialog.addNumber("Longitude (DDD.MM for West, -DDD.MM for Est)   ",Longitude);
Dialog.addNumber("Bottom Depth (m) ",Depth);
Dialog.addString("CTD reference (filename) ",CTDref);
Dialog.addString("Other reference ",Otherref);
Dialog.addNumber("Number of tow in the same sample ",Townb);
Dialog.addNumber("Tow type (Oblique = 1, Horizontal = 2, Vertical = 3) ",Towtype);
Dialog.addString("Net type (WP2, JB, Omori...) ",Nettype);
Dialog.addNumber("Net mesh (cod end) �m",Netmesh);
Dialog.addNumber("Net opening surface (m2)",Netsurf);
Dialog.addNumber("Maximum Depth  (m) : Z max",Zmax);
Dialog.addNumber("Minimum Depth  (m) : Zmin",Zmin);
Dialog.addNumber("Filtered volume (m3) ",Vol);
Dialog.addString("Fraction Id ",FracId);
Dialog.addNumber("Fraction min mesh (�m) ",Fracmin);
Dialog.addNumber("Fraction max mesh (�m) ",Fracsup);
Dialog.addNumber("Fraction spliting ratio x (1/x) ",Fracnb);
Dialog.addString("Remark (no special char !) ",Observation);
//	Dialog.addString("Code", Code);
Dialog.addString("SubMethod",SubMethod);
//	Dialog.addNumber("CellPart",CellPart);
//	Dialog.addNumber("Replicates",Replicates);
//	Dialog.addNumber("VolIni",VolIni);
//	Dialog.addNumber("VolPrec",VolPrec);
*/