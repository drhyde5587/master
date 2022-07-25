var activity = [
  {
    ID: 64,
    UserID: 7,
    EmployeeID: 'CLGAXO',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'Transport',
    CategoryName: 'Activity - Productive',
    TypeName: 'Transport - Freight Sorting',
    Date: '2018-02-14',
    Duration: '00:30',
    IsProcessed: false,
  },
  {
    ID: 66,
    UserID: 7,
    EmployeeID: 'CLGAXO',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'Picking',
    CategoryName: 'Activity - Productive',
    TypeName: 'Picking - Bulk',
    Date: '2018-02-15',
    Duration: '00:30',
    IsProcessed: false,
  },
  {
    ID: 67,
    UserID: 7,
    EmployeeID: 'CLGAXO',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'CPE RASS',
    CategoryName: 'Activity - Productive',
    TypeName: 'CPE RASS',
    Date: '2018-02-15',
    Duration: '00:15',
    IsProcessed: false,
  },
  {
    ID: 71,
    UserID: 7,
    EmployeeID: 'CLGAXO',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'Inventory',
    CategoryName: 'Activity - Unproductive',
    TypeName: "Inventory Relocation's",
    Date: '2018-02-15',
    Duration: '01:30',
    IsProcessed: false,
  },
  {
    ID: 72,
    UserID: 5,
    EmployeeID: 'HENDERSA',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'CPE',
    CategoryName: 'Activity - Productive',
    TypeName: 'CPE',
    Date: '2018-02-15',
    Duration: '00:30',
    IsProcessed: false,
  },
  {
    ID: 90,
    UserID: 5,
    EmployeeID: 'HENDERSA',
    SiteName: 'MULGRAVE',
    BusinessUnitName: 'Telstra Logistics - Melbourne',
    AccountName: 'IBM AUSTRALIA LTD',
    GroupName: 'CPE RASS',
    CategoryName: 'Activity - Productive',
    TypeName: 'CPE RASS',
    Date: '2018-03-14',
    Duration: null,
    IsProcessed: false,
  },
];

//Identifying the distinct employeeID
const arr1 = Array.from(new Set(activity.map((i) => i.EmployeeID)));

//Identifying the activities based on the employee id's
const arr2 = activity.map((i) => {
  if (i.EmployeeID == arr1[0]) {
    return Object.entries(i);
  }
});

//Filtering out undefined values out of the array
const farr2 = arr2.filter((d) => d);

const arr3 = activity.map((i) => {
  if (i.EmployeeID == arr1[1]) {
    return Object.entries(i);
  }
});

const farr3 = arr3.filter((d) => d);

//Getting Keyname of the Employee ID
const key = Object.keys(activity[0]).find((i) => activity[0][i] === arr1[0]);

//Assignning the values of EmployeeID's with their activity name in 2D array
const keyarr = [[key, arr1[0]], [key], arr1[1]];

const arr2D = [
  [keyarr[0], farr2],
  [keyarr[1], farr3],
];

//output
console.log(arr2D);
