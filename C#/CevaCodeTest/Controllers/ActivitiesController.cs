using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace CevaCodeTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivitiesController : ControllerBase
    {
        
         

        [HttpPost(Name = "PostActivities")]
        public IActionResult Post([FromBody] Activities act)
        {
            Activities item = new Activities()
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

            string currPath=Directory.GetCurrentDirectory();
            if (!Directory.Exists(Path.Combine(currPath,@"Users\IN")))
            {
                Directory.CreateDirectory(Path.Combine(currPath, @"Users\IN"));
            }

            string json=JsonConvert.SerializeObject(item, Formatting.Indented);

            string path = @"Users\IN\Data.json";

            using TextWriter tw = new StreamWriter(path, append: true);
            tw.WriteLine(json);

            return Ok(json);

        }
    }
}