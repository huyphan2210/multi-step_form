using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Microsoft.OpenApi.Extensions;
using multi_step_form.Server.DataAccess.AddOnCollection;
using multi_step_form.Server.DataAccess.PersonalInfoCollection;
using multi_step_form.Server.DataAccess.PlanCollection;
using multi_step_form.Server.Services;
using Swashbuckle.AspNetCore.Swagger;

var builder = WebApplication.CreateBuilder(args);

// Add controllers to the container.
builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddScoped<IPersonalInfoService, PersonalInfoService>();

//Add collections to the container
builder.Services.AddScoped<IPersonalInfoCollection, PersonalInfoCollection>();
builder.Services.AddScoped<IPlanCollection, PlanCollection>();
builder.Services.AddScoped<IAddOnCollection, AddOnCollection>();

//Add FireStoreDb to the Container
builder.Services.AddScoped(provider =>
{
    var path = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS");
    var googleCredential = GoogleCredential.FromFile(path);

    var fireStoreBuilder = new FirestoreDbBuilder
    {
        ProjectId = Environment.GetEnvironmentVariable("FIRESTORE_FORM_PROJECT-ID"),
        Credential = googleCredential,
    };

    return fireStoreBuilder.Build();
});

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

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();