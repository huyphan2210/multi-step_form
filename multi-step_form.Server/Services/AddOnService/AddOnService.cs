using multi_step_form.Server.DataAccess.AddOnCollection;
using multi_step_form.Server.Models;

namespace multi_step_form.Server.Services.AddOnService
{
    public class AddOnService : IAddOnService
    {
        private readonly IAddOnCollection _addOnCollection;

        public AddOnService(IAddOnCollection addOnCollection)
        {
            _addOnCollection = addOnCollection;
        }

        public async Task<List<AddOn>> GetAddOnsAsync()
        {
            return await _addOnCollection.GetAddOnsAsync();
        }
    }
}