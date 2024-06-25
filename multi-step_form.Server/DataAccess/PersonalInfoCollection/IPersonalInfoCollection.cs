using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.PersonalInfoCollection
{
    public interface IPersonalInfoCollection
    {
        public Task<PersonalInfo?> GetPersonalInfoByEmailAsync(string email);
    }
}
