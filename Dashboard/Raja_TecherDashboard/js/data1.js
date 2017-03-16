$("#example-table").tabulator({
    height:"311px",
    columns:[
        {title:"Name", field:"name", width:200},
        {title:"Progress", field:"progress", width:100, sorter:"number"},
        {title:"Gender", field:"gender"},
        {title:"Rating", field:"rating", width:80},
        {title:"Favourite Color", field:"col"},
        {title:"Date Of Birth", field:"dob"},
        {title:"Driver", field:"car"},
    ],
});
