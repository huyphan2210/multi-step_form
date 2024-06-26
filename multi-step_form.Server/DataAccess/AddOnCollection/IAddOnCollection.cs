using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.AddOnCollection
{
    public interface IAddOnCollection
    {
        public Task<List<AddOn>> GetAddOnsAsync();
    }
}
