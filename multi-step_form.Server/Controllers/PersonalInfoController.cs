using Microsoft.AspNetCore.Mvc;
using multi_step_form.Server.Models.DTOs;
using multi_step_form.Server.Services.PersonalInfoService;

namespace multi_step_form.Server.Controllers
{
    [ApiController]
    [Route("api/personal-info")]
    public class PersonalInfoController : ControllerBase
    {
        private readonly IPersonalInfoService _personalInfoService;
        private readonly ILogger<PersonalInfoController> _logger;

        public PersonalInfoController(IPersonalInfoService personalInfoService, ILogger<PersonalInfoController> logger)
        {
            _logger = logger;
            _personalInfoService = personalInfoService;
        }

        [HttpGet("{email}", Name = "GetPersonalInfo")]
        public async Task<ActionResult<PersonalInfoResponse>> GetPersonalInfoAsync(string email)
        {
            _logger.LogInformation("Start to get PersonalInfo");
            try
            {
                return Ok(await _personalInfoService.GetPersonalInfoAsync(email));
            }
            catch (FileNotFoundException e)
            {
                _logger.LogError(e, "File not found for email: {Email}", email);
                return NotFound();
            }
            catch (BadHttpRequestException e)
            {
                _logger.LogError(e, e.Message);
                return BadRequest(e.Message);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "An error occurred while getting personal info for email: {Email}", email);
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("", Name = "RegisterNewPersonalInfo")]
        public async Task<ActionResult<PersonalInfoResponse>> RegisterNewPersonalInfoAsync(
            [FromBody] PersonalInfoRequest personalInfoRequest)
        {
            _logger.LogInformation("Start to register a new PersonalInfo");
            try
            {
                return CreatedAtRoute("", await _personalInfoService.RegisterNewPersonalInfoAsync(personalInfoRequest));
            }
            catch (Exception e)
            {
                _logger.LogError(e, "An error occurred while adding a PersonalInfo");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}