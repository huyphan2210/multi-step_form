using Google.Cloud.Firestore;

namespace multi_step_form.Server.Models
{
    [FirestoreData]
    public class Plan
    {
        [FirestoreProperty("id")]
        public required string Id { get; set; }
        [FirestoreProperty("name")]
        public string Name { get; set; } = string.Empty;
        [FirestoreProperty("monthlyPrice")]
        public byte MonthlyPrice { get; set; }
        [FirestoreProperty("yearlyPrice")]
        public byte YearlyPrice { get;set; }
        [FirestoreProperty("img")]
        public string Img { get; set; } = string.Empty;
    }
}
