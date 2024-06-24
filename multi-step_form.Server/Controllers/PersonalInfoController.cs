using Microsoft.AspNetCore.Mvc;
using multi_step_form.Server.Models.DTOs;
using multi_step_form.Server.Services;

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
        public async Task<PersonalInfoResponse> GetPersonalInfoAsync(string email)
        {
            return await _personalInfoService.GetPersonalInfoAsync(email);
        }

        [HttpPost("", Name = "RegisterNewPersonalInfo")]
        public async Task<PersonalInfoResponse> RegisterNewPersonalInfoAsync(
            [FromBody] PersonalInfoRequest personalInfoRequest)
        {
            return await _personalInfoService.RegisterNewPersonalInfoAsync(personalInfoRequest);
        }
    }
}