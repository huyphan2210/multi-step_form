using multi_step_form.Server.Models;
using multi_step_form.Server.Models.DTOs;

namespace multi_step_form.Server.DataAccess.PersonalInfoCollection
{
    public interface IPersonalInfoCollection
    {
        public Task<PersonalInfo?> GetPersonalInfoByEmailAsync(string email);
        public Task<PersonalInfo> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest);
    }
}
