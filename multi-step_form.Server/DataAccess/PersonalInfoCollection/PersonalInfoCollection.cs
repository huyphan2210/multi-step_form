using Google.Cloud.Firestore;
using multi_step_form.Server.Models;
using multi_step_form.Server.Models.DTOs;

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

        public async Task<PersonalInfo> RegisterNewPersonalInfoAsync(PersonalInfoRequest personalInfoRequest)
        {
            var newPersonalInfo = personalInfoRequest.ParseRequestToPersonalInfo();
            var docRef = await _personalInfoReference.AddAsync(newPersonalInfo);
            var snapshot = await docRef.GetSnapshotAsync();

            if (snapshot.Exists)
            {
                return snapshot.ConvertTo<PersonalInfo>();
            }

            throw new Exception("A snapshot doesn't exist");
        }

        public async Task<PersonalInfo> UpdatePersonalInfo(PersonalInfoRequest personalInfoRequest)
        {
            var newPersonalInfo = personalInfoRequest.ParseRequestToPersonalInfo();
            var query = _personalInfoReference.WhereEqualTo("email", personalInfoRequest.Email);
            var snapshot = await query.GetSnapshotAsync();
            var docRef = snapshot.Documents.ToList().FirstOrDefault()?.Reference;
            if (docRef != null)
            { 
                await docRef.SetAsync(personalInfoRequest.ParseRequestToPersonalInfo());
            }

            return newPersonalInfo;
        }
    }
}
