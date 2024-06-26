using Microsoft.AspNetCore.Mvc;
using multi_step_form.Server.Models;
using multi_step_form.Server.Services.AddOnService;

namespace multi_step_form.Server.Controllers
{
    [ApiController]
    [Route("api/add-on")]
    public class AddOnController : ControllerBase
    {
        private readonly IAddOnService _addOnService;
        private readonly ILogger<PersonalInfoController> _logger;

        public AddOnController(IAddOnService addOnService, ILogger<PersonalInfoController> logger)
        {
            _addOnService = addOnService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAddOns")]
        public async Task<ActionResult<List<AddOn>>> GetAddOnsAsync()
        {
            _logger.LogInformation("Start to get AddOns");
            try
            {
                return Ok(await _addOnService.GetAddOnsAsync());
            }
            catch (Exception e)
            {
                _logger.LogError(e, "An error occurred while fetching AddOns");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
