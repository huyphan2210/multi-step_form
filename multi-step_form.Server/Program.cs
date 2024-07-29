using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Microsoft.OpenApi.Extensions;
using multi_step_form.Server.DataAccess.AddOnCollection;
using multi_step_form.Server.DataAccess.PersonalInfoCollection;
using multi_step_form.Server.DataAccess.PlanCollection;
using multi_step_form.Server.Services.AddOnService;
using multi_step_form.Server.Services.PersonalInfoService;
using multi_step_form.Server.Services.PlanService;
using Swashbuckle.AspNetCore.Swagger;

var builder = WebApplication.CreateBuilder(args);
// Add logging services
builder.Logging.AddConsole(); // or any other logging provider

// Add controllers to the container.
builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddScoped<IPersonalInfoService, PersonalInfoService>();
builder.Services.AddScoped<IPlanService, PlanService>();
builder.Services.AddScoped<IAddOnService, AddOnService>();

//Add collections to the container
builder.Services.AddScoped<IPersonalInfoCollection, PersonalInfoCollection>();
builder.Services.AddScoped<IPlanCollection, PlanCollection>();
builder.Services.AddScoped<IAddOnCollection, AddOnCollection>();

//Add FireStoreDb to the Container
var json = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS_JSON");
var googleCredential = GoogleCredential.FromFile(json);

var fireStoreBuilder = new FirestoreDbBuilder
{
    ProjectId = Environment.GetEnvironmentVariable("FIRESTORE_FORM_PROJECT-ID"),
    Credential = googleCredential,
};

builder.Services.AddSingleton(provider => fireStoreBuilder);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", corsBuilder =>
    {
        // TODO: Add the client endpoint
        corsBuilder.WithOrigins("")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Save the Swagger JSON to a file
var filePath = Path.Combine(app.Environment.ContentRootPath, "swagger.json");
var swaggerProvider = app.Services.GetRequiredService<ISwaggerProvider>();
using (var writer = new StreamWriter(filePath))
{
    var swaggerDoc = swaggerProvider.GetSwagger("v1");
    swaggerDoc.SerializeAsJson(writer.BaseStream, new Microsoft.OpenApi.OpenApiSpecVersion());
}

app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();