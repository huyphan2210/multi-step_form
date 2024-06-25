using Google.Cloud.Firestore;
using multi_step_form.Server.Models;

namespace multi_step_form.Server.DataAccess.PersonalInfoCollection
{
    public class PersonalInfoCollection : IPersonalInfoCollection
    {
        private readonly CollectionReference _personalInfoReference;

        public PersonalInfoCollection()
        {
            // SET GOOGLE_APPLICATION_CREDENTIALS in the EnvironmentVariable of your local machine/hosting service
            // var path = "Path to your firebase-adminsdk.json file"; // e.g., "firebase-adminsdk.json"
            // Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", path);
            var projectId = Environment.GetEnvironmentVariable("FIRESTORE_FORM_PROJECT-ID");
            var fireStoreDb = FirestoreDb.Create(projectId);
            _personalInfoReference = fireStoreDb.Collection(nameof(PersonalInfo));
        }

        public async Task<PersonalInfo?> GetPersonalInfoByEmailAsync(string email)
        {
            var query = _personalInfoReference.WhereEqualTo(nameof(email), email);
            var snapshot = await query.GetSnapshotAsync();
            var personalInfo = snapshot.Documents.Select(doc => doc.ConvertTo<PersonalInfo>()).FirstOrDefault();
            return personalInfo;
        }
    }
}
