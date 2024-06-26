using multi_step_form.Server.Models;

namespace multi_step_form.Server.Services.AddOnService
{
    public interface IAddOnService
    {
        public Task<List<AddOn>> GetAddOnsAsync(); 
    }
}
