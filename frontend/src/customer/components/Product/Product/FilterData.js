export const filters =[
    {
        id:"color",
        name: "Color",
        options:[
            {value:"white",label: 'White'},  
            {value:'black', label: 'Black'},
            {value:'gray', label: 'Gray'} ,
            {value:'yellow', label: 'Yellow'},    
            {value: 'red', label: 'Red' }  ,   
            {value:'purple', label: 'Purple'} ,                     
            {value:'green', label: 'Green'}        
        ],
    },


    {
        id:'price',
        name:"Price",
        options:[
            {value:"159-499", label:"₹159 to ₹499"},
            {value:"1000-1999", label:"₹1000 to ₹1999"},
            {value:"2000-4999", label:"₹2000 to ₹4999"},
            {value:"5000-24999", label:"₹5000 to ₹24999"},
            {value:"25000", label:"₹25000 & more"},
        ]

    },

    {
        id:"discount",
        name:"Discount Range",
        options:[
            {
                value:'10',
                label:'10% and above'
            },
            {value:'20'  , label:'20% and above'},
            {value:'30'  , label:'30% and above'},
            {value:'40'  , label:'40% and above'},
            {value:'50'  , label:'50% and above'},
            {value:'60'  , label:'60% and above'},
            {value:'70'  , label:'70% and above'},
            {value:'80'  , label:'80% and above'},
            {value:'90'  , label:'90% and above'}
        ]
    },

    {
        id:"availability",
        name:"Availability",
        options:[
            {value:'1'  , label:'In Stock'},
            {value:'0'  , label:'Out of Stock'}
        ]
    },


]

