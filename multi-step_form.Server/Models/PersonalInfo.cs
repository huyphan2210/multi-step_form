using Google.Cloud.Firestore;
using multi_step_form.Server.Models.DTOs;
using multi_step_form.Server.Models.Enums;

namespace multi_step_form.Server.Models
{
    [FirestoreData]
    public class PersonalInfo
    {
        [FirestoreProperty("id")]
        public required string Id { get; set; }
        [FirestoreProperty("name")]
        public string Name { get; set; } = string.Empty;
        [FirestoreProperty("email")]
        public string Email { get; set; } = string.Empty;
        [FirestoreProperty("phone")]
        public string Phone { get; set; } = string.Empty;
        [FirestoreProperty("planId")]
        public string? PlanId { get; set; }
        [FirestoreProperty("addOnIds")]
        public List<string>? AddOnIds { get; set; }
        [FirestoreProperty("currentPriceType")]
        public PriceType CurrentPriceType { get; set; } = PriceType.Monthly;

        public PersonalInfoResponse ParsePersonalInfoResponse()
        {
            return new PersonalInfoResponse
            {
                Name = Name,
                Email = Email,
                Phone = Phone,
                PlanId = PlanId,
                AddOnIds = AddOnIds,
                CurrentPriceType = CurrentPriceType
            };
        }
    }
}
