using multi_step_form.Server.DataAccess.PlanCollection;
using multi_step_form.Server.Models;

namespace multi_step_form.Server.Services.PlanService
{
    public class PlanService : IPlanService
    {
        private readonly IPlanCollection _planCollection;

        public PlanService(IPlanCollection planCollection)
        {
            _planCollection = planCollection;
        }

        public async Task<List<Plan>> GetPlansAsync()
        {
            return await _planCollection.GetPlansAsync();
        }
    }
}