namespace multi_step_form.Server.Models
{
    public class Plan
    {
        public string Name { get; set; } = string.Empty;
        public byte MonthlyPrice { get; set; }
        public byte YearlyPrice { get;set; }
        public string Img { get; set; } = string.Empty;
    }
}
