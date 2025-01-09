using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web_api.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    userId = table.Column<Guid>(type: "uuid", nullable: false),
                    firstName = table.Column<string>(type: "text", nullable: false),
                    lastName = table.Column<string>(type: "text", nullable: false),
                    userName = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    securityQuestion = table.Column<string>(type: "text", nullable: false),
                    accountLocked = table.Column<bool>(type: "boolean", nullable: false),
                    isAdmin = table.Column<bool>(type: "boolean", nullable: false),
                    accountReset = table.Column<bool>(type: "boolean", nullable: false),
                    profilePhotoUrl = table.Column<string>(type: "text", nullable: false),
                    vehicleIconUrl = table.Column<string>(type: "text", nullable: false),
                    hasVehicle = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.userId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
