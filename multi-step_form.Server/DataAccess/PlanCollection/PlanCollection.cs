using Google.Cloud.Firestore;
using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.PlanCollection
{
    public class PlanCollection : IPlanCollection
    {
        private readonly CollectionReference _planReference;

        public PlanCollection()
        {
            // SET GOOGLE_APPLICATION_CREDENTIALS in the EnvironmentVariable of your local machine/hosting service
            // var path = "Path to your firebase-adminsdk.json file"; // e.g., "firebase-adminsdk.json"
            // Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", path);
            var projectId = Environment.GetEnvironmentVariable("FIRESTORE_FORM_PROJECT-ID");
            var fireStoreDb = FirestoreDb.Create(projectId);
            _planReference = fireStoreDb.Collection(nameof(Plan));
        }

        public async Task<Plan?> GetPlanByIdAsync(Guid planId)
        {
            var query = _planReference.WhereEqualTo("id", planId);
            var snapshot = await query.GetSnapshotAsync();
            var plan = snapshot.Documents.Select(doc => doc.ConvertTo<Plan>()).FirstOrDefault();
            return plan;
        }
    }
}
