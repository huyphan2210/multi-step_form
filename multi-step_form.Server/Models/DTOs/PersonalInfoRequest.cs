using multi_step_form.Server.Models.Enums;

namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public List<string>? AddOnIds { get; set; }
        public string PlanId { get; set; } = string.Empty;
        public PriceType CurrentPriceType { get; set; }

        public PersonalInfo ParseRequestToPersonalInfo()
        {
            return new PersonalInfo
            {
                Id = Guid.NewGuid().ToString(),
                Name = Name,
                Email = Email,
                Phone = Phone,
                AddOnIds = AddOnIds,
                PlanId = PlanId,
                CurrentPriceType = CurrentPriceType
            };
        }
    }
}
