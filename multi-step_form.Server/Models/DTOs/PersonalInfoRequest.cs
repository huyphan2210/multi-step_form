namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoRequest : PersonalInfo
    {
        public List<Guid>? AddOnIds { get; set; }
        public Guid PlanId { get; set; }
    }
}
