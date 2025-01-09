using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web_api.Migrations
{
    /// <inheritdoc />
    public partial class init3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "hasVehicle",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "vehicleIconUrl",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "profilePhotoUrl",
                table: "Users",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<Guid>(
                name: "VehicleId",
                table: "Users",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    VehicleId = table.Column<Guid>(type: "uuid", nullable: false),
                    VehicleIconUrl = table.Column<string>(type: "text", nullable: false),
                    SeatCount = table.Column<int>(type: "integer", nullable: false),
                    BikeCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.VehicleId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_VehicleId",
                table: "Users",
                column: "VehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Vehicle_VehicleId",
                table: "Users",
                column: "VehicleId",
                principalTable: "Vehicle",
                principalColumn: "VehicleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Vehicle_VehicleId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Vehicle");

            migrationBuilder.DropIndex(
                name: "IX_Users_VehicleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "VehicleId",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "profilePhotoUrl",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "hasVehicle",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "vehicleIconUrl",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
