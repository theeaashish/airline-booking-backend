"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Seats", [
      {
        airplaneId: 7,
        row: 1,
        col: "A",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 1,
        col: "B",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 1,
        col: "C",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 1,
        col: "D",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 1,
        col: "E",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 1,
        col: "F",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "A",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "B",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "C",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "D",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "E",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 7,
        row: 2,
        col: "F",
        type: "Economy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
