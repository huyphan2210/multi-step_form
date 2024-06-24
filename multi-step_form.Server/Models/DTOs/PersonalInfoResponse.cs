namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoResponse : PersonalInfo
    {
        public List<AddOn> AddOns { get; set; } = new();
        public Plan? Plan { get; set; }
    }
}
