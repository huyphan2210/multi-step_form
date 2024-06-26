using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.PlanCollection
{
    public interface IPlanCollection
    {
        public Task<List<Plan>> GetPlansAsync();
    }
}
