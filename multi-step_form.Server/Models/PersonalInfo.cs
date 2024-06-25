using Google.Cloud.Firestore;

namespace multi_step_form.Server.Models
{
    [FirestoreData]
    public class PersonalInfo
    {
        [FirestoreProperty("id")]
        public Guid Id { get; set; }
        [FirestoreProperty("name")]
        public string Name { get; set; } = string.Empty;
        [FirestoreProperty("email")]
        public string Email { get; set; } = string.Empty;
        [FirestoreProperty("phone")]
        public string Phone { get; set; } = string.Empty;
        [FirestoreProperty("planId")]
        public Guid? PlanId { get; set; }
        [FirestoreProperty("addOnIds")]
        public List<Guid>? AddOnIds { get; set; }
    }
}
