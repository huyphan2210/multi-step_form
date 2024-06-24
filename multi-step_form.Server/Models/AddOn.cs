using System.ComponentModel.DataAnnotations;

namespace multi_step_form.Server.Models
{
    public class AddOn
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public byte MonthlyPrice { get; set; }
        public byte YearlyPrice { get; set; }
    }
}
