using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace CevaCodeTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : ControllerBase
    {
        //Initial config to access appsettings.json
        private IConfiguration config;

        public ActivitiesController(IConfiguration iconfig)
        {
            this.config = iconfig;
        }
         

        [HttpPost(Name = "PostActivities")]
        public IActionResult Post([FromBody] Activities act)
        {
            //Assigning values to the object from request object
            Activities item = new()
            {
                ID=act.ID,
                UserID=act.UserID,
                EmployeeID=act.EmployeeID,
                SiteName=act.SiteName,
                BusinessUnitName=act.BusinessUnitName,
                AccountName=act.AccountName,
                GroupName=act.GroupName,
                CategoryName=act.CategoryName,
                TypeName=act.TypeName,
                Date=act.Date,
                Duration=act.Duration,
                IsProcessed=act.IsProcessed
            };


            //Get the path configured in appsettings.json
            string currPath = config.GetSection("DirectoryPath").Value;

            if (!Directory.Exists(currPath))
            {
                Directory.CreateDirectory(currPath);
            }

            //Converting the object to json data
            string json=JsonConvert.SerializeObject(item, Formatting.Indented);


            //Writing the json data in the file
            using TextWriter tw = new StreamWriter(currPath+@"\data.json", append: false);
            tw.WriteLine(json);

            //Post message data
            return Ok(json);

        }
    }
}