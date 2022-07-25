﻿// <auto-generated />
using System;
using IdoApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace IDO.Migrations
{
    [DbContext(typeof(IdoContext))]
    [Migration("20220725182826_createdAllControllers")]
    partial class createdAllControllers
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.7");

            modelBuilder.Entity("IdoApi.Models.Admin", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("IdoApi.Models.Category", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("IdoApi.Models.Item", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Categoryid")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DueDate")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Estimate")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("Priorityid")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Statusid")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.HasIndex("Categoryid");

                    b.HasIndex("Priorityid");

                    b.HasIndex("Statusid");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("IdoApi.Models.Priority", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Priorities");
                });

            modelBuilder.Entity("IdoApi.Models.Status", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("Statuses");
                });

            modelBuilder.Entity("IdoApi.Models.Item", b =>
                {
                    b.HasOne("IdoApi.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("Categoryid");

                    b.HasOne("IdoApi.Models.Priority", "Priority")
                        .WithMany()
                        .HasForeignKey("Priorityid");

                    b.HasOne("IdoApi.Models.Status", "Status")
                        .WithMany()
                        .HasForeignKey("Statusid");

                    b.Navigation("Category");

                    b.Navigation("Priority");

                    b.Navigation("Status");
                });
#pragma warning restore 612, 618
        }
    }
}