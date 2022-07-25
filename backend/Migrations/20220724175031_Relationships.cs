using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IDO.Migrations
{
    public partial class Relationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Categoryid",
                table: "Items",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Priorityid",
                table: "Items",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Statusid",
                table: "Items",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_Categoryid",
                table: "Items",
                column: "Categoryid");

            migrationBuilder.CreateIndex(
                name: "IX_Items_Priorityid",
                table: "Items",
                column: "Priorityid");

            migrationBuilder.CreateIndex(
                name: "IX_Items_Statusid",
                table: "Items",
                column: "Statusid");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Categories_Categoryid",
                table: "Items",
                column: "Categoryid",
                principalTable: "Categories",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Priorities_Priorityid",
                table: "Items",
                column: "Priorityid",
                principalTable: "Priorities",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Statuses_Statusid",
                table: "Items",
                column: "Statusid",
                principalTable: "Statuses",
                principalColumn: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Categories_Categoryid",
                table: "Items");

            migrationBuilder.DropForeignKey(
                name: "FK_Items_Priorities_Priorityid",
                table: "Items");

            migrationBuilder.DropForeignKey(
                name: "FK_Items_Statuses_Statusid",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_Categoryid",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_Priorityid",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_Statusid",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Categoryid",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Priorityid",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Statusid",
                table: "Items");
        }
    }
}
