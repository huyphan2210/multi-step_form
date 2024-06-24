using multi_step_form.Server.Models.DTOs;

namespace multi_step_form.Server.Services
{
    public class PersonalInfoService : IPersonalInfoService
    {
        public async Task<PersonalInfoResponse> GetPersonalInfoAsync(string email)
        {
            return new PersonalInfoResponse();
        }

        public async Task<PersonalInfoResponse> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest)
        {
            return new PersonalInfoResponse();
        }
    }
}
