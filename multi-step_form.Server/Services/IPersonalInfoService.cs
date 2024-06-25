using multi_step_form.Server.Models.DTOs;

namespace multi_step_form.Server.Services
{
    public interface IPersonalInfoService
    {
        public Task<PersonalInfoResponse?> GetPersonalInfoAsync(string email);
        public Task<PersonalInfoResponse> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest);
    }
}
