        function myEmployees(){
            var employees = [
        {
            name:       "De'Shawn Minnis", 
            age:        "37", 
            salary:     "$4000.00", 
            Address:    "18025 SE 272nd street", 
            city:       "Covington", 
            state:      "WA", 
            zipcode:    "98042" 
        },
        {
            name: "Jane doe", 
            age: "42", 
            salary: "$3000.00", 
            Address: "5555 Grape St", 
            city: "New Jersey", 
            state: "NJ", 
            zipcode: "10561" 
        },     
        {   name: "John Doe", 
            age: "43", 
            salary: "$6000.00", 
            Address: "7777 Orange St", 
            city: "Philadelphia", 
            state: "PA", 
            zipcode: "06071" 
       }
            
        ];

          for(var i=0; i<3; i++ ) {
            console.log (employees[i].name);
            console.log (employees[i].age);
            console.log (employees[i].salary);
          } 
        } function myEmployees();