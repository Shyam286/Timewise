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

  
  ]
     

export const singleFilter=[
    {
      id: "discount",
      name: "Discount Range",
      options: [
        {value: "10", label: "10% And Above"},
        { value: "20", label: "20% And Above" },
        { value: "30", label: "30% And Above" },
        { value: "40", label: "40% And Above" },
        { value: "50", label: "50% And Above" },
        { value: "60", label: "60% And Above" },
        { value: "70", label: "70% And Above" },
        { value: "80", label: "80% And Above" },
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: "in_stock", label: "In Stock" },
        { value: "out_of_stock", label: "Out Of Stock" },
        
      ],
    },
  ]


export const sortOptions = [
  
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
  ];
  