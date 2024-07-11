using System.ComponentModel;

namespace multi_step_form.Server.Models.Enums
{
    public enum PriceType
    {
        [Description("monthly")]
        Monthly,
        [Description("yearly")]
        Yearly
    }
}