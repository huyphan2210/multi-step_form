namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoResponse
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string? PlanId { get; set; }
        public List<string>? AddOnIds { get; set; }
    }
}
