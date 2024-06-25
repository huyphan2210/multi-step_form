using Google.Cloud.Firestore;
using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.AddOnCollection
{
    public class AddOnCollection : IAddOnCollection
    {
        private readonly CollectionReference _addOnReference;

        public AddOnCollection()
        {
            // SET GOOGLE_APPLICATION_CREDENTIALS in the EnvironmentVariable of your local machine/hosting service
            // var path = "Path to your firebase-adminsdk.json file"; // e.g., "firebase-adminsdk.json"
            // Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", path);
            var projectId = Environment.GetEnvironmentVariable("FIRESTORE_FORM_PROJECT-ID");
            var fireStoreDb = FirestoreDb.Create(projectId);
            _addOnReference = fireStoreDb.Collection(nameof(AddOn));
        }

        public async Task<List<AddOn>> GetAddOnByIdsAsync(List<Guid> addOnIds)
        {
            var query = _addOnReference.WhereArrayContainsAny("id", addOnIds);
            var snapshot = await query.GetSnapshotAsync();
            var addOns = snapshot.Documents.Select(doc => doc.ConvertTo<AddOn>()).ToList();
            return addOns;
        }
    }
}
