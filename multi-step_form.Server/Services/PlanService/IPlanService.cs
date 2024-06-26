using multi_step_form.Server.Models;

namespace multi_step_form.Server.Services.PlanService
{
    public interface IPlanService
    {
        public Task<List<Plan>> GetPlansAsync(); 
    }
}
