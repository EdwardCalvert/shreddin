﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using web_api.DataAccess;

#nullable disable

namespace web_api.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250111122641_init")]
    partial class init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("web_api.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("id");

                    b.Property<bool>("AccountLocked")
                        .HasColumnType("boolean")
                        .HasColumnName("account_locked");

                    b.Property<bool>("AccountReset")
                        .HasColumnType("boolean")
                        .HasColumnName("account_reset");

                    b.Property<string>("Firstname")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("firstname");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("boolean")
                        .HasColumnName("is_admin");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("lastname");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("password_hash");

                    b.Property<string>("ProfilePhotoUrl")
                        .HasColumnType("text")
                        .HasColumnName("profile_photo_url");

                    b.Property<string>("SecurityQuestion")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("security_question");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("username");

                    b.Property<Guid?>("VehicleId")
                        .HasColumnType("uuid")
                        .HasColumnName("vehicle_id");

                    b.HasKey("Id")
                        .HasName("pk_users");

                    b.HasIndex("VehicleId")
                        .HasDatabaseName("ix_users_vehicle_id");

                    b.ToTable("users", (string)null);
                });

            modelBuilder.Entity("web_api.Models.Vehicle", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("id");

                    b.Property<int>("BikeCount")
                        .HasColumnType("integer")
                        .HasColumnName("bike_count");

                    b.Property<int>("SeatCount")
                        .HasColumnType("integer")
                        .HasColumnName("seat_count");

                    b.Property<string>("VehicleIconUrl")
                        .HasColumnType("text")
                        .HasColumnName("vehicle_icon_url");

                    b.HasKey("Id")
                        .HasName("pk_vehicles");

                    b.ToTable("vehicles", (string)null);
                });

            modelBuilder.Entity("web_api.Models.User", b =>
                {
                    b.HasOne("web_api.Models.Vehicle", "Vehicle")
                        .WithMany()
                        .HasForeignKey("VehicleId")
                        .HasConstraintName("fk_users_vehicles_vehicle_id");

                    b.Navigation("Vehicle");
                });
#pragma warning restore 612, 618
        }
    }
}
