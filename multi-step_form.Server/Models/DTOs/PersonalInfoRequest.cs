namespace multi_step_form.Server.Models.DTOs
{
    public class PersonalInfoRequest : PersonalInfo
    {
        public List<AddOn> AddOns { get; set; } = new();
        public Plan? Plan { get; set; }
    }
}
