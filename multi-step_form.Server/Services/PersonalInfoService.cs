using Google.Cloud.Firestore;
using multi_step_form.Server.Models;
using multi_step_form.Server.Models.DTOs;
using System.Numerics;
using Microsoft.AspNetCore.Http.HttpResults;
using multi_step_form.Server.DataAccess.AddOnCollection;
using multi_step_form.Server.DataAccess.PersonalInfoCollection;
using multi_step_form.Server.DataAccess.PlanCollection;

namespace multi_step_form.Server.Services
{
    public class PersonalInfoService : IPersonalInfoService
    {
        private readonly IPersonalInfoCollection _personalInfoCollection;
        private readonly IPlanCollection _planCollection;
        private readonly IAddOnCollection _addOnCollection;

        public PersonalInfoService(IPersonalInfoCollection personalInfoCollection, IPlanCollection planCollection, IAddOnCollection addOnCollection)
        {
            _personalInfoCollection = personalInfoCollection;
            _planCollection = planCollection;
            _addOnCollection = addOnCollection;
        }

        public async Task<PersonalInfoResponse?> GetPersonalInfoAsync(string email)
        {
            try
            {
                var personalInfo = await _personalInfoCollection.GetPersonalInfoByEmailAsync(email) ??
                                   throw new FileNotFoundException("A Person with the email is not found");
                if (!personalInfo.PlanId.HasValue)
                {
                    throw new Exception("The Person doesn't have a plan");
                }

                var plan = await _planCollection.GetPlanByIdAsync(personalInfo.PlanId.Value);
                var addOns = personalInfo.AddOnIds != null
                    ? await _addOnCollection.GetAddOnByIdsAsync(personalInfo.AddOnIds)
                    : null;

                return new PersonalInfoResponse
                {
                    Email = personalInfo.Email,
                    Name = personalInfo.Name,
                    Phone = personalInfo.Phone,
                    AddOns = addOns,
                    Plan = plan
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            ;
        }

        public async Task<PersonalInfoResponse> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest)
        {
            return new PersonalInfoResponse();
        }
    }
}