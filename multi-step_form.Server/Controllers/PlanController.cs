using Microsoft.AspNetCore.Mvc;
using multi_step_form.Server.Models;
using multi_step_form.Server.Services.PlanService;

namespace multi_step_form.Server.Controllers
{
    [ApiController]
    [Route("api/plan")]
    public class PlanController : ControllerBase
    {
        private readonly IPlanService _planService;
        private readonly ILogger<PersonalInfoController> _logger;

        public PlanController(IPlanService planService, ILogger<PersonalInfoController> logger)
        {
            _planService = planService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetPlans")]
        public async Task<ActionResult<List<Plan>>> GetPlansAsync()
        {
            _logger.LogInformation("Start to get plans");
            try
            {
                return Ok(await _planService.GetPlansAsync());
            }
            catch (Exception e)
            {
                _logger.LogError(e, "An error occurred while fetching plans");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
