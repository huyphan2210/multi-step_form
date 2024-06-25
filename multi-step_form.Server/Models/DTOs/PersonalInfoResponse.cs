namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoResponse : PersonalInfo
    {
        public List<AddOn>? AddOns { get; set; }
        public Plan? Plan { get; set; }
    }
}
