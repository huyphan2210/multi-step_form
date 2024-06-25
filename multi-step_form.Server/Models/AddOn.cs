using Google.Cloud.Firestore;

namespace multi_step_form.Server.Models
{
    [FirestoreData]
    public class AddOn
    {
        [FirestoreProperty("id")]
        public Guid Id { get; set; }
        [FirestoreProperty("name")]
        public string Name { get; set; } = string.Empty;
        [FirestoreProperty("description")]
        public string Description { get; set; } = string.Empty;
        [FirestoreProperty("monthlyPrice")]
        public byte MonthlyPrice { get; set; }
        [FirestoreProperty("yearlyPrice")]
        public byte YearlyPrice { get; set; }
    }
}
