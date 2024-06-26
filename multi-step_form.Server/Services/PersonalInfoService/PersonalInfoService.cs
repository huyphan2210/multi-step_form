using multi_step_form.Server.DataAccess.PersonalInfoCollection;
using multi_step_form.Server.Models.DTOs;

namespace multi_step_form.Server.Services.PersonalInfoService
{
    public class PersonalInfoService : IPersonalInfoService
    {
        private readonly IPersonalInfoCollection _personalInfoCollection;

        public PersonalInfoService(IPersonalInfoCollection personalInfoCollection)
        {
            _personalInfoCollection = personalInfoCollection;
        }

        public async Task<PersonalInfoResponse?> GetPersonalInfoAsync(string email)
        {
            var personalInfo = await _personalInfoCollection.GetPersonalInfoByEmailAsync(email) ??
                               throw new FileNotFoundException("A Person with the email is not found");
            if (string.IsNullOrWhiteSpace(personalInfo.PlanId))
            {
                throw new BadHttpRequestException("The Person doesn't have a plan");
            }

            return personalInfo.ParsePersonalInfoResponse();
        }

        public async Task<PersonalInfoResponse> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest)
        {
            var createdPersonalInfo = await _personalInfoCollection.RegisterNewPersonalInfoAsync(personalInfoRequest);
            return createdPersonalInfo.ParsePersonalInfoResponse();
        }
    }
}