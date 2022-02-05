// Input: 
// Employee ID, Manager ID, Employee Name
// 8, 8, "Alice"
// 2, 8, "Bob"
// 3, 2, "Emp3"
// 4, 3, "Emp4"
// 5, 4, "Emp5"
// 6, 3, "Emp6"
// 7, 8, "Emp7"



// Output:
// Alice
//   Bob
//     Emp3
//       Emp4
//         Emp5
//       Emp6
//   Emp7


const input = [
    {
        'employeeID': 8,
        'managerID' : 8,
        'emmployeeName' : "Alice"
    },  
    {
        'employeeID': 2,
        'managerID' : 8,
        'emmployeeName' : "Bob" 
    },
       {
        'employeeID': 3,
        'managerID' : 2,
        'emmployeeName' : "Emp3"
    },  
    {
        'employeeID': 4,
        'managerID' : 3,
        'emmployeeName' : "Emp4" 
    },
       {
        'employeeID': 5,
        'managerID' : 4,
        'emmployeeName' : "Emp5"
    },  
    {
        'employeeID': 6,
        'managerID' : 3,
        'emmployeeName' : "Emp6" 
    },
       {
        'employeeID': 7,
        'managerID' : 8,
        'emmployeeName' : "Emp7"
    },  
]


const constructOrgChart = (array) => {
    let orgDictionary = {};
    const namesDictionary = mapEmployeeIDToName(array);
    const topEmployee = null;
    
    // n
    for(const employee of array){
        const manager = employee.managerID;
        const employeeID = employee.employeeID;
        const employeeName = employee.emmployeeName;
        
        if(manager === employeeID) topEmployee = manager;
        
        if(orgDictionary[manager]) orgDictionary[manager].push(employeeID);
        else orgDictionary[manager] = [employeeID]
        
    }
    

    //for(let manager in orgDictionary){    
        printReportees(orgDictionary, topEmployee , namesDictionary);
    // }
    
    //     '8': [8, 2, 7 ],
    //     '3': [4, 6],
    

    
}

// r -> number of reportees

const printReportees = (orgDictionary, managerID, namesDictionary, level = 0) => {
        // 8 - manager
        // [8, 2, 7 ] - reportees
        // {
        //     8 : "Alice",
        //     2 : "bob"
        // }

        const reportees = orgDictionary[manager];
        const numberOfTabs = '\t' * level;
        console.log(` ${numberOfTabs} ${namesDictionary[reportee]}`);
        // "Alice"
        for(const [i, reportee] of reportees.entries()){ 
            // ALice
           
            level += i;
            printReportees(orgDictionary, reportee, namesDictionary, level );
             // "Bob"
             //     "Emp3"
        }

}

// n + n n! = nr!

// n

const mapEmployeeIDToName = (array) => {
    const nameLookUp = {};
    
    for(const employee of array){
        const employeeID = employee.employeeID;
        const employeeName = employee.emmployeeName;
        nameLookUp[employeeID]  = employeeName
    } 
    
    return nameLookUp;
}



// }
